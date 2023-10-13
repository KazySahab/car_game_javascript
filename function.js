
function draw_car_images()
{
    ctx.drawImage(my_car_img, my_car.position.x-15, my_car.position.y-10, 100, 170);
    ctx.drawImage(opponent_car_img, opponent_car.position.x - 15, opponent_car.position.y-15, 100, 170);
}

function bring_opponent_car() {

    if (opponent_car.position.y > height) {
        let random = Math.floor(Math.random() * (4 - 1) + 1);
        console.log(random);
        if (random == 1) opponent_car.position.x = (width / 2) - 170;
        if (random == 2) opponent_car.position.x = (width / 2) - 30;
        if (random == 3) opponent_car.position.x = (width / 2) + 105;

        opponent_car.position.y = -200;
    }
}


function collide_cars() {
    if (opponent_car.position.y + 150 >= my_car.position.y
        && opponent_car.position.y < my_car.position.y + 150
        && opponent_car.position.x <= my_car.position.x + 70
        && opponent_car.position.x + 70 >= my_car.position.x) {
        check_collide_car = "true";
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.fillText("Game Over ! ", (width / 2) - 120, 350);
        ctx.font = "30px Comic Sans MS";
        ctx.fillText(" Press Space/Enter to restart  ", (width / 2) - 180, 450);
        exitAnimationFrame();

    }
}

