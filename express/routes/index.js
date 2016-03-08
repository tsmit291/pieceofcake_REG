var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function registryObjs(){
  return knex('registryObjs')
};

function registry(){
  return knex('registry')
};


/* GET registry home page with ALL registry items. */
router.get('/registries', function(req, res, next) {
  registryObjs().select().then(function (results){
    res.json(results)
    });
  });

/* Add new registry item */
router.post('/registries', function(req, res, next){
  registryObjs().insert(req.body).then(function (results){
    res.sendStatus(200);
  }).catch(function(err){
    res.status(500).json(err)
  })
});

/*Edit a registry item */



module.exports = router;
