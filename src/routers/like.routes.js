import { Router } from 'express';
import { validateToken } from '../middlewares/token.middleware.js';

const router = Router();

router.post('/likes', validateToken, )

export default router