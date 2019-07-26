import express from "express";
import usersRoutes from "../routes/users";
import commentRoutes from "../routes/comment";
import articlesRoutes from "../routes/articles";

export default app => {
  app.use(usersRoutes, usersRoutes, commentRoutes, articlesRoutes);
};
