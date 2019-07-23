import express from 'express';
import usersRoutes from '../routes/users';

export default (app) => {
    app.use(usersRoutes);
};
