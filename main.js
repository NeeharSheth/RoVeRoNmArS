canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var img_mars=["mars0.jpeg","mars1.jpeg","mars2.jpeg","mars3.jpeg","mars4.jpeg","mars5.jpeg","mars6.jpeg","mars7.jpeg","mars8.jpeg","mars9.jpeg","mars.jpg"];
var img_num=Math.floor(Math.random()*10);

rover_width= 50;
rover_height= 40;

rover_x= 10;
rover_y= 10;

background_image= img_mars[img_num];
rover_image= "rover.png";

function add(){
    background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

rover_imgTag= new Image();
rover_imgTag.onload= uploadRover;
rover_imgTag.src= rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x,rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keyDown);

function  my_keyDown(e){
    keyPressed= e.keyCode;
console.log(keyPressed);

if(keyPressed == "37"){
    left();
    console.log("left");
}

if(keyPressed == "38"){
    up();
    console.log("up");
}

if(keyPressed == "39"){
    right();
    console.log("right");
}

if(keyPressed == "40"){
    down();
    console.log("down");
}
}

function up(){
    if(rover_y>0){
        rover_y-=10;
        console.log("x="+rover_x+" y="+rover_y);
        
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y<110){
        rover_y+=10;
        console.log("x="+rover_x+" y="+rover_y);
        
    
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>0){
        rover_x-=10;
        console.log("x="+rover_x+" y="+rover_y);
        
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<250){
        rover_x+=10;
        console.log("x="+rover_x+" y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}