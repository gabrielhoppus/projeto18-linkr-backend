import { Router } from "express";
import {
  publishPost,
  getPosts,
  destroyPost,
  editPost,
} from "../controllers/post.controller.js";
import { validateToken } from "../middlewares/token.middleware.js";

const router = Router();

router.post("/posts", publishPost);
router.get("/posts", getPosts);
router.delete("/posts/:id", validateToken, destroyPost);
router.patch("/posts/:id", validateToken, editPost);
export default router;
