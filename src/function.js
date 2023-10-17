
function game_over() {
    if (check_collide_car == true) {
        const collide_car = new Audio();
        collide_car.src = "./resources/collide.flac"
        collide_car.volume = 0.3;
        collide_car.play();

        bg_sound.pause();

        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.fillText("Game Over ! ", (width / 2) - 140, 350);
        ctx.font = "30px Comic Sans MS";
        ctx.fillText(" Press Space/Enter to restart  ", (width / 2) - 200, 450);
        pauseAnimationFrame();
    }
}


