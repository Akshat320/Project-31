class Plinko{

    constructor(x, y, radius, angle)
    {
        var options = {

            isStatic: true
        }

    this.radius = radius;
    
    this.body = Bodies.circle(x, y, radius, options);
    this.body.radius = radius;
    this.x = x;
    this.y = y;
    this.plinkos = [];

    World.add(world, this.body);
    }

    display()
    {

     push();
     translate(this.body.position.x, this.body.position.y);
     var j = 40;
     for (var j ; j<=400 ; j = j+50)
     {

        this.plinkos.push(new Plinko(j, 75, 5));  
     }


     
     fill("while")
     ellipse(0, 0, this.radius);
     pop();
    }
}