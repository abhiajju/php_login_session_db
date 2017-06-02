var app=require('express')();
var http= require('http').Server(app);
var io= require('socket.io')(http);

app.get('/',function(req,res){
	res.sendFile(__dirname + "/index.html");
	//res.send("hello");
});

io.on('connection',function(socket){

	socket.on('mess',function(data){
		console.log(data);
	});
	socket.on('chat message',function(msg){
		io.emit('chat message',socket.name +" :"+msg);
		console.log(socket.name+": "+msg);
	});
	
	socket.on('disconnect',function(){
		console.log(socket.name +"  disconnected");
	});
	socket.on('join', function(name){
		socket.name=name;
		console.log(socket.name+ 'joined the chat');
	});
});

http.listen(4000, function(){
	console.log("listening to port 4000");
});