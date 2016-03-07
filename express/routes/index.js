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


/* GET registry home page with ALL registry items. */
router.get('/', function(req, res, next) {
  kitchen().select().then(function (kResults){
    living().select().then(function (lResults){
      outdoor().select().then(function (oResults){
      });
    });
    res.json(kResults, lResults, oResults)
  });
});


/*GET registry home page for kitchen items.*/
router.get('/kitchen', function(req, res, next){
  kitchen().select().then(function (results){
    res.json(results);
  });
});

/*GET registry home page for living items. */
router.get('/living', function(req, res, next){
  living().select().then(function (results){
    res.json(results);
  });
});

/*GET registry home page for outdoor items.*/
router.get('/outdoor', function(req, res, next){
  outdoor().select().then(function (results){
    res.json(results);
  });
});



module.exports = router;
