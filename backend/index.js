const express = require('express');
const cors = require('cors');
const app = express();
const utils = require('./utils.js')
//NOTE: While using CommonJS instead of Type:module, you must invoke utils functions as (utils.NAMEHERE, e.g. utils.createOrder)
//This can be refactored later. See below for an example.
utils.sqlDebugTest('test string')

const { parse } = require('csv-parse/sync');
const { stringify } = require('csv-stringify/sync');
const fs = require('fs');

const port = 3000;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors());
app.use(express.json());

(async () => {
  try {
    const table = await knex.schema.hasTable('products');

    if (!table) {
      console.log('Setting up DB');
      await knex.migrate.latest();

      console.log('Seeding Database');
      await knex.seed.run();
    } else {
      console.log('Migration already performed')
    }


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
//////////////////////NEED TESTING///////////////////////
app.get('/role/:id', (req, res) => {
  let roleID = req.params.id;
  let category;

  knex('role')
    .select('*')
    .from('role')
    .where({ role_id: roleID, })
    .then(data => {
      category = getRoleFiles(roleID);
      let temp = data[0];
      let convert = { temp, category };
      let results = createRoleResults(convert);
      //console.log(results);
      res.status(200).json(results)
    });
  //check for

})

app.get('/user/:userid/orders/', (req, res) => {
  let userID = req.params.userid;
  knex('orders')
    .select('*')
    .from('orders')
    .where({ user: userID, })
    .then(data => {
      res.status(200).json(data)
    });
})

app.get('/user/:userid/orders/:orderID', (req, res) => {
  let userID = req.params.userid;
  let orderID = req.params.orderID
  knex('orders')
    .select('*')
    .from('orders')
    .where({ user: userID, order_id: orderID, })
    .then(data => {
      res.status(200).json(data)
    });
})

//POST New entries
app.post('/items/new/', async (req, res) => {
  try {
    await knex('products').insert(req.body.item);
    res.status(200).json({ message: 'Saved product information' });
    console.log('new product saved');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to save product' })
  }
})

app.post('/items/new/', async (req, res) => {
  try {
    await knex('products').insert(req.body.item);
    res.status(200).json({ message: 'Saved product information' });
    console.log('new product saved');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to save product' })
  }
})

app.post('/category/new/', async (req, res) => {
  try {
    await knex('category').insert(req.body.category);
    res.status(200).json({ message: 'Saved category information' });
    console.log('new category saved');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to save category' })
  }
})

app.post('/roles/new/', async (req, res) => {
  let roleID
  try {
    await knex('role').insert(req.body.role);
    res.status(200).json({ message: 'Saved role information' });
    console.log('new role saved');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to save role' })
  }

  await knex('role').select('role_id').from('role').where({ role_name: req.body.role.name })
    .then(date => {
      roleID = json(data);
      editRoleFiles(roleID, req.body.role.category);
    });


})

app.post('/user/:userid/orders/new/', async (req, res) => {
  try {
    await knex('orders').insert(req.body.order);
    res.status(200).json({ message: 'Saved order information' });
    console.log('new order saved');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to save order' })
  }
})

app.post('/user/new/', async (req, res) => {
  try {
    await knex('users').insert(req.body.user);
    res.status(200).json({ message: 'Saved user information' });
    console.log('new user saved');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to save user' })
  }
})


//UPDATE - BY ID
app.patch('/items/:itemid/update/', async (req, res) => {
  const itemID = req.params.itemid;
  const change = req.body.item;
  try {
    await knex('products').where("product_id", itemID).update(change);
    res.status(200).json({ message: 'Saved product change' });
    console.log('product altered');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to change product' })
  }
})

app.patch('/category/:categoryid/update/', async (req, res) => {
  const categoryID = req.params.categoryid;
  const change = req.body.category;

  try {
    await knex('category').where("category_id", categoryID).update(change);
    res.status(200).json({ message: 'Saved category change' });
    console.log('category altered');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to change category' })
  }
})

app.patch('/roles/:roleid/update/', async (req, res) => {
  const roleID = req.params.roleid;
  const change = req.body.role;
  const category = req.body.role.category;
  try {
    await knex('role').where("role_id", roleID).update(change);
    editRoleFiles(roleID, category);
    res.status(200).json({ message: 'Saved role change' });
    console.log('role altered');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to change role' })
  }
})

app.patch('/users/:userid/orders/:orderid/update/', async (req, res) => {
  const orderID = req.params.orderid;
  const change = req.body.order;

  try {
    await knex('orders').where("order_id", orderID).update(change);
    res.status(200).json({ message: 'Saved order change' });
    console.log('order altered');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to change order' })
  }
})

app.patch('/users/:userid/update/', async (req, res) => {
  const userID = req.params.userid;
  const change = req.body.user;
  try {
    await knex('users').where("user_id", userID).update(change);
    res.status(200).json({ message: 'Saved user change' });
    console.log('user altered');
  } catch (err) {
    console.error('No bueno...', err);
    res.status(500).json({ error: 'Failed to change user' })
  }
})

//DELETE - BY ID
app.delete('/items/delete/:itemid', async (req, res) => {
  const itemID = req.params.itemid
  try {
    await knex('products').where('product_id', itemID).del();
    console.log('Deleted product');
    res.status(200).json({ message: "Product Deleted" })

  } catch (err) {
    console.error("Delete fail:", err);
    res.status(500).json({ error: "Failed to delete." });
  }
})

app.delete('/category/delete/:categoryid', async (req, res) => {
  const categoryID = req.params.categoryid
  try {
    await knex('category').where('category_id', categoryID).del();
    console.log('Deleted category');
    res.status(200).json({ message: "Category Deleted" })

  } catch (err) {
    console.error("Delete fail:", err);
    res.status(500).json({ error: "Failed to delete." });
  }
})

app.delete('/role/delete/:roleid', async (req, res) => {
  const roleID = req.params.roleid;
  try {
    await knex('role').where('role_id', roleID).del();
    deleteRoleFiles(roleID);
    console.log('Deleted role');
    res.status(200).json({ message: "Role Deleted" })

  } catch (err) {
    console.error("Delete fail:", err);
    res.status(500).json({ error: "Failed to delete." });
  }
})

app.delete('/users/:userid/orders/:orderid/delete/', async (req, res) => {
  const userID = req.params.userid;
  const orderID = req.params.orderid;

  try {
    await knex('orders').where('order_id', orderID).del();
    console.log('Deleted order');
    res.status(200).json({ message: "Order Deleted" })

  } catch (err) {
    console.error("Delete fail:", err);
    res.status(500).json({ error: "Failed to delete." });
  }
})

app.delete('/users/:userid/delete/', async (req, res) => {
  const userID = req.params.userid;


  try {
    await knex('users').where('user_id', userID).del();
    console.log('Deleted user');
    res.status(200).json({ message: "User Deleted" })

  } catch (err) {
    console.error("Delete fail:", err);
    res.status(500).json({ error: "Failed to delete." });
  }
})

function getRoleFiles(id) {
  console.log("getRoleFiles called")
  const roleFile = fs.readFileSync(`./Roles/role${id}.csv`, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      return;
    }
  });

  let records = parse(roleFile, {
    columns: true,
    skip_empty_lines: true,
  })

  console.log(records);
  return records;

}

function editRoleFiles(id, data) {
  const csvData = stringify(data, { header: true, columns: ['category'] });
  try {
    fs.writeFileSync(`./Roles/role${id}.csv`, csvData);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function deleteRoleFiles(id) {
  fs.unlink(`./Roles/role${id}.csv`, function (err) {
    if (err) throw err;
    console.log('Role Deleted');
  })
}

function createRoleResults(obj) {
  let results = {
    role_id: obj.temp.role_id,
    role_name: obj.temp.role_name,
    role_description: obj.temp.role_description,
    category: obj.category
  }

  return results;
}
module.exports = app;
