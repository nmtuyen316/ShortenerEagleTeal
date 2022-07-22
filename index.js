const express = require('express');
const Web = express();
const PORT = process.env.PORT;

Web.get('/',function(req,res){
  res.send('hello');
});

Web.listen(PORT, ()=>{
  console.log(`listen at https:/localhost:${PORT}`);
});