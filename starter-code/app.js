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

app.listen(3000)
