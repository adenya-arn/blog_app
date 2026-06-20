import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const postRouter = Router();

postRouter.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user,
  });
});

export default postRouter;
