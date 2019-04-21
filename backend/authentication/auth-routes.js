import { Router } from 'express';
import { isNotLoggedIn } from './auth-middleware';
import { signUp } from './sign-up';
import { signIn } from './sign-in';

const router = Router();

router.post('/signUp', isNotLoggedIn, (req, res) => signUp(req, res));
router.post('/signIn', isNotLoggedIn, (req, res) => signIn(req, res));

export default router;
