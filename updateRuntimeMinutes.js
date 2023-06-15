const express = require("express");
const app = express();

// Define a route for POST /api/v1/update-runtime-minutes
app.post("/api/v1/update-runtime-minutes", (req, res) => {
  // Implement the logic to update runtimeMinutes of all movies using an SQL query
  // Assuming you have a database connection established, here's an example using MySQL:
  const sql = `
    UPDATE movies
    SET runtimeMinutes = 
      CASE
        WHEN genres = 'Documentary' THEN runtimeMinutes + 15
        WHEN genres = 'Animation' THEN runtimeMinutes + 30
        ELSE runtimeMinutes + 45
      END;
  `;

  // Execute the query
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "Runtime minutes updated successfully" });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
