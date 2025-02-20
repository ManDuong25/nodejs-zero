require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");

const app = express(); // App cua express
const port = process.env.PORT || 3001; // port cua App
const hostname = process.env.HOST_NAME || "localhost";

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

// Khai báo route
app.use(webRoutes); // Tham số đầu tiên là route giả định
// ví dụ 1: tham số 1 -> '/' thì vẫn dùng http://localhost:3000/manduong -> Vô bth
// ví dụ 2: tham số 1 -> '/test' thì không vô được http://localhost:3000/manduong, mà phải vô http://localhost:3000/test/manduong

// Test connection

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>>> ERROR CONNECT TO DB: ", error);
  }
})();
