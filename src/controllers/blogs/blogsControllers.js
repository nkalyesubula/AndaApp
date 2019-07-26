import BlogsService from '../../services/blogsService';
import Util from '../../utils/utils';
const util=new Util();
class BlogsController{
    static async getAllBlogs(req,res){
        try{
            const allblogs=await BlogsService.getAllBlogs();
            if(allblogs.length>0){
                util.setSuccess(200,"Blogs retrieved",allblogs);
            }else{
                util.setSuccess(200,'No blogs found');
            }
           return util.send(res);
        }
        catch(error){
            util.setError(400,error);
            return util.send(res);
        }
    }
    static async addBlog(req,res){
        if(!req.body.description||!req.body.title){
            util.setError(400,'please provide complete details');
            return util.send(res);
        }
        const newblog=req.body;
        try{
            const createblog=await BlogsService.addBlog(newblog);
            util.setSuccess(201,'blog created',createblog);
            return util.send(res);
        }
        catch(error){
            util.setError(400,error.message);
            return util.send(res);
        }
    }
    static async deleteBlog(req,res){
        const {id}=req.params;
        if(!Number(id)){
            util.setError(400,'please provide a numeric value');
            return util.send(res);
        }
        try{
            const blogTodelete=await BlogsService.deleteblog(id);
            if(blogTodelete){
                util.setSuccess(200,'blog deleted');
            }else{
                util.setError(404,`blog with the id ${id} cannot be found`);

            }
            return util.send(res);
        }
        catch(error){
            util.setError(400,error);
            return util.send(res);
        }
    }
}
export default BlogsController;