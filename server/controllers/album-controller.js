import express from 'express';

const albumController = (app) => {
  const router = express.Router();
  const { userService, albumService } = app.services;

  router.get('/all', async (req, res) => {
    try {
      const allAlbums = await albumService.getAll();
      res.send(allAlbums);
    } catch (e) {
      res.status(e.status).send({ e });
    }
  });

  router.get('/myAlbums', async (req, res) => {
    try {
      const currentUser = await userService.getMe(req);
      console.log('currentUser', currentUser);
      const myAlbums = await albumService.findUserAlbums(currentUser.id);
      console.log('myAlbums', myAlbums);
      res.send(myAlbums);
    } catch (e) {
      console.error('Error at get myAlbums', e);
      res.status(e.status).send({ e });
    }
  });

  return router;
};

export default albumController;
