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
        this.image=new Image();
        this.image.src="./resources/my_car.png"

    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(my_car_img, my_car.position.x-15, my_car.position.y-10, 100, 170);
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
