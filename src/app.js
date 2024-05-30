const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Write POST endpoint to get the sum of two number

app.post("/add", (req, res)=>{
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  const result = num1 + num2;
  res.send({result: result});
});

//Write POST endpoint to get the differance of two number
app.post("/subtract", (req, res)=>{
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  const result = num1 - num2;
  res.send({result: result});
});

//Write POST endpoint to get the multiplication of two number
app.post("/multiply", (req, res)=>{
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  const result = num1 * num2;
  res.send({result: result});
});

//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post("/divide", (req, res)=>{
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  if(num2 === 0){
    res.status(400).send({error : "Cannot divide by zero"});
  }
  const result = num1 / num2;
  res.send({result: result});
});
      

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
    
module.exports = app;
