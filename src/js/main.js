import { drawTarget } from "./shapes.js";

draw();

function draw() {
  var context = document.getElementById("canvas").getContext("2d");

  drawTarget(context, 32, 32, 25, 'red');
  drawTarget(context, 150, 150, 44, 'blue');
}
