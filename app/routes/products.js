import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	
	model() {
		return RSVP.hash({
			products: this.get('store').findAll('product'),
			categories: this.get('store').findAll('category')
		});		
	}
	
});