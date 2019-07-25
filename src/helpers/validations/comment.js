const Joi = require("joi");
import database from "../../models";

class CommentHelper {
  //validate comment
  static validateComment(postedData) {
    const schema = {
      content: Joi.min(3).required(),
      user_id: Joi.number()
        .positive()
        .required(),
      blog_id: Joi.number()
        .positive()
        .required()
    };
    return Joi.validate(postedData, schema);
  }

  //add comment
  static async addComment(newComment) {
    try {
      return await database.Comment.create(newComment);
    } catch (error) {
      throw error;
    }
  }
}

export default CommentHelper;
