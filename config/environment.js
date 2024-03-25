"use strict";

module.exports = function (environment) {
  const ENV = {
    modulePrefix: "frontend-vlag-poc",
    metis: {
      baseUrl: "http://data.lblod.info/",
    },
    yasgui: {
      defaultQuery: "{{YASGUI_DEFAULT-QUERY}}",
      extraPrefixes: "{{YASGUI_EXTRA_PREFIXES}}",
    },
    environment,
    rootURL: "/",
    locationType: "history",
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    fastboot: {
      hostWhitelist: [
        /^localhost(:[0-9]*)?/,
        "localhost",
        /^.*$/,
        "backend", //mu-semtech
        "identifier", //for some reason fastboot seems to set the host header
      ],
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
