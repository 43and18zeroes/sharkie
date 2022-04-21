class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 100;
    width = 150;

    loadImage(path) {
        // Image() muss nicht definiert werden, da es von JS von
        // Haus aus zur Verfügung gestellt wird.
        this.img = new Image();
        this.img.src = path;
    }

    // Hier wird auf "function" vor "moveUp()" bewusst verzichtet,
    // da es sich bei einer class um etwas relativ modernes handelt.
    // In moderneren Elementen kann darauf verzichtet werden. 
    moveUp() {
        console.log('Moving up');
    }

    moveDown() {

    }
}