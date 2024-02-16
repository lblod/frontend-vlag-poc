import Model, { hasMany } from "@ember-data/model";

export default class OrderModel extends Model {
  @hasMany("road-sign-concept") roadSignConcepts;
}
