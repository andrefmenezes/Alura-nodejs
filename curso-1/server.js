const app = require('./src/config/custom-express');


app.listen(3000,function(){
    console.log('servidor ok na porta 3000')
});






// const http =require('http');

// const servidor =  http.createServer(function(req,res){
//  var html =''
//     if(req.url == '/'){
//     html ='ola'
//   }else if(req.url =='/livros'){
// html = 'livros'
//   }
//   res.end(html)
  
// });

// servidor.listen(3000);

