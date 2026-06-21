import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

import {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  togglePublishPost,
} from "../controllers/postController.js";

const postRouter = Router();

// postRouter.get("/protected", authMiddleware, (req, res) => {
//   res.json({
//     message: "You are authorized",
//     user: req.user,
//   });
// });

////public
postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);

////protected
postRouter.post("/", authMiddleware, createPost);
postRouter.put("/:id", authMiddleware, updatePost);

postRouter.delete("/:id", authMiddleware, deletePost);

postRouter.patch("/:id/publish", authMiddleware, togglePublishPost);

export default postRouter;
