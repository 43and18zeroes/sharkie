class Pufferfish extends MovableObject {

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

        this.x = 300 + Math.random() * 300; // Immer Zahl zwischen 300 und 600
    }


    moveLeft() {

    }
}