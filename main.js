function setup(){
    canvas = createCanvas(500, 500)
    canvas.position(110, 300)
    video= createCapture(VIDEO)
    video.hide()
}

function draw(){
image(video, 0, 0, 500, 500)
rect(0, 0, 1000, 55);
rect(0, 450, 1000, 55);
rect(0, 0, 55, 1000);
rect(450, 0, 55, 1000);
circle(30, 30, 100);
circle(30, 470, 100);
circle(470, 30, 100);
circle(470, 470, 100);
}

function take_snapshot(){
    save('party.png') 
}

