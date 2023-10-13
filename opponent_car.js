class Opponent_car {
    constructor(point_x) {

        this.position = {
            x: point_x,
            y: -200

        };
        this.size = {
            width: 70,
            height: 150
        };
        this.velocity = {
            x: 0,
            y: 4
        };

    }
    draw() {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.closePath();
    }
    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    update() {
        this.draw();
        this.move();
    }
};


