import database from '../models/index';
class BlogsService{
    static async getAllBlogs(){
        try{
            return await database.blogs.findAll();
        }
        catch(error){
            throw error;
        }
    }
    static async addBlog(newblog){
        try {
            return await database.blogs.create(newblog);

        }
        catch(error){
            throw error;
        }
    }
    static async deleteblog(id){
        try{
            const blogTodelete=await database.blogs.findOne({where:{id:Number(id)}});
            if(blogTodelete){
                const deleteblog=await database.blogs.destroy({
                    where:{id:Number(id)}
                });
                return deleteblog
            }
            return null;
        }
        catch(error){
            throw error;
        }
    }
}
export default BlogsService;
