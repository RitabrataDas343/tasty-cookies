const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

let PORT = process.env.PORT;
if (PORT == "" || PORT == null) 
  PORT = 3000;

app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  const cookie = req.cookies.user;
  if (cookie === "admin") {
    res.sendFile(path.join(__dirname, "flag", "flag.html"));
    // res.send("GLUG{1t_w4s_4_t4sTy_c0oK1e}");
    return;
  }
  res.cookie("user", "user1");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
