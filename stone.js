class Stone{
    constructor(x,y,width,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);

        this.image=loadImage("stone.png");
    }

    display(){
        ellipseMode(CENTER);
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,50,50);
        
    }



        
    }
