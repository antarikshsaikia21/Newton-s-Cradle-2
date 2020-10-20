class Roof {
 
constructor(x,y,width,height){
  
  this.body=Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  
  World.add(world,this.body);
  
}
  display(){
    
    fill("gray");   
    rectMode(CENTER);
    rect(200,10,1200,20);
     
  }
   
}