const express = require("express");
const app = express();

// Define a route for GET /api/v1/longest-duration-movies
app.get("/api/v1/longest-duration-movies", (req, res) => {
  // Implement the logic to retrieve the top 10 movies with the longest runtime from the database
  // and send the JSON response

  // Assuming you have a database connection established, here's an example using MySQL:
  const sql = `
    SELECT tconst, primaryTitle, runtimeMinutes, genres
    FROM movies
    ORDER BY runtimeMinutes DESC
    LIMIT 10;
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
