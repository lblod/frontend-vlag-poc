import JSONAPIAdapter from "@ember-data/adapter/json-api";
import { inject as service } from "@ember/service";
export default class ApplicationAdapter extends JSONAPIAdapter {
  @service fastboot;

  constructor() {
    super(...arguments);
    console.log("hallo", window.BACKEND_URL);
    if (this.fastboot.isFastBoot) {
      this.host = window.BACKEND_URL;
    }
  }
}
