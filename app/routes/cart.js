import Ember from 'ember';
import RSVP from 'rsvp';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Route.extend({
	
	cart: service(),

	model() {	
		return this.get('cart').getCart();
	},	
		
	actions: {

	}

});

