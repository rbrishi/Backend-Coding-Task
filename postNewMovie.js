const express = require("express");
const app = express();

// Add middleware to parse JSON requests
app.use(express.json());

// Define a route for POST /api/v1/new-movie
app.post("/api/v1/new-movie", (req, res) => {
  // Extract the movie details from the request body
  const { tconst, primaryTitle, runtimeMinutes, genres } = req.body;

  // Implement the logic to save the new movie details into the database
  // Assuming you have a database connection established, here's an example using MySQL:
  const sql = `
    INSERT INTO movies (tconst, primaryTitle, runtimeMinutes, genres)
    VALUES (?, ?, ?, ?);
  `;

  // Execute the query with the movie details
  db.query(
    sql,
    [tconst, primaryTitle, runtimeMinutes, genres],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json({ message: "success" });
      }
    }
  );
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
