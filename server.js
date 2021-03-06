console.log("Moikka moi!")

const express = require('express')
const app = express()
app.listen(3000, () => console.log("kuuntelen"));
app.use(express.static("public"));

app.use(express.json({limit: '1mb'}));

 const pankkikorttitiedot = [
   {
       "nimi": "Suvi Syrjäläinen",
       "pin": "1234"
   },
   {
     "nimi": "Alex Epic",
     "pin": "9812"
   }
 ]

 app.get('/salaisetpankkitiedot', function (req, res) {
  res.send(pankkikorttitiedot)
})

app.post('/pankkitietojentalletus', function (req, res) {
  console.log(req.body);
  pankkikorttitiedot.push(req.body);
  console.log(pankkikorttitiedot);
  res.sendStatus(200);
})
