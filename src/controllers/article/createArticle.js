import Models from "../../models/index";
import dotenv from "dotenv";

dotenv.config();

const articles = Models.Article;

class Article {
  static createArticle(req, res) {
    const { title, categoryId, body, summary, userId } = req.body;
    const articleSchema = {
      title,
      categoryId,
      body,
      summary,
      userId
    };

    articles
      .create(articleSchema)
      .then(article => {
        return res.status(201).json({
          status: 201,
          message: "Article created successfully",
          data: {
            title: article.title,
            categoryId: article.categoryId,
            body: article.body,
            summary: article.summary
          }
        });
      })
      .catch(err => {
        return res.status(500).json({
          status: 500,
          message: err
        });
      });
  }
}

export default Article;
