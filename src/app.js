import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send((message = "hey man"));
});
app.listen((process.env.PORT = 3000), () =>
  console.log("App is listening on port 3000..")
);

export default app;
