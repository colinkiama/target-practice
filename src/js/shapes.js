const INNER_CIRCLE_WIDTH_RATIO = 0.3;
const FULL_ROTATION_IN_RADIANS = 2 * Math.PI;

export function drawTarget(context, x, y, radius, colour) {
  let target = new Path2D();
  drawCirclePath(target, x, y, radius);
  
  let innerCircle = new Path2D();
  drawCirclePath(innerCircle, x, y, radius * 0.5);

  context.fillStyle = colour;
  context.fill(target);

  context.strokeStyle = "white";
  context.lineWidth = radius * INNER_CIRCLE_WIDTH_RATIO;
  context.stroke(innerCircle);
}

function drawCirclePath(target, x, y, radius) {
  target.arc(x, y, radius, 0, FULL_ROTATION_IN_RADIANS);
}

