import Models from "../models";
import dotenv from "dotenv";
import database from '../models';

dotenv.config();

const articles = Models.Article;

export const Article = class Article {
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

export const Articles = class ViewOne {
  static detail(req, res) {
      articles.findByPk(req.params.articleId)
      .then(blog => {
        try {
            if (!blog) {
                res.status(404).json({error: `Cannot find Article with the id ${req.params.articleId}`});
            } else {
                res.status(200).json({'Article': blog});
            }
            return;
            } catch (error) {
            res.status(500).json({error: 'Internal error'});
            }
          res.status(200).json({blog,})
        }
    )
  }
}
// export default Article;

// export const Articles = class ArticleController {
//     static async getAllArticles(req, res) {
//       try {
//         const allArticles = await ArticleService.getAllArticles();
//         if (allArticles.length > 0) {
//           res.status(200).json({'Articles retrieved': allArticles});
//         } else {
//           res.status(200).json({msg: 'No Article found'});
//         }
//         return;
//       } catch (error) {
//         res.status(400).json({error});
//         return;
//       }
//     }
  
//     static async addArticle(req, res) {
//       if (!req.body.title || !req.body.price || !req.body.description) {
//         util.setError(400, 'Please provide complete details');
//         return util.send(res);
//       }
//       const newArticle = req.body;
//       try {
//         const createdArticle = await ArticleService.addArticle(newArticle);
//         util.setSuccess(201, 'Article Added!', createdArticle);
//         return util.send(res);
//       } catch (error) {
//         util.setError(400, error.message);
//         return util.send(res);
//       }
//     }
  
//     static getArticle(req, res) {
//       const { id } = req.params;
  
//     //   if (!Number(id)) {
//     //     res.status(400).json({error: 'Article Id must be a number'});
//     //     return util.send(res);
//     //   }
  
//       try {
//         const theArticle = ArticleService.getArticle(id);
  
//         if (!theArticle) {
//           res.status(404).json({error: `Cannot find Article with the id ${id}`});
//         } else {
//           res.status(200).json({'Article': theArticle});
//         }
//         return;
//       } catch (error) {
//         res.status(404).json({error: 'Internal error'});
//       }
//     }
// }