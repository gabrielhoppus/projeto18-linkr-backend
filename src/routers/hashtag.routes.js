import { Router } from 'express';
import { getHashTags, getPostsFromHashTag, postHashTagPosts, postHashTags } from '../controllers/hashtag.controller.js';
import { validateToken } from '../middlewares/token.middleware.js';

const router = Router();

router.post('/hashtag', validateToken, postHashTags )
router.post('/hashtag/post',validateToken, postHashTagPosts )
router.get('/hashtag', getHashTags)
router.get('/hashtag/:hashtag', validateToken, getPostsFromHashTag)

export default router