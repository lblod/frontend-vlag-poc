import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
export default class GeoPointModel extends Model {
  @attr latitude;
  @attr longitude;
  @hasMany("road-sign-concept", { inverse: null, async: true })
  roadSignConcepts;
}
