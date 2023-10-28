const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/TaskRoute");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo is active"))
  .catch((err) => console.log("sikinti", err));

// Change this line:
// app.use("/", routes);

// To this:
function useRouter(req, res, next) {
  routes(req, res, next);
}

app.use("/api", useRouter);

app.listen(PORT, () => console.log(`Listening port : ${PORT}`));