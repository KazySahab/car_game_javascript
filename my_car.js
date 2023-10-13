class My_car {
    constructor() {

        this.position = {
            x: (width / 2)-30,
            y: (height - 200)

        };
        this.size = {
            width: 70,
            height: 150
        };
        this.velocity = {
            x: 0,
            y: 0
        };

    }
    draw() {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.closePath();
    }
    move() {
        this.position.x += this.velocity.x*deltaTime;
        this.position.y += this.velocity.y*deltaTime;
    }
    check() {
        if (this.position.y < 20) {
            this.velocity.y = 0;
            this.position.y = 20;
        }
        if (this.position.y > height - 170) {
            this.velocity.y = 0;
            this.position.y = height - 170;
        }
        if (this.position.x < (width / 2) - 180) {
            this.velocity.x = 0;
            this.position.x = (width / 2) - 180;
        }
        if (this.position.x > (width / 2) + 110) {
            this.velocity.x = 0;
            this.position.x = (width / 2) + 110;
        }
    }
    update() {
        this.check();
        this.draw();
        this.move();
    }
};
