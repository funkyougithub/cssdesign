import Ember from 'ember';

const {
	inject: {
		service
	}
} = Ember;

export default Ember.Route.extend({
	
	cart: service(),

	model(params) {
		return this.get('store').findRecord('product', params.product_id);
	},
		
	actions: {


	}
	
});
