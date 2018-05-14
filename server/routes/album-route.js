const albumRoute = (app, router) => {
  const albums = {
    something: 'something',
  };

  router.get('/albums', (req, res) => {
    res.json(albums);
  });
};

export default albumRoute;
