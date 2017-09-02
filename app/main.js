//import "paper/dist/paper-core.js";
import _ from "lodash";
import mainState from "./mainState";
import reload from "live-reload";
import paper from "paper/dist/paper-core.js";

const fps = 60;
const freq = 1000 / fps;
let lastInterval = performance.now();
let accumulator = 0;
let frames = 0;
let myReq;
let activeState;
const random = Math.round(Math.random() * 1000);

reload.dispose(function() {
  cancelAnimationFrame();
  setState(null);
});

// Create an empty project and a view for the canvas:
var canvas = document.getElementById("myCanvas");
paper.setup(canvas);

// @flow
function loop(interval: number = 0): void {
  const delta = interval - lastInterval;
  accumulator += delta;

  //debugger;

  while (accumulator > freq) {
    accumulator -= freq;
    activeState.update(freq);
  }

  myReq = window.requestAnimationFrame(loop);
  lastInterval = interval;
}

function cancelAnimationFrame() {
  if (myReq) {
    myReq = window.cancelAnimationFrame(myReq);
  }
}

function setState(state: object) {
  paper.project.clear();
  if (activeState) {
    activeState.destroy && activeState.destroy();
  }

  activeState = state;
  if (activeState) {
    activeState.init && activeState.init();
  }
}

(function start() {
  cancelAnimationFrame();
  setState(mainState);
  loop();
})();
