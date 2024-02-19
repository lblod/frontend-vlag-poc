import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service router;
  @service store;

  async model() {
    let points = await fetch("/geopoints");
    points = await points.json();

    const mod = [];

    for (const point of points.data) {
      let r = await fetch(point.relationships.signs.links.self);
      r = await r.json();
      mod.push({
        lat: point.attributes.latitude,
        long: point.attributes.longitude,
        sign: {
          image: r.data[0].attributes.image,
          label: r.data[0].attributes.label,
        },
      });
    }
    return mod;
  }
}
