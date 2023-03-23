import { Router } from 'express';
import { getLikes, postLike, removeLike } from '../controllers/like.controller.js';
import { validateToken } from '../middlewares/token.middleware.js';


const router = Router();

router.post('/likes', validateToken, postLike)
router.delete('/likes', validateToken, removeLike)
router.get('/likes', validateToken, getLikes)

export default router