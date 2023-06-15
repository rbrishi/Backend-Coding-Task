const express = require("express");
const app = express();

// Define a route for GET /api/v1/top-rated-movies
app.get("/api/v1/top-rated-movies", (req, res) => {
  // Implement the logic to fetch movies with average rating > 6.0 from the database
  // Assuming you have a database connection established, here's an example using MySQL:
  const sql = `
    SELECT tconst, primaryTitle, genres, averageRating
    FROM movies
    WHERE averageRating > 6.0
    ORDER BY averageRating DESC;
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
