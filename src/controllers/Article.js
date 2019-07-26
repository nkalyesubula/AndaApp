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
}

export default Article;
