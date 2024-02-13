"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: ["node_modules/@appuniversum/ember-appuniversum"],
    },
    fingerprint: {
      exclude: [
        "assets/images/layers-2x.png",
        "assets/images/layers.png",
        "assets/images/marker-icon-2x.png",
        "assets/images/marker-icon.png",
        "assets/images/marker-shadow.png",
      ],
    },
  });

  return app.toTree();
};
