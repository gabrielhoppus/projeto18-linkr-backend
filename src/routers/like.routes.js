import { Router } from 'express';
import { getLikes, postLike, userLikes } from '../controllers/like.controller.js';
import { validateToken } from '../middlewares/token.middleware.js';


const router = Router();

router.post('/likes', validateToken, postLike)
router.get('/likes', validateToken, getLikes)
router.get('/likes/:id', validateToken, userLikes)

export default router