import express from "express";
import usersRoutes from "../routes/users";
import articlesRoutes from "../routes/articles";
import blogsRoutes from '../routes/blogs';
export default app => {
  app.use(usersRoutes);
  app.use(articlesRoutes);
  app.use(blogsRoutes);
};
