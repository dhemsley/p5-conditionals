var x = 0
var speed= 3;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(66, 2, 66);
    
    //I wrote this so background changes to pink when clicked 
    if(mouseIsPressed){
    background(226, 9, 27);
    }
    //makes outline white, 6px thick, no color inside shapes
    stroke(255);
    strokeWeight(6);
    noFill();
   
   
   if(mouseY<150){
     fill(0,255,0);
   }
   else{
       
       noFill();
   }
   
    //a circle
    ellipse(x,200,100,100)
    
    //this code is going to get the circle to move on his own
    if(x>width || x<0){
          console.log("CIRCLE IS OFF THE SCREEN!!!!")
      speed = speed * -1;    
     }
    x=x + speed;
  console.log(x);
}



