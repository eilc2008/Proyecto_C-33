class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        strokeWeight(3);
        stroke("black");
        rectMode(CENTER);
        fill("darkblue");
        rect(pos.x,pos.y,this.width,this.height);
    }
}