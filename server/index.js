const port = 3000;
const spdy = require("spdy");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// app.get("*", (req, res) => {
//   res.status(200).json({ message: "ok" });
// });

app.use(express.static(path.resolve(__dirname, "..")));

// const options = {
//   key: fs.readFileSync(__dirname + "/server.key"),
//   cert: fs.readFileSync(__dirname + "/server.crt")
// };

// spdy.createServer(options, app).listen(port, error => {
//   if (error) {
//     console.error(error);
//     return process.exit(1);
//   } else {
//     console.log("Listening on port: " + port + ".");
//   }
// });

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
