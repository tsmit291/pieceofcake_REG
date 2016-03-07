var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function kitchen(){
  return knex('kitchen');
}

function living(){
  return knex('living');
}

function outdoor(){
  return knex('outdoor');
}

function registry(){
  return knex('registry');
}


/* GET home page. */
router.get('/', function(req, res, next) {
  kitchen().select().then(function (results){
    res.json(results);
  });

});

module.exports = router;
