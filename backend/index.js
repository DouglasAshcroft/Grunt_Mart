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

