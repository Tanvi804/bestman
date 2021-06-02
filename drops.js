class RainDrop{
	constructor(x,y,r)
	{
		var options={
			//isStatic:false,
            density:0.5,
			frictionAir:0.01
			}
		this.x=x;
		this.y=y;
		//this.r=10;
		this.body=Bodies.circle(this.x, this.y, 10, options)
		World.add(world, this.body);
	}

	display()
	{
		var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("lightBlue")
        ellipse( 0, 0, 5,10);
        pop();
 }
}