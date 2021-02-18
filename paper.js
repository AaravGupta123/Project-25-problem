class paper
{
constructor(x,y,radius)
{
var options={
      isStatic:false,
      friction:0.5,
      restitution:0.3,
      density:1.2
}

this.body=Bodies.circle(x,y,radius,options);
this.image = loadImage('paper.png')
World.add(world,this.body);
}
display(){
    fill("red");
    var pos = this.body.position;
    push();
    circle(pos.x,pos.y,this.radius);
    imageMode(CENTER);
    this.image(this.image, 0, 0, this.radius, this.radius);
    pop();


}
}