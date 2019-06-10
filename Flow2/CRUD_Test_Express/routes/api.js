var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET users listing. */
router.get('/random', function(req, res, next) {
  res.json(jokes.getRandomJoke());
});

router.get('/all',function(req,res){
  res.json(jokes.getAllJokes())
})

router.post('/addJoke',function(req,res){
 // res.json(jokes.addJoke("hej med dig"))
 jokes.addJoke(req.body.joke)
 //jokes.addJoke("Jeg er mega sjov");
 res.json("Joke added");
})
//http://localhost:3000/api/uJoke/1
router.put('/uJoke/:index',function(req,res){
  const {index} = req.params
  jokes.setJoke(index,req.body.joke)
  //jokes.setJoke(0,"ændret joke bro")
  res.json("Joke is updated")
})
router.delete('/delete/:index',function(req,res){
  const {index} = req.params
  jokes.deleteJoke(index)
  res.json("Joke is deleted")
})




module.exports = router;
