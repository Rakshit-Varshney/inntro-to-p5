function setup(){
    canvas=createCanvas(600,500);
    canvas.position(110,250);
}
function draw(){
    image(img,200,200,200,200);
    fill("green");
    stroke("red");
    circle(180,180,30);
    circle(180,420,30);
    circle(420,180,30);
    circle(420,420,30);
}
function take_snapshot(){
    save('student_name.png');
}
function preload(){
    img=loadImage("https://cdn.vox-cdn.com/thumbor/zTBzOjycX07hspHfHerM385iAag=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69773669/acastro_210104_1777_google_0001.0.jpg");
}