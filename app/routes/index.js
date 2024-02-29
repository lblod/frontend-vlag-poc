import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service router;
  @service store;

  beforeModel() {
    this.router.transitionTo("sparql");
  }

  model() {
    return this.store.findAll("geopoint", { include: "signs" });
  }
}
