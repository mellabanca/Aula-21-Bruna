class Parede {
    constructor(posX, posY, lar, alt){
        var config = {
            isStatic: true
        }

        this.corpo = Bodies.rectangle(posX, posY, lar, alt, config);
        this.largura = lar;
        this.altura = alt;
        World.add(world,this.corpo);
    }

    show(){
        var pos = this.corpo.position;

        push();
        rectMode(CENTER);
        fill("blue");
        stroke("black");
        rect(pos.x,pos.y,this.largura, this.altura);
        pop();
    }
}