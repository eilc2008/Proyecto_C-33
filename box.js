class Box {
    constructor(x,y,width,height){
        var options = {
            restitution: 0.01,
            friction: 1,
            density: 2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width
        this.height = height;

        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        if(this.body.position.y < 800){
            var angle = this.body.angle;

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(3);
            stroke("black");
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            
            score = score +100;

            Matter.Body.setPosition(this.body,{x:-200,y:700});

            tint(0);
        }

        if (this.body.position.x < 1600){
            var angle = this.body.angle;

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(3);
            stroke("black");
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            
            score = score +100;

            Matter.Body.setPosition(this.body,{x:-200,y:700});

            tint(0);
        }
    }
}