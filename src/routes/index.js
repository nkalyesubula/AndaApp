import express from "express";
import usersRoutes from "../routes/users";
import commentRoutes from "../routes/comment";

export default app => {
  app.use(usersRoutes, commentRoutes);
};
