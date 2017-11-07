var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
 

// var html = fs.readFileSync('index.html', 'utf8');
// var css = fs.readFileSync('assets/css/index.css', 'utf8');
// var js = fs.readFileSync('assets/js/index.js', 'utf8');
// // fs.readFile('index.html', 'utf8', function(err, contents) {
// // 	let pattern = '<style>';
// //      console.dir(contents.replace(pattern));
// // });
// // console.log(contents);
// html.replace('mycss', css);
// html.replace('myjs', js);
// ;
// app.get('/', function(req, res){
//   	res.sendFile(__dirname + '/index.html')
//   	res.sendFile(__dirname + '/assets/js/index.js');
// 	res.sendFile(__dirname + '/assets/css/index.css');
// });

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('noteChange', function(msg){
    io.emit('noteChange', msg);
  });
  console.log('changed');
});

http.listen(3001, function(){
  console.log('listening on *:3000');
});
// var fs = require('fs');

// // Change the content of the file as you want
// // or either set fileContent to null to create an empty file
// var fileContent = "Hello World!";

// // The absolute path of the new file with its name
// var filepath = "mynewfile.txt";

// fs.writeFile(filepath, fileContent, (err) => {
//     if (err) throw err;

//     console.log("The file was succesfully saved!");
// }); 