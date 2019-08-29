
function setup(){
	createCanvas(800, 800);
	background(255, 0,0);
	//fill (0);
	//stroke (255)
	//strokeWeight(100);
	//ellipse(100, 300, 50,50);
}

function draw (){
	//Ears
	fill(0);
	noStroke();
	ellipse(100,400, 150, 250);
	fill(0);
	noStroke();
	ellipse(700,400, 150, 250);
	//Earring
	fill(255);
	stroke(0);
	strokeWeight(3);
	ellipse(80,520, 25, 75);
	fill(255);
	stroke(0);
	strokeWeight(3);
	ellipse(720,520, 25, 75);
	//head
	fill(0);
	noStroke();
	ellipse(400,400, 600, 600);
	//Mouth
	fill(255);
	noStroke();
	ellipse(400, 450, 500, 400);
	fill(0);
	noStroke();
	ellipse(400,400, 500, 350);
	//hair top
	fill(255);
	noStroke();
	ellipse(275,200, 100, 100);
	//eyes
	fill(255);
	noStroke();
	ellipse(275,350, 150, 150);
	fill(0);
	noStroke();
	ellipse(275, 375, 150, 150);
	fill(255);
	noStroke();
	ellipse(525,350, 150, 150);
	fill(0);
	noStroke();
	ellipse(525,375, 150, 150);
	//nose
	fill(255);
	noStroke();
	ellipse(400,425, 150, 150);
	fill(0);
	noStroke();
	ellipse(400,415, 150, 150);
	
}