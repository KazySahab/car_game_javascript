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
            y: 0.5
        };
        let image_selector = Math.floor(Math.random() * (3 - 1) + 1)
        if (image_selector == 1) {
            this.image = new Image();
            this.image.src = "./resources/opponent_car.png";
        }
        if (image_selector == 2) {
            this.image = new Image();
            this.image.src = "./resources/opponent_car1.png"
        }


    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(this.image, this.position.x - 15, this.position.y - 15, this.size.width + 30, this.size.height + 20);
        ctx.closePath();
    }
    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y * deltaTime;
    }
    collide_cars(my_car) {

        if (this.position.y + 150 >= my_car.position.y
            && this.position.y < my_car.position.y + 150
            && this.position.x <= my_car.position.x + 70
            && this.position.x + 70 >= my_car.position.x)

            check_collide_car = true;
    }
    update() {
        this.draw();
        this.move();
    }
};


