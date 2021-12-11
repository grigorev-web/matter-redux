import { viewport, renderOptions } from "./config";
import { init } from "./init";
import { destroy } from "./destroy";
import { toggleDebug } from "./toggleDebug";
import { restart } from "./restart";

const Game = {
  // Properties
  gameObjects: [],
  scene: {},
  viewport,
  renderOptions,
  // Methods
  init,
  destroy,
  restart,
  stop: function(){this.runner.enabled = false},
  start: function(){this.runner.enabled = true},
  toggleDebug,
};

export default Game;
