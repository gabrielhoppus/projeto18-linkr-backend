import { Router } from 'express';
import { publishPost, getPosts } from '../controllers/post.controller.js';

const router = Router();

router.post('/posts',publishPost);
router.get('/posts', getPosts);

export default router;