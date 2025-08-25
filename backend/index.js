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
app.get('/user/:id/', (req, res) => {
  let userID = req.params.id;
  knex('user')
    .select('*')
    .from('users')
    .where({ user_id: userID, })
    .then(data => {
      res.status(200).json(data)
    });
})

app.get('/items/:id/', (req, res) => {
  let productID = req.params.id;
  knex('products')
    .select('*')
    .from('products')
    .where({ product_id: productID, })
    .then(data => {
      res.status(200).json(data)
    });
})

app.get('/category/:id', (req, res) => {
  let categoryID = req.params.id;
  knex('category')
    .select('*')
    .from('category')
    .where({ category_id: categoryID, })
    .then(data => {
      res.status(200).json(data)
    });
})

app.get('/role/:id', (req, res) => {
  let roleID = req.params.id;
  knex('role')
    .select('*')
    .from('users')
    .where({ role_id: roleID, })
    .then(data => {
      res.status(200).json(data)
    });
})

app.get('/user/:id/orders/', (req, res) => {
  let userID = req.params.id;
  knex('orders')
    .select('*')
    .from('orders')
    .where({ user: userID, })
    .then(data => {
      res.status(200).json(data)
    });
})

app.get('/user/:id/orders/:orderID', (req, res) => {
  let userID = req.params.id;
  let orderID = req.params.orderID
  knex('orders')
    .select('*')
    .from('orders')
    .where({ user: userID, order_id: orderID, })
    .then(data => {
      res.status(200).json(data)
    });
})

//POST BY ID

//UPDATE - BY ID

//DELETE - BY ID

module.exports = app;