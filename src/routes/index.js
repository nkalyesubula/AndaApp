const path=require('path');
const postRoutes= require('./articles/articles');
const userRoutes = require('./user/user');
const adminRoutes = require('./admin/admin');
const commentRoutes= require('./comments/comments');
const categoryRoutes= require('./categories/categories');
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
dotenv.config();


  
const api_version = process.env.API_VERSION;

const base_url = '/api/'+ api_version;




export default app =>{
// app.use(base_url +'/auth',userRoutes);
// app.use(base_url +'/post', postRoutes);
// app.use(base_url +'/comment', commentRoutes);
// app.use(base_url +'/category', categoryRoutes);
app.use(base_url +'/admin', adminRoutes);
};