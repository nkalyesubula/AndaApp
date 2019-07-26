import express from 'express';
import BlogsController from '../controllers/blogs/blogsControllers';


const router = express.Router();

router.post('/api/blogs', BlogsController.addBlog);
router.get('/api/blogs',BlogsController.getAllBlogs);
router.delete('/api/blogs/:id',BlogsController.deleteBlog);

export default router;