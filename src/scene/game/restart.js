
export function restart () {
    this.destroy();
    this.init(this.scene);
  }