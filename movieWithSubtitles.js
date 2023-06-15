const express = require("express");
const app = express();

// Define a route for GET /api/v1/genre-movies-with-subtotals
app.get("/api/v1/genre-movies-with-subtotals", (req, res) => {
  // Implement the logic to fetch genre-wise movie list with numVotes subtotals from the database
  // Assuming you have a database connection established, here's an example using MySQL:
  const sql = `
    SELECT genres, primaryTitle, SUM(numVotes) AS subtotal
    FROM movies
    GROUP BY genres WITH ROLLUP;
  `;

  // Execute the query
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
