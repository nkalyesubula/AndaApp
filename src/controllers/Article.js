import ArticleService from "../services/article";
import Util from "../middleware/util";
import dotenv from "dotenv";

dotenv.config();
const util = new Util();

class Article {
  static async createArticle(req, res) {
    const { title, categoryId, body, summary, userId } = req.body;
    const articleSchema = {
      title,
      categoryId,
      body,
      summary,
      userId
    };
    try {
      const createdArticle = await ArticleService.createArticle(articleSchema);
      const setSuccess = util.setSuccess(
        201,
        "Article created successfully",
        createdArticle
      );
      return util.send(res);
    } catch (error) {
      const setError = util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async getallArticle(req,res){
    try{
      const allblogs=await ArticleService.getAllArticle();
      if(allblogs.length>0){
          util.setSuccess(200,"Blogs retrieved",allblogs);
      }else{
          util.setSuccess(200,'No blogs found');
      }
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
        const blogTodelete=await ArticleService.deleteArticle(id);
        if(blogTodelete){
            util.setSuccess(200,'blog deleted');
        }else{
            util.setError(404,`blog with the id ${id} cannot be found`);

        }
        return util.send(res);
    }
    catch(error){
        util.setError(400,error.message);
        return util.send(res);
    }
}
}

export default Article;
