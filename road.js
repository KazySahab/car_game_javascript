class Road {
    constructor(point_x, size_width) {
        this.position = {
            x: point_x,
            y: 0,
        };
        this.size = {
            width: size_width,
            height: height

        };
    }
    draw(color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        ctx.closePath();
    }
};

class Stripe {
    constructor(strip_x, stripe_y, i) {
        this.position = {
            x: strip_x,
            y: stripe_y - (i * 160)
        };
        this.size = {
            width: 8,
            height: 50
        };
    }
    draw_strip() {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    move_stripe() {
        this.position.y += stripe_speed*deltaTime;
        if (this.position.y > height) {
            this.position.y = -120;
        }
    }

    update() {
        this.draw_strip();
        this.move_stripe();
    }
};

