const express = require("express");
const path = require("path");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");

//Connect Database
connectDB();

app.use(cors());
//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
