require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DB_LINK, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
  if(!err) return console.log('Connected to Database');
  console.log(err)
})

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use('/auth', require('./Controller/Routes/auth'))
const PORT = process.env.PORT || 3500;
app.listen(PORT, ()=>{
  console.log('Listening on ' + PORT);
});