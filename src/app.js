import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to AndaApp");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
