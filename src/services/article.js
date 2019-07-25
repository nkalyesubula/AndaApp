import model from "../models/index";

class ArticleService {
  static async getAllArticle() {
    try {
      return await model.Article.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async findOneArticle(email) {
    try {
      return await model.Article.findOne({
        where: { id: String(email) }
      });
    } catch (error) {
      throw error;
    }
  }

  static async createArticle(newArticle) {
    try {
      return await model.Article.create(newArticle);
    } catch (error) {
      throw error;
    }
  }

  static async updateArticle(id, updateArticle) {
    try {
      const ArticleToUpdate = await model.Article.findOne({
        where: { id: Number(id) }
      });

      if (ArticleToUpdate) {
        await model.Article.update(updateArticle, {
          where: { id: Number(id) }
        });

        return updateArticle;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getOneArticle(id) {
    try {
      const theArticle = await model.Article.findOne({
        where: { id: Number(id) }
      });

      return theArticle;
    } catch (error) {
      throw error;
    }
  }

  static async deleteArticle(id) {
    try {
      const ArticleToDelete = await model.Article.findOne({
        where: { id: Number(id) }
      });

      if (ArticleToDelete) {
        const deletedArticle = await model.Article.destroy({
          where: { id: Number(id) }
        });
        return deletedArticle;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async getArticleByCol(col) {
    try {
      const ArticleToDelete = await model.$Article.findAll({
        where: { id: String(col) }
      });

      if (ArticleToDelete) {
        const deletedArticle = await model.Article.destroy({
          where: { id: Number(id) }
        });
        return deletedArticle;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ArticleService;
