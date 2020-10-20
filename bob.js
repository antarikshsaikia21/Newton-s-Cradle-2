class Bob {
  constructor(x,y,r){

      var options = {
      restitution:1,
      frictionAir:1,
      slop: 1,
      inertia: Infinity
      }
      this.body = Bodies.circle(x,y,r,options)
      this.x = x;
      this.y = y;
      this.r = r;
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      fill("red");
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0,0,this.r,this.r);
      pop();
  }
}