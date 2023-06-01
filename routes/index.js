const express = require('express');
const router = express.Router();
const connection = require('../bin/db');


router.post('/', (req, res, next) => {
  const { nombre, pais } = req.body;

  connection.query(
    'INSERT INTO registro(nombre, pais) value (?, ?)', [nombre, pais],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        res.json({ message: 'error' });
      }
      if (results) res.json({ message: 'Insercion Exitosa' });
    }
  );
});


module.exports = router;