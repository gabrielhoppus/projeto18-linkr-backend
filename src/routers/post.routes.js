import { Router } from "express";
import {
  publishPost,
  getPosts,
  destroyPost,
} from "../controllers/post.controller.js";
import { validateToken } from "../middlewares/token.middleware.js";

const router = Router();

router.post("/posts", publishPost);
router.get("/posts", getPosts);
router.delete("/posts/:id", validateToken, destroyPost);

export default router;
