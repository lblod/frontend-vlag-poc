import { module, test } from 'qunit';
import { setupTest } from 'frontend-vlag-poc/tests/helpers';

module('Unit | Route | external', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:external');
    assert.ok(route);
  });
});
