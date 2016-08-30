import DS from 'ember-data';

export default DS.Model.extend({

  orderProducts: DS.hasMany('order-product')

});
