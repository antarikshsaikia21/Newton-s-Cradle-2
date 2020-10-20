class String {
    constructor(bodyA,pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 5
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
    if(this.rope.bodyA){
        push();
        line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y);
        pop();
    }
    }

    attach(body){
     this.rope.bodyA = body;
    }

     fly(){
         this.rope.bodyA = null;
     }
    
     
}