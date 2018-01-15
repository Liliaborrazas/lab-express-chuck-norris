const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/random',(req,res) =>{
  client.getRandomJoke()
  .then (( response ) => {
     console.log(response)
   res.render('random',{
     newJoke: response.value
   })
  }).catch (( err ) => {
      console.log(error)
  });
})


app.get('/categories',(req,res,next) =>{
  client.getJokeCategories()
  .then((response)=> {
   res.render('categories',{
      jokeCategories: response
    })
    //  console.log(response)
  })
  .catch((err)=> {
     console.log(error)
  });
})
app.get('/joke-by-category/:cat',(req, res) =>{
  let category = req.query.cat
client.getRandomJoke(category)
  .then((response) => {
    res.render('joke-by-category/:category',{
      response: response
    })
    console.log(response)
  }).catch((err) => {
      console.log(error)
  });
})


// Cristina//

/*
 app.get('/categories', (req,res, next) => {
 let category = req.query.cat;

 if (category) {
   client.getRandomJoke(category).then(function (joke) {
     res.render('joke-by-category', {
       joke: joke.value,
       category
     });
   });
 } else {
  client.getJokeCategories()
    .then((response) => {
      res.render('categories', {
       response
     })
   })
   .catch((err) => {
    console.log("There is an error with the category")
  }));

 app.get('/joke-by-category', (req,res, next) =>
   client.getRandomJoke(param)
     .then((response) => {
       // use the response here
     }).catch((err) => {
       // handle error
     }));
       response });
     });
   }
 });

*/




app.listen(3000)
