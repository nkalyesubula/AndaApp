import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to AndaApp");
});

app.listen((process.env.PORT = 3000), () =>
  console.log("App is listening on port 3000..")
);

export default app;
