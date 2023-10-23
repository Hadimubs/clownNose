nosex=0;
nosey=0;
function preload(){
x=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
v=createCapture(VIDEO);
v.size(300,300);
v.hide();


y=ml5.poseNet(v,modelLoaded);
y.on('pose',gotposes);
}
function modelLoaded(){
console.log("loaded");
}
function draw(){
image(v,0,0,300,300);
image(x,nosex,nosey,30,30);
}
function gotposes(results){
if (results.length>0) {
  console.log(results); 
 nosex=results[0].pose.nose.x-15;
 nosey=results[0].pose.nose.y-15;
}
}
function s(){
save('clown.png');
}