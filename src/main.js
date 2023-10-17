const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let stripe_speed = 1;
let check_collide_car;
let point_x = 0

const my_car = new My_car();
const road = new Road((width / 2) - 200, 400);
const left_border_lane = new Road((width / 2) - 200, 3);
const right_border_lane = new Road((width / 2) + 200, 3);

const bg_sound = new Audio();
bg_sound.src = "./resources/bg.ogg"
bg_sound.volume = 0.05;

const bg_img = new Image();
bg_img.src = "./resources/bg.avif";

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
const opponent_car = [];

setInterval(() => {
    let random = Math.floor(Math.random() * (4 - 1) + 1);
    if (random == 1) point_x = (width / 2) - 170;
    if (random == 2) point_x = (width / 2) - 30;
    if (random == 3) point_x = (width / 2) + 105;
    opponent_car.push(new Opponent_car(point_x));
}, 1000);

function start() {

    requestAnimationFrame(animate);
}

function animate(timestamp) {
    deltaTime = (timestamp - lastTimestamp);
    lastTimestamp = timestamp;

    ctx.clearRect(0, 0, width, height);

    bg_sound.play();
    ctx.drawImage(bg_img, 0, 0, width, height);

    road.draw("gray");
    left_border_lane.draw("yellow");
    right_border_lane.draw("yellow");

    for (let i = 0; i < 7; i++) {
        stripes_left[i].update();
        stripes_right[i].update();
    }
    my_car.update();
    for (i = 0; i < opponent_car.length; i++) {
        opponent_car[i].update();
        opponent_car[i].collide_cars(my_car);
    }

    game_over();
    requestAnimationFrame(animate);

}

start();