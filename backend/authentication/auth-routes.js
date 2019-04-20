import { Router } from 'express';
import { isNotLoggedIn } from './auth-middleware';
import { signUp } from './sign-up';

const router = Router();

router.post('/signUp', isNotLoggedIn, (req, res) => signUp(req, res));

export default router;
