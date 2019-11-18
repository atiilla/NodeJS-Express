const csvFilePath='./joke.csv'
const csv=require('csvtojson')
const express = require('express')
const app = express()



app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.get('/api', (req, res, next) => {

  csv().fromFile(csvFilePath)
.then((jsonObj)=>{
  console.log(jsonObj)
  res.json([jsonObj]);
  /*jsonObj.map((n,i)=>{
    console.log(`Joke_id: ${i}\nJoke: ${n.joke1}`)
  })*/
})
  
 });


app.listen(3005, () => {
  console.log("Server running on port 3000");
 });