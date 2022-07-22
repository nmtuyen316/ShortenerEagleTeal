require('dotenv').config();
const express = require('express');
const Web = express();
const PORT = process.env.PORT;

Web.use("/public/css", express.static(`${__dirname}/public/css`));

Web.get('/',function(req,res){
  res.sendFile(`${__dirname}/src/views/index.html`);
});

Web.listen(PORT, ()=>{
  console.log(`listen at https://localhost:${PORT}`);
});