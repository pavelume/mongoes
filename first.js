const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Uni_talks', {useNewUrlParser: true, useUnifiedTopology: true});

const gost = mongoose.model('gost', {

  pName:String,
  pPic:String,
  caption: String,
  link: String,
  comment: Object,
  share:Number,
  Like:Number


 });

const asif = new gost({
   pName: 'Salman Asif',
   pPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDgTNKTeE985pM29w_MVlLv6Q6zXuK8qHKq4O0pcB_aWH4JbQV',

   caption: 'Hello guys we are here to introduce new website which name is uni code ',

   link:'https://image.winudf.com/v2/image/Y29tLnJvbWVudGljbG92ZXBpY3R1cmVzLnJvbWVudGljbG92ZXBpY3R1cmVzaW1hZ2VzX3NjcmVlbl8xXzE1MDg2NTk2NzhfMDE3/screen-1.jpg?fakeurl=1&type=.jpg',
   comment:{s1:'ami o khabo ektu'},
   share:10,
   like:13




 });
 const anik = new gost({
    pName: 'Anik Mostofa',
    pPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDgTNKTeE985pM29w_MVlLv6Q6zXuK8qHKq4O0pcB_aWH4JbQV',

    caption: 'Hello guys we are here to introduce new website which name is uni code ',

    link:'https://lh3.googleusercontent.com/proxy/bI6JCy76FwWc_cID6USslJJxpINP6DvMRGVnU00fx7Rj7waQar9J_nZpNxoPSysoiLrrGS9idGXab-t1yQLzcZYTejLgqRs',
    comment:{s1:'khawar sathe sathe kaj korbo'},
    share:13,
    like:35




  });
  const ovi = new gost({
     pName: 'Ishtique Ovi',
     pPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDgTNKTeE985pM29w_MVlLv6Q6zXuK8qHKq4O0pcB_aWH4JbQV',

     caption: 'Hello guys we are here to introduce new website which name is uni code ',

     link:'https://image.winudf.com/v2/image/Y29tLnJvbWVudGljbG92ZXBpY3R1cmVzLnJvbWVudGljbG92ZXBpY3R1cmVzaW1hZ2VzX3NjcmVlbl8yXzE1MDg2NTk2ODBfMDUw/screen-2.jpg?fakeurl=1&type=.jpg',
     comment:{s1:'khawa dawa chara jibon orthohin'},
     share:15,
     like:65




   });
   const shekha = new gost({
      pName: 'Shekha Maha Hamid Vai',
      pPic:'https://www.clipartkey.com/mpngs/m/266-2665108_female-profile-users-png-icon-free-download-woman.png',

      caption: 'Hello guys we are here to introduce new website which name is uni code ',

      link:'https://image.shutterstock.com/image-photo/view-famous-pic-du-midi-260nw-1390800023.jpg',
      comment:{s1:'amar khudha lagche'},
      share:189999,
      like:777




    });
    const pavel = new gost({
       pName: 'Mahmudul islam',
       pPic:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDgTNKTeE985pM29w_MVlLv6Q6zXuK8qHKq4O0pcB_aWH4JbQV',

       caption: 'Hello guys we are here to introduce new website which name is uni code ',

       link:'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
       comment:{s1:'ami o khabo'},
       share:19,
       like:19


     });
//
// asif.save().then(() => console.log('yes its work'));
// anik.save().then(() => console.log('yes its work'));
// ovi.save().then(() => console.log('yes its work'));
// shekha.save().then(() => console.log('yes its work'));
// pavel.save().then(() => console.log('yes its work'));
// //



 var rawDocuments = [asif, anik,ovi,shekha,pavel];



// // console.log(rawDocuments);
//
// gost.insertMany(rawDocuments).then(function(mongoosDocuments) {
//
//     })
//     .catch(function(err) {
//
//     });




// function bongobdRead(){
//   gost.find(function(err, data){
//     if(err){
//     console.log("Its Error");
//     }
//     return data;
//   })
//
// }
// console.log(rawDocuments);
// rawDocuments[4].updateOne({_id :("5e5785239d72c429470a347b")},{pName:"M. Islam"},function(err,log){
// console.log("Number of Records Effected"+log);
// });




// rawDocuments[0].updateOne({pName:"Salman"},function(err,log){
//   // rawDocuments.save().then(() => console.log('yes its work'));
// console.log(rawDocuments[0]);
// console.log("Number of Records Effected"+log);
// });
//shekha.save();
// rawDocuments.findByIdAndUpdate("5e579e7bd231a529cb74b652",
//
// {pName:"Akib"},function(err,data){if(!err) console.log(data);
// }});


function bongobdRead(asif){
  gost.find(function(err, data){
    if(err){
    console.log("Its Error");
    }
    return asif;
  })

}
console.log(asif,anik,ovi,shekha,pavel,);
