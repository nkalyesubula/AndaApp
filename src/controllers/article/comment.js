import CommentService from "../../helpers/validations/comment";
import Util from "../../middleware/util";

const util = new Util();

class CommentController {
  static async createComment(req, res) {
    const result = CommentService.validateComment(req.body);
    if (result.error)
      return res
        .status(400)
        .send({ status: 400, error: result.error.details[0].message });

    const newComment = req.body;
    try {
      const createdComment = await CommentService.addComment(newComment);
      util.setSuccess(201, "Comment Added!", createdComment);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default CommentController;
