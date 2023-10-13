const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let stripe_y = height, stripe_speed = 10;
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


// const sound = new Audio();
// sound.src = "./resources/sound.wav";

let stripes_left = [];
let stripes_right = [];

for (let j = 0; j < 9; j++) {

    let stripe = new Stripe((width / 2) - 66, stripe_y, j);
    stripes_left.push(stripe);
}
for (let j = 0; j < 9; j++) {
    let stripe = new Stripe((width / 2) + 66, stripe_y, j);
    stripes_right.push(stripe);
}


//Text functions
// function text() {
//     ctx.font = "30px Comic Sans MS";
//     ctx.fillStyle = "black";
//     ctx.fillText("Press", (width / 2) - 400, 200);
//     ctx.fillText("W - Front", (width / 2) - 430, 240);
//     ctx.fillText("S - Back", (width / 2) - 430, 280);
//     ctx.fillText("D - Right", (width / 2) - 430, 320);
//     ctx.fillText("A - Left", (width / 2) - 430, 360);
//     ctx.fillText("Press", (width / 2) + 300, 200);
//     ctx.fillText("⬆️ - Boost ", (width / 2) + 250, 240);
//     ctx.fillText("⬇️ - Slow ", (width / 2) + 250, 280);
// }


// //collide function

// function play() {
//     sound.play();
//     sound.volume = 0.1;
// }



function animate() {
    console.log(height);
    ctx.clearRect(0, 0, width, height);
    road.draw("gray");
    left_border_lane.draw("yellow");
    right_border_lane.draw("yellow");
    for (let i = 0; i < 9; i++) {
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
animate();


