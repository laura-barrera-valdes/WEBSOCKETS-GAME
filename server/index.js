const express = require("express"); // Llame a express
const app = express(); // Inicie express

const grandsonRouter = require("./grandson"); // Enrutador llama al modelo que es quien tiene la logica da los datos

app.use("/grandson", grandsonRouter);

//app.get("/grandson", (req, res) => {
//  res.send("Un monton de nietos.");
//});

app.get("/family", (req, res) => {
  res.send("Un monton de intergrantes de la familia.");
});

app.get("/father", (req, res) => {
  res.send("Un monton de padres.");
});

app.get("/mother", (req, res) => {
  res.send("Un monton de madres.");
});

app.get("/eldestdaughter", (req, res) => {
  res.send("Un monton de hijas mayores.");
});

app.get("/youngetsdaughter", (req, res) => {
  res.send("Un monton de hijas menores.");
});

app.listen(3000, () => {
  console.log("Started listening at 3000");
});
