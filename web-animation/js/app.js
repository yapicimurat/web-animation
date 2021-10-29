let balls = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  for(let i = 1;i <= 75;i++)
  {
    balls.push({
      x: random(3,width - 3),
      y: random(3,height -3),
      r: 3,
      color: 'black',
      dx: cos(random(-180,180)),
      dy: sin(random(-180,180)),
      speed: 1
    });
  }
}

function draw() {
  background(220);
  drawBalls();
}

function drawBalls()
{ 
  for(let i in balls)
  {
      for(let x in balls)
      {
        if(i == x) continue;
        const _dist = dist(balls[i].x,balls[i].y,balls[x].x,balls[x].y);
        if(_dist <= 50)
        {
            push();
      
            stroke(175);
            line(balls[i].x,balls[i].y,balls[x].x,balls[x].y);

            pop();
        }
      }
      push();
      balls[i].x += balls[i].dx * balls[i].speed;
      balls[i].y += balls[i].dy * balls[i].speed;
      noStroke();
      fill(balls[i].color);
      circle(balls[i].x,balls[i].y,balls[i].r);
      
      if(balls[i].x <= balls[i].r || balls[i].x >= width - balls[i].r)
      {
          balls[i].dx *= -1;
      }
      if(balls[i].y <= balls[i].r || balls[i].y >= height - balls[i].r)
      {
          balls[i].dy *= -1;
      }
      pop();
       
  }
  
}