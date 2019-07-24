import usersRoutes from "../routes/users";
import articlesRoutes from "../routes/articles";

export default app => {
  app.use(usersRoutes);
  app.use(articlesRoutes);
};
