document.addEventListener("keydown", function (input) {

    if (input.code == "KeyW" && my_car.position.y > 20)
        my_car.velocity.y = -5;
    if (input.code == "KeyS" && my_car.position.y < height - 170)
        my_car.velocity.y = 5;
    if (input.code == "KeyD" && my_car.position.x < (width / 2) + 110)
        my_car.velocity.x = 5;
    if (input.code == "KeyA" && my_car.position.x > (width / 2) - 180)
        my_car.velocity.x = -5;


    if (input.code == "ArrowUp") {
        if (stripe_speed <= 10) {
            stripe_speed += 5;
            opponent_car.velocity.y = 6;
        }
    }
    if (input.code == "ArrowDown") {
        if (stripe_speed == 15) {
            stripe_speed -= 5;
            opponent_car.velocity.y = 4;
        }

    }
    if (input.code == "Enter" || input.code == "Space") {
        if (check_collide_car == "true") {
            location.reload(animate);
        }
    }

});

document.addEventListener("keyup", function (input) {

    if (input.code == "KeyW") my_car.velocity.y = 0;
    if (input.code == "KeyS") my_car.velocity.y = 0;
    if (input.code == "KeyD") my_car.velocity.x = 0;
    if (input.code == "KeyA") my_car.velocity.x = 0;
    if (input.code == "ArrowUp") {
        if (stripe_speed <= 10) {
            stripe_speed += 5;
            opponent_car.velocity.y = 5;
        }
    }
    if (input.code == "ArrowDown") {
        if (stripe_speed == 15) {
            stripe_speed -= 5;
            opponent_car.velocity.y = 3;
        }

    }
});