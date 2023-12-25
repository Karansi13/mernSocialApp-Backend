const express = require("express")
const app = express();
const cookieParser = require("cookie-parser");

if(process.env.NODE_ENV !== 'production'){   
    require("dotenv").config({ path: "backend/config/config.env"})
}

// Using Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // we can use body-parser instead
app.use(cookieParser())

// Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;