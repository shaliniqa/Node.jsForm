var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'Express'+req.params.id });
});*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyForm' });
});
router.get('/form', function(req, res, next){
  res.render('form');
});

router.post('/form', function(req, res, next)
{
   var db=req.db;
   var name=req.body.name;
   var age=req.body.age;
   var nationality=req.body.nationality;

   var collection=db.get('usercollection');

   collection.insert({
     "name": name,
     "age": age,
     "nationality": nationality
   },
   function(err, docs){
     if(err)
     {
       res.send("database connectivity problem");
     }
     else
     {
        res.send("successfully updated");
     }
   });
});

router.post('/', function(req, res, next){
  res.send("thanku");
});


module.exports = router;
