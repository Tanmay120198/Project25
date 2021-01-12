class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restiution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.image=loadImage("paper.png");
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      imageMode(CENTER);
      translate(pos.x,pos.y)
      rotate(this.body.angle);
      fill(210,105,30);
      image(this.image,0,0, this.radius+50, this.radius+50);
      pop();
    }
  };