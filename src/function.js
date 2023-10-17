
function game_over() {
    if (check_collide_car==true)
    {
        bg_sound.pause();
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.fillText("Game Over ! ", (width / 2) - 120, 350);
        ctx.font = "30px Comic Sans MS";
        ctx.fillText(" Press Space/Enter to restart  ", (width / 2) - 180, 450);
       pauseAnimationFrame();
    }
}

