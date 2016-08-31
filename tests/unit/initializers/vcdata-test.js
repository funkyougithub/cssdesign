import Ember from 'ember';
import VcdataInitializer from 'cssdesign/initializers/vcdata';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | vcdata', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  VcdataInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
