document.addEventListener("keydown", function (input) {

    if (input.code == "KeyW" && car_y > 20) {
        move_car_y -= 8;
    }
    else if (input.code == "KeyS" && car_y < height - 150) {

        move_car_y += 8;
    }
    else if (input.code == "KeyD" && car_x < (width / 2) + 127) {

        move_car_x += 8;
    }
    else if (input.code == "KeyA" && car_x > (width / 2) - 170) {

        move_car_x -= 8;
    }
    else if (input.code == "ArrowUp") {
        if (stripe_speed <= 10) {
            stripe_speed += 5;
        }

    }
    else if (input.code == "ArrowDown") {
        if (stripe_speed ==15) {
            stripe_speed -= 5;
            
        }

    }

});