const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let stripe_speed = 1;
let check_collide_car;

const opponent_car = new Opponent_car((width / 2) - 170);
const my_car = new My_car();
const road = new Road((width / 2) - 200, 400);
const left_border_lane = new Road((width / 2) - 200, 3);
const right_border_lane = new Road((width / 2) + 200, 3);

const my_car_img = new Image();
my_car_img.src = "./resources/my_car.png"
const opponent_car_img = new Image();
opponent_car_img.src = "./resources/opponent_car.png"

let stripes_left = [];
let stripes_right = [];
for (let j = 0; j < 7; j++) {

    let stripe = new Stripe((width / 2) - 66, j);
    stripes_left.push(stripe);
}
for (let j = 0; j < 7; j++) {
    let stripe = new Stripe((width / 2) + 66, j);
    stripes_right.push(stripe);
}

let deltaTime = 0;
let lastTimestamp = performance.now();

function start() {
    requestAnimationFrame(animate);
}

function animate(timestamp) {
    deltaTime = (timestamp - lastTimestamp);
    lastTimestamp = timestamp;
    console.log(deltaTime);
    ctx.clearRect(0, 0, width, height);
    road.draw("gray");
    left_border_lane.draw("yellow");
    right_border_lane.draw("yellow");
    for (let i = 0; i < 7; i++) {
        stripes_left[i].update();
        stripes_right[i].update();
    }
    opponent_car.update();
    my_car.update();
    bring_opponent_car();
    draw_car_images();
    collide_cars();
    requestAnimationFrame(animate);
   
}

start();


