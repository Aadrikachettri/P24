class stone{
	constructor(x,y,r){
     var options = {
		'density':0.8,
		'friction':0.9,
		'restitution':12,
	  };
      this.body = Bodies.rectangle(x, y, 20,20,);
      this.width = 15;
      this.height = 4;
      World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white')
        fill('green')
       rect(0, 0, this.width, this.height);
        pop();
      };
    };
    