import express from "express";
import bodyparser from 'body-parser';
import routes from './routes/index';

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to AndaApp");
});

routes(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
export default app;
