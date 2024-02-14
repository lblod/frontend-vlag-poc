import Component from "@glimmer/component";

export default class LocationsMapComponent extends Component {
  get zoom() {
    return this.args.baseZoom || 20;
  }

  get lat() {
    return this.args.baseLat || 51.213596;
  }

  get lng() {
    return this.args.baseLng || 4.42281;
  }

  get vacLocation() {
    return [51.213596, 4.42281];
  }
}
