const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

//My car variables
let car_x = 0, car_y = 0, stripe_y = height - 50, stripe_speed = 10;
let move_car_x = (width / 2) - 160, move_car_y = (height - 200); 

//Opponent car variables
let opponent_car_x=0,opponent_car_y=0;
let move_opponent_car_x=(width / 2) - 160, move_opponent_car_y=-200;
let opponent_car_color="yellow";


//Middle-road stripe class
class Stripe {
    constructor(strip_x, stripe_y, i) {
        this.height = 50;
        this.width = 8;
        this.x = strip_x;
        this.y = stripe_y - (i * 120);
    }
    draw_strip() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    move_stripe() {
        if (stripe_speed <= 15 && stripe_speed >= 0) {
            this.y += stripe_speed;
        }

    }

    update_y() {
        if (this.y > height + 40) {
            this.y = height - 1040;
        }
    }
};

//Middle-rpad stripes objects
let stripes_left = [];
let stripes_right = [];

for (let j = 0; j < 9; j++) {

    let stripe = new Stripe((width / 2) - 66, stripe_y, j);
    stripes_left.push(stripe);
    console.log("arrray made");
}
for (let j = 0; j < 9; j++) {
    let stripe = new Stripe((width / 2) + 66, stripe_y, j);
    stripes_right.push(stripe);
}
//Text functions
function text()
{
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "black";
ctx.fillText("Press", (width / 2)-400, 200);
ctx.fillText("W - Front", (width / 2)-430, 240);
ctx.fillText("S - Back", (width / 2)-430, 280);
ctx.fillText("D - Right", (width / 2)-430, 320);
ctx.fillText("A - Left", (width / 2)-430, 360);
ctx.fillText("Press", (width / 2)+300, 200);
ctx.fillText("⬆️ - Boost", (width / 2)+250, 240);
ctx.fillText("⬇️ - Back", (width / 2)+250, 280);
}

//Opponent car functions
function opponent_car()
{
    move_opponent_car_y+=3;
    opponent_car_x=move_opponent_car_x;
    opponent_car_y=move_opponent_car_y;
    ctx.beginPath();
    ctx.fillStyle = opponent_car_color;
    ctx.fillRect(opponent_car_x, opponent_car_y, 50, 100);
    ctx.closePath();
}

function opponent_car_tyres(){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(opponent_car_x - 7, opponent_car_y + 10, 10, 20);
    ctx.fillRect(opponent_car_x - 7, opponent_car_y + 80, 10, 20);
    ctx.fillRect(opponent_car_x + 47, opponent_car_y + 10, 10, 20);
    ctx.fillRect(opponent_car_x + 47, opponent_car_y + 80, 10, 20);
    ctx.closePath();

}

function bring_opponent_car(){

    if (move_opponent_car_y > 1000) {
        let random = Math.floor(Math.random() * (4 - 1) + 1);
        console.log(random);
        if (random == 1) {
            move_opponent_car_x = (width / 2) - 160;
            opponent_car_color="green";
           
        }
        else if (random == 2) {
            move_opponent_car_x = (width / 2)-20;
            opponent_car_color="blue";
        }
        else if(random==3)
        {
            move_opponent_car_x = (width / 2) + 110; 
            opponent_car_color="purple";
        }
        move_opponent_car_y=-200;
    }
}

//My car Functions
function tyres() {
    car_x = move_car_x;
    car_y = move_car_y;
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(car_x - 7, car_y + 6, 10, 20);
    ctx.fillRect(car_x - 7, car_y + 75, 10, 20);
    ctx.fillRect(car_x + 47, car_y + 6, 10, 20);
    ctx.fillRect(car_x + 47, car_y + 75, 10, 20);
    ctx.closePath();
}
function Car() {
    car_x = move_car_x;
    car_y = move_car_y;
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(car_x, car_y, 50, 100);
    ctx.closePath();
    


}
function Road() {
    ctx.beginPath();
    ctx.rect((width / 2) - 200, 0, 400, height);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.beginPath();
    ctx.rect((width / 2) - 200, 0, 3, height);
    ctx.rect((width / 2) + 200, 0, 3, height);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
function White_stripe() {

    for (let i = 0; i < 9; i++) {
        stripes_left[i].draw_strip();
        stripes_left[i].move_stripe();
        stripes_left[i].update_y();
        stripes_right[i].draw_strip();
       stripes_right[i].move_stripe();
        stripes_right[i].update_y();
    }

}




//Animate game in 60 FPS
function animate() {
    ctx.clearRect(0, 0, width, height);
    text();
    Road();
    White_stripe();
    tyres();
    Car();
    opponent_car_tyres();
    opponent_car();
    bring_opponent_car();
    requestAnimationFrame(animate);
}
animate();
