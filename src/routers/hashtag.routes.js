import { Router } from 'express';
import { getPostsFromHashTag, postHashTags } from '../controllers/hashtag.controller.js';
import { validateToken } from '../middlewares/token.middleware.js';

const router = Router();

router.post('/hashtag', validateToken, postHashTags )
router.get('/hashtag/:hashtag', validateToken, getPostsFromHashTag)

export default router