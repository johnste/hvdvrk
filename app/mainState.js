import reload from "live-reload";
import paper from "paper/dist/paper-core.js";

let path;
let text;

const state = {
  init() {
    // Create a Paper.js Path to draw a line into it:
    path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = "black";
    var start = new paper.Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);

    path.lineTo(start.add([200, -50]));
    path.lineTo(start.add([10, -10]));
    // Draw the view now:

    text = new paper.PointText(new paper.Point(200, 50));
    text.justification = "center";
    text.fillColor = "black";
    text.content = "The contents of the point text" + path.id;

    paper.view.draw();
  },

  update(time: number) {
    // path.translate(new paper.Point(0, 0.1));
    text.translate(new paper.Point(-0.3, 0));
    //console.log(text.position.x);
  },

  destroy() {
    path = null;
  }
};

export default state;
