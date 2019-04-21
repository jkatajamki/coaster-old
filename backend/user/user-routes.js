import { Router } from 'express';
import { isLoggedIn } from '../authentication/auth-middleware';
import { findUserById } from './user';
import handleError from '../routing/handle-error';

const router = Router();

router.get('/me', isLoggedIn, (req, res) => {
  findUserById(req.user.id)
    .then((user) => {
      res.status(200).send({
        user
      });
    })
    .catch((err) => handleError(err, req, res))
});

export default router;
