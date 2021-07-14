var ball= {
    x: 200,
    y: 200,
    radius: 20,
    speed_x: 0,
    speed_y: 0,
    color: ["blue", "red", "orange", "yellow"],
};

function setup(){
    createCanvas(400,400)

}

function draw(){
    background("black")
    circle(ball.x, ball.y, ball.radius)
    fill(ball.color[2])
    ball.speed_x=5;
    ball.x = ball.x + ball.speed_x;
}