const app = require("express")();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const mongourl = "mongodb://localhost:27017/buses";
const PORT = 4000;

app.use(cors());
app.options("*", cors);

MongoClient.connect(mongourl, function (err, db) {
  if (err) throw err;
  console.log("Connected to Database");
  var dbo = db.db("buses");
  dbo
    .collection("routes")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});

app.listen(PORT, () =>
  console.log(`Server is running on https://localhost:${PORT}`)
);

app.get("/search", (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  if (from == "rit") {
    console.log(`From  : ${from} Destination : ${to}`);
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send({
      id: "2",
      name: "St. John",
      time: "2pm - 7pm",
      route: "Pampady - Kottayam",
      routes: [
        "Pampady",
        "RIT",
        "8th Mile",
        "Manarcad",
        "Kanjikuzhy",
        "Kottayam",
      ],
    });
  }
  if (to == "pampady") {
    console.log(`From  : ${from} Destination : ${to}`);
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send({
      id: "3",
      name: "Cee Vee",
      time: "2pm - 7pm",
      route: "Pampady - Kottayam",
      routes: [
        "Pampady",
        "RIT",
        "8th Mile",
        "Manarcad",
        "Kanjikuzhy",
        "Kottayam",
      ],
    });
  }
  if (to == "kottayam") {
    console.log(`From  : ${from} Destination : ${to}`);
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send({
      id: "4",
      name: "St. Mark",
      time: "2pm - 7pm",
      route: "Pampady - Kottayam",
      routes: [
        "Pampady",
        "RIT",
        "8th Mile",
        "Manarcad",
        "Kanjikuzhy",
        "Kottayam",
      ],
    });
  }
});

app.get("/busroute", (req, res) => {
  const id = req.query.id;
  console.log(`id is ${id}`);
//   res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.status(200).send({
//     id: "2",
//     name: "St. John",
//     routes: [
//       "Pampady",
//       "RIT",
//       "8th Mile",
//       "Manarcad",
//       "Kanjikuzhy",
//       "Kottayam",
//     ],
//     time: ["7pm", "7.30pm", "7.45pm", "8pm", "8.20pm", "8.40pm"],
//   });
if (id == "2") {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send({
      id: "2",
      name: "St. John",
      time: "2pm - 7pm",
      route: "Pampady - Kottayam",
      routes: [
        "Pampady",
        "RIT",
        "8th Mile",
        "Manarcad",
        "Kanjikuzhy",
        "Kottayam",
      ],
    times: ["7pm", "7.30pm", "7.45pm", "8pm", "8.20pm", "8.40pm"],
    });
  }
  if (id == "3") {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send({
      id: "3",
      name: "Cee Vee",
      time: "2pm - 7pm",
      route: "Pampady - Kottayam",
      routes: [
        "Pampady",
        "RIT",
        "8th Mile",
        "Manarcad",
        "Kanjikuzhy",
        "Kottayam",
      ],
      times: ["7pm", "7.30pm", "7.45pm", "8pm", "8.20pm", "8.40pm"],
    });
  }
  if (id == "4") {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send({
      id: "4",
      name: "St. Mark",
      time: "2pm - 7pm",
      route: "Pampady - Kottayam",
      routes: [
        "Pampady",
        "RIT",
        "8th Mile",
        "Manarcad",
        "Kanjikuzhy",
        "Kottayam",
      ],
      times: ["7pm", "7.30pm", "7.45pm", "8pm", "8.20pm", "8.40pm"],
    });
  }
});
