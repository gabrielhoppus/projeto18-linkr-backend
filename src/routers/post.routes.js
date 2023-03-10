import { Router } from "express";
import {
  publishPost,
  getPosts,
  destroyPost,
  editPost,
} from "../controllers/post.controller.js";
import { validateToken } from "../middlewares/token.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { postSchema } from "../schemas/post.schema.js";

const router = Router();

router.post("/posts", validateSchema(postSchema), validateToken, publishPost);
router.get("/posts", validateToken, getPosts);
router.delete("/posts/:id", validateToken, destroyPost);
router.patch("/posts/:id", validateToken, editPost);

export default router;
