const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors());
app.use(express.json());

(async () => {
  try {
    console.log('Setting up DB');
    await knex.migrate.latest();

    console.log('Database ready');

    app.listen(port, () => {
      console.log('Server listening on port ' + port);
    })
  } catch (err) {
    console.error('Database setup failed: ', err);
  }
})();

//GET requests
app.get('/items/', (req, res) => {
  knex('products')
    .select('*')
    .from('products')
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/category/', (req, res) => {
  knex('category')
    .select('*')
    .from('category')
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/roles/', (req, res) => {
  knex('role')
    .select('*')
    .from('role')
    .then(data => {
      res.status(200).json(data);
    })
})


//GET BY ID


//POST BY ID

//UPDATE - BY ID

//DELETE - BY ID

module.exports = app;