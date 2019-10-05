const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on("connection", socket => {
  console.log("Usuário conectado", socket.id);
});

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

server.listen(3333);
