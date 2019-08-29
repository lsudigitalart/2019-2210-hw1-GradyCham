
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
	//head
	fill(0);
	noStroke();
	ellipse(400,400, 600, 600);
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
	
}