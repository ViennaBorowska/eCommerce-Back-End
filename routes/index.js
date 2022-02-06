const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use('/', (req, res) => {
  res.send(
    `<h1>Oops, this isn't the right route!</h1><br><h2>Add routes in the address bar to see your database tables e.g. localhost:3001/api/products</h2><br><h1>Cool, huh?`
  );
});

module.exports = router;
