class World {

    // Variablen definiert man in classes ohne let, const oder var
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish()
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        // Die letzten zwei Argumente geben die Größe des Bilds an
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    }
}