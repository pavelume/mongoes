const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/task', {useNewUrlParser: true, useUnifiedTopology: true});

const day1 = mongoose.model('task', {

   h2:String,
   p: String,
   link: String,
   img: String,
   a:String





 });

const Uni_talks = new day1({
   h2: 'Mahmudul',
   p: 'Hello guys we are here to introduce new website which name is uni code ',
   link:'https://lh3.googleusercontent.com/proxy/bI6JCy76FwWc_cID6USslJJxpINP6DvMRGVnU00fx7Rj7waQar9J_nZpNxoPSysoiLrrGS9idGXab-t1yQLzcZYTejLgqRs'


 });
Uni_talks.save().then(() => console.log('yes its work'));
day1.find({h2: 'Mahmudul'}).then((data)=>console.log(data));
