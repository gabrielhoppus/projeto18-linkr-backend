import { Router } from 'express';
import { validateSignUp, validateSignIn } from '../middlewares/login.middleware.js';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { signInSchema, signUpSchema } from '../schemas/login.schemas.js';
import { signIn, signUp } from '../controllers/login.controller.js';

const router = Router();

router.post('/sign-up',
    validateSchema(signUpSchema),
    validateSignUp,
    signUp);
router.post('/sign-in',
    validateSchema(signInSchema),
    validateSignIn,
    signIn);

export default router;