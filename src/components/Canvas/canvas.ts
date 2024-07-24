//@ts-nocheck
interface color {
  r: number;
  g: number;
  b: number;
}

export class CanvasAnimator {
  ctx: CanvasRenderingContext2D;
  maxRadius: number;
  minRadius: number;
  screenWidth: number;
  screenHeight: number;

  rippleCircle;

  items: CanvasCircle[] = [];
  colors: color[] = [
    { r: 240, g: 107, b: 168 },
    { r: 250, g: 203, b: 14 },
    { r: 120, g: 186, b: 230 },
    { r: 250, g: 203, b: 14 },
    { r: 240, g: 107, b: 168 },
    { r: 120, g: 186, b: 230 },
  ];

  constructor(
    ctx: CanvasRenderingContext2D,
    screenWidth: number,
    screenHeight: number
  ) {
    this.ctx = ctx;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.maxRadius = 350;
    this.minRadius = 250;
    this.createCicrles();
    window.requestAnimationFrame(this.animate.bind(this));
   
  }

  draw() {
    this.rippleCircle.animate();
  }

  createCicrles() {
    this.items.splice(0, this.items.length);
    for (let i = 0; i < 6; i++) {
      const item = new CanvasCircle({
        color: this.colors[i],
        stageWidth: this.screenWidth,
        stateHeight: this.screenHeight,
        x: Math.random() * this.screenWidth,
        y: Math.random() * this.screenHeight,
      });
      // window.requestAnimationFrame(item.circleAnimate(this.ctx))
      this.items.push(item);
    }
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    this.items.forEach((elm) => {
      elm.circleAnimate(this.ctx);
    });
    // this.draw();
  }

  resize({maxRadius,minRadius,screenHeight,screenWidth}:{
    maxRadius: number,
    minRadius: number,
    screenWidth: number,
    screenHeight: number,
  }) {
    this.maxRadius = this.maxRadius
    this.minRadius = this.minRadius
    this.screenHeight = this.screenHeight
    this.screenWidth = this.screenWidth
  }
}

class CanvasCircle {
  x: number;
  y: number;
  xMovement: number;
  yMovement: number;
  ctx: CanvasRenderingContext2D;
  color: color;
  stageWidth: number;
  stateHeight: number;

  constructor({
    color,
    ctx,
    stageWidth,
    stateHeight,
    x,
    y,
  }: {
    x: number;
    y: number;
    color: color;
    stageWidth: number;
    stateHeight: number;
  }) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.xMovement = Math.random() * 2;
    this.yMovement = Math.random() * 2;
    this.stageWidth = stageWidth;
    this.stateHeight = stateHeight;
  }

  circleAnimate(ctx: CanvasRenderingContext2D) {
    this.x += this.xMovement;
    this.y += this.yMovement;

    if (this.x > this.stageWidth) {
      this.xMovement *= -1;
      this.x -= 10;
    }
    if (this.x < 0) {
      this.xMovement *= -1;
      this.x += 10;
    }
    if (this.y > this.stateHeight) {
      this.yMovement *= -1;
      this.y -= 10;
    }
    if (this.y < 0) {
      this.yMovement *= -1;
      this.y += 10;
    }

    ctx.beginPath();
    // const g = ctx.createRadialGradient(
    //   this.x,
    //   this.y,
    //   500,
    //   this.x,
    //   this.y,
    //   400
    // );
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      500 * 0.01,
      this.x,
      this.y,
      500
    );
    g.addColorStop(
      0,
      `rgba(${this.color.r},${this.color.g},${this.color.b},1)`
    );
    g.addColorStop(
      1,
      `rgba(${this.color.r},${this.color.g},${this.color.b},0)`
    );
    ctx.fillStyle = g;
    // ctx.fillStyle = `rgb(${this.color.r},${this.color.g},${this.color.b})`;
    ctx.arc(this.x, this.y, 500, 0, Math.PI * 2, false);
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI,false);
    ctx.fill();
  }
}

class RippleEffect {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  radius: number;

  constructor(
    width: number,
    height: number,
    ctx: CanvasRenderingContext2D,
    radius: number
  ) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.radius = radius;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,255,255,0.05)";
    // this.ctx.fillStyle = "#ffffff";
    // this.ctx.fillStyle = "black";
    this.ctx.lineWidth = 5;
    this.ctx.shadowBlur = 250;
    // this.ctx.shadowColor = `rgba(0,0,0,0.5)`;
    this.ctx.shadowColor = `red`;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    // this.ctx.arc(this.width / 2, this.height / 2, this.r, 0, Math.PI * 2, false);
    this.ctx.arc(
      this.width / 2,
      this.height / 2,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    this.ctx.closePath();
    this.ctx.fill();
  }
  animate() {
    // window.requestAnimationFrame(this.animate.bind(this))
    if (this.radius == 300) this.radius = 0;
    else this.radius += 1;
    // this.ctx.clearRect(0, 0, this.width, this.height);
    this.draw();
    // console.log("animate")
  }
}
