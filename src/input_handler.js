document.addEventListener("keydown", function (input) {

    if (input.code == "KeyW" && my_car.position.y > 20)
        my_car.velocity.y = -0.3;
    if (input.code == "KeyS" && my_car.position.y < height - 170)
        my_car.velocity.y = 0.3;
    if (input.code == "KeyD" && my_car.position.x < (width / 2) + 110)
        my_car.velocity.x = 0.3;
    if (input.code == "KeyA" && my_car.position.x > (width / 2) - 180)
        my_car.velocity.x = -0.3;
    if (input.code == "Enter" || input.code == "Space") {
        if (check_collide_car == true) {
            location.reload(animate);
        }
    }
});

document.addEventListener("keyup", function (input) {

    if (input.code == "KeyW" && my_car.position.y > 20)
        my_car.velocity.y = 0;
    if (input.code == "KeyS" && my_car.position.y < height - 170)
        my_car.velocity.y = 0;
    if (input.code == "KeyD" && my_car.position.x < (width / 2) + 110)    my_car.velocity.x = 0;
    if (input.code == "KeyA" && my_car.position.x > (width / 2) - 180) my_car.velocity.x = 0;
});