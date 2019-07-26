import articleModel from '../../models';
import dotenv from "dotenv";

dotenv.config();

class singleArticle {
    static detail(req, res) {
        articleModel.Article.findByPk(req.params.articleId)
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
          }
      )
    }
}

export default singleArticle;