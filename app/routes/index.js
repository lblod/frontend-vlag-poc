import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service router;
  @service store;

  async model() {
    let geopoints = await this.store.findAll("geopoint");
    return geopoints;
  }
}
