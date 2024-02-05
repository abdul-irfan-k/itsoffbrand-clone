const items: CanvasCircle[] = [];
let i = 0;

interface color {
  r: number;
  g: number;
  b: number;
}

// linear-gradient(
//   255deg,
//   #f06ba8,
//   #facb0e 30%,
//   #78bae6 65%,
//   #fff
// )

// linear-gradient( 255deg, #facb0e, #f06ba8 30%, #78bae6 65%, #fff )
const colors: color[] = [
  { r: 240, g: 107, b: 168 }, 
  { r: 250, g: 203, b: 14 }, 
  { r: 120, g: 186, b: 230 }, 
  { r: 240, g: 107, b: 168 }, 
  { r: 250, g: 203, b: 14 }, 
  { r: 120, g: 186, b: 230 }, 
];
// const colors: color[] = [
//   { r: 255, g: 0, b: 0 }, // Red
//   { r: 0, g: 255, b: 0 }, // Green
//   { r: 0, g: 0, b: 255 }, // Blue
//   { r: 255, g: 255, b: 0 }, // Yellow
//   { r: 255, g: 0, b: 255 }, // Magenta
//   { r: 0, g: 255, b: 255 }, // Cyan
//   { r: 128, g: 0, b: 128 }, // Purple
//   { r: 255, g: 165, b: 0 }, // Orange
//   { r: 0, g: 255, b: 0 }, // Green
//   { r: 0, g: 0, b: 255 }, // Blue
// ];

export class CanvasAnimator {
  ctx: CanvasRenderingContext2D;
  maxRadius: number;
  minRadius: number;
  screenWidth: number;
  screenHeight: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    screenWidth: number,
    screenHeight: number
  ) {
    this.ctx = ctx;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.maxRadius = 300;
    this.minRadius = 200;
    this.createCicrles();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  createCicrles() {
    items.splice(0, items.length);
    for (i = 0; i < 7; i++) {
      const item = new CanvasCircle({
        color: colors[i],
        stageWidth: this.screenWidth,
        stateHeight: this.screenHeight,
        x: Math.random() * this.screenWidth,
        y: Math.random() * this.screenHeight,
      });
      // window.requestAnimationFrame(item.circleAnimate(this.ctx))
      items.push(item);
    }
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    items.forEach((elm) => {
      elm.circleAnimate(this.ctx);
    });
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
    ctx.arc(this.x, this.y, 500, 0, Math.PI * 2, false);
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI,false);
    ctx.fill();
  }
}
