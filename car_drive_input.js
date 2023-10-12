document.addEventListener("keydown", function (input) {

    if (input.code == "KeyW" && car_y > 20) {
        move_car_y -= 10;
    }
    else if (input.code == "KeyS" && car_y < height - 150) {

        move_car_y += 10;
    }
    else if (input.code == "KeyD" && car_x < (width / 2) + 127) {

        move_car_x += 12;
    }
    else if (input.code == "KeyA" && car_x > (width / 2) - 170) {

        move_car_x -= 12;
    }
    else if (input.code == "ArrowUp") {
        if (stripe_speed <= 10) {
            stripe_speed += 5;
            opponent_car_speed += 3;
        }

    }
    else if (input.code == "ArrowDown") {
        if (stripe_speed == 15) {
            stripe_speed -= 5;
            opponent_car_speed -= 3;
        }

    }
    // console.log(input.code);
    else if (input.code == "Enter" || input.code == "Space") {
        if (opponent_car_y + 120 >= car_y && opponent_car_y < car_y + 120 && opponent_car_x <= car_x + 60 && opponent_car_x + 60 >= car_x) {
            location.reload(animate);
        }
    }

});