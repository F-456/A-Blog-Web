const express = require("express");
const app = express();
const cors = require("cors");
const corsOption = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOption));

app.get("/api", (req, res) => {
    res.json({ "users": ["Userone", "Usertwo", "Userthree", "Testing for express backend"] })
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
});
