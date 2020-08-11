class stone {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('Plucking+mangoes/Plucking mangoes/stone.png');
        World.add(world, this.body);
    }
    display(){
       
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}