const ejs= require ('ejs');
const mongoose = require('mongoose');
const express= require ('express');
const fs=require('fs');
const app= express();
mongoose.connect('mongodb://localhost:27017/web', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.urlencoded());
const Info = mongoose.model('Info', {
    pName: {
        type:String ,
        min:1,
        max:30
    },
    email:{ type:String ,
        require:true
    },
    password:{
       type:String,
       min:5,
       max:19
    }
});
app.set('view engine','ejs')

app.get('/',function(req,res){
  res.render('mainpage');
})

app.get('/signUp',function(req,res){
    res.render('homepage');
  })
  app.get('/logIn',function(req,res){
    res.render('loginpage');
  })


app.post('/',function(req,res){


    const fullInfo = new Info({ pName:req.body.name ,email:req.body.email,password:req.body.password });
    Info.find(function (err ,data) {
      console.log(data);
    })
   fullInfo.save().then((data) => console.log(data));

  // var i=0;
  // for(i=0;i<data.length;i++)
  // {
  //   if(req.body.email==data[i].email)
  //
  // }
    res.render('mainpage');

  })

app.listen(4000);
