const express = require("express");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const router = express.Router();
//url posts/

router.get("/", postController.All_posts);
router.post("/", postController.Add_Post);
router.put("/postId", postController.Update_Post);
router.delete("/:postId", postController.Remove_Post);
//
router.post("/:postId/like", postController.Like_Post);
router.delete("/:postId/like", postController.Unlike_Post);
router.get("/:userId", postController.User_posts);

router.post("/:postId/comments", commentController.Add_comment);
router.get("/:postId/comments", commentController.Get_comments);
router.delete("/:postId/comments/:commentId", commentController.Remove_comment);

module.exports = router;
//
