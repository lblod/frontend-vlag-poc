import EmberRouter from "@ember/routing/router";
import config from "frontend-vlag-poc/config/environment";
import { fallbackRoute, classRoute } from "ember-metis";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("index", { path: "" });
  this.route("sparql");

  fallbackRoute(this);
});
