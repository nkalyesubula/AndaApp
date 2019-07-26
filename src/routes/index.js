<<<<<<< HEAD
import express from "express";
import usersRoutes from "../routes/users";
import articlesRoutes from "../routes/articles";
export default app => {
  app.use(usersRoutes);
  app.use(articlesRoutes);
};

=======
>>>>>>> 02fe618494bc3fc079934306585d05a7e3b6a623
import "@babel/polyfill";
const express=require('express');
const bodyParser =require('body-parser');
const path=require('path');
const postRoutes= require('./articles/articles');
const userRoutes = require('./user/user');
const adminRoutes = require('./admin/admin');
const commentRoutes= require('./comments/comments');
const categoryRoutes= require('./categories/categories');
import swaggerUi from 'swagger-ui-express';
const  swaggerDoc  = require('./swagger.json');
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 app.use(cors());
 app.use(bodyParser.json());
 app.use('/AndaApp', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const api_version = process.env.api_version;

const base_url = '/api/'+ api_version;
app.use(base_url +'/auth',userRoutes);
app.use(base_url +'/post', postRoutes);
app.use(base_url +'/comment', commentRoutes);
app.use(base_url +'/category', categoryRoutes);
app.use(base_url +'/admin', adminRoutes);


module.exports=app;