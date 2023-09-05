// Import dependencies
const express = require('express');

// Create an Express app
const app = express();

// Define the port
const PORT = 9000;

// Middleware for parsing JSON
app.use(express.json());

// Define a root route
app.get('/', (req, res) => {
    try {
        res.send({ message: "Server is Live" });

    } catch (error) {
        res.error({ message: "Server is Live" });

    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
