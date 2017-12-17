function randomColor() {
	var letters='0123456789ABCDEF'.split('');
	var color='#';
	for(var i=0;i<6;i++) {
		color += letters[Math.floor(Math.random()* 16)];
	}
	return color;
}

var start;
function makeShapeAppear() {
	var r= 50 + Math.random() * 300 ;
	var s= 25 + Math.random() * 200 ;
	var t= 25 + Math.random() * 500 ;
	document.getElementById("shape").style.width=r+"px";
	document.getElementById("shape").style.height=r+"px";
	document.getElementById("shape").style.top=s+"px";
	document.getElementById("shape").style.left=t+"px";
	var color=randomColor();
	document.getElementById("shape").style.backgroundColor=color;
	document.getElementById("shape").style.display="block";

	start=new Date().getTime();
}

function toggling () {
	var r=Math.random() * 2000;
	setTimeout(makeShapeAppear,r);
}


document.getElementById("shape").onclick = function() {
	document.getElementById("shape").style.display = "none";
	var end=new Date().getTime();
	var time=(end-start)/1000;
	document.getElementById("time").innerHTML=time+"s";
	toggling();
}
toggling();


