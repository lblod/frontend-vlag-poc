import Model, { attr, belongsTo } from "@ember-data/model";
export default class RoadSignConceptModel extends Model {
  @attr label;
  @attr image;
}
