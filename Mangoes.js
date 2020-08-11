class mangoes{
constructor(x,y,radius){
var options = {
    isStatic : true,
    restitution : 0,
    friction : 1
}
 this.body = Bodies.circle(x, y ,radius,options);
 this.radius = 2;
 this.image = loadImage('Plucking+mangoes/Plucking mangoes/mango.png');
 World.add(world,this.body);
}
display(){
   
    imageMode(RADIUS);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
   
}
}

























































