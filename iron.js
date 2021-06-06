class iron{
	constructor(x,y,r){
     var options = {
		'density':0.8,
		'friction':3,
		'restitution':30,
	  };
      this.body = Bodies.rectangle(x, y, 80,80, options);
      this.width = 200;
      this.height = 50;
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
        fill("yellow")
       rect(0, 0, this.width, this.height);
        pop();
      };
    };
    