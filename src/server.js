const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://anverze:anverze@cluster0-7n7zd.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());

app.use(routes);
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.listen(3333);
