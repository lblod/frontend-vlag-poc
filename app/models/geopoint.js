import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
export default class GeopointModel extends Model {
  @attr latitude;
  @attr longitude;
  @hasMany("road-sign-concepts", { async: false, inverse: null })
  signs;
}
