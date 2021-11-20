var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
img_width = 100;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add(){
	img_imgTag = new Image();
	img_imgTag.onload = uploading();
	img_imgTag.src = img_image;
}

function uploading(){
	ctx.drawImage(img_imgTag, img_x, img_y, img_width , img_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);

    if((keyPressed >= 97 && keyPressed<= 122) || (keyPressed >=65 && keyPressed<=90)){
		alphabetkey();
		document.getElementById("d1").innerHTML = "Your pressed Alphabet key";
	} 
	else{
		otherkey();
		document.getElementById("d1"). innerHTML = "You pressed symbol key";
		console.log("other key");
	}
	if (keyPressed>=48 && keyPressed<=57){
		numberkey();
		document.getElementById("d1").innerHTML = "You pressed Number key";
	}
	if (keyPressed>=37 && keyPressed<=40){
		arrowkey();
		document.getElementById("d1").innerHTML = "You pressed Arrow key";
	}
    if (keyPressed == 17){
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed Special key";
	}
	if (keyPressed == 18){
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed Special key";
	}
}

function alphabetkey(){
	img_image = "Alpkey.png";
	add();
}
function numberkey(){
	img_image="numkey.png";
	add();
}
function arrowkey(){
	add();
}
function specialkey(){
	img_image="spkey.png";
	add();
}
function otherkey(){
	img_image="otherkey.png";
	add();
}