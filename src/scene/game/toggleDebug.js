export function toggleDebug() {
    const r = this.render.options;
    r.showDebug = !r.showDebug;
    r.wireframes = !r.wireframes;
    r.showAngleIndicator = !r.showAngleIndicator;
    r.showBroadphase = !r.showBroadphase;
    r.showSeparations = !r.showSeparations;
    r.showConvexHulls = !r.showConvexHulls;
    r.showIds = !r.showIds;
    r.showVelocity = !r.showVelocity;
  }