import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
	inject: {
		service
	}
} = Ember;

export default Ember.Controller.extend({
	
  	cart: service(),
	
	isWarenkorbLeer: Ember.computed('cart', function() {	
		return this.get('cart').getWarenkorbEmpty();
	}),
	
	actions: {
		
		warenkorb_delete_item(orderProduct, id){
			this.get('cart').itemDelete(orderProduct, id);
		},		
		warenkorb_anzahl_up(orderProduct, id){
			var job = 'up';
			this.get('cart').itemAnzahl(orderProduct, id, job);
		},
		warenkorb_anzahl_down(orderProduct, id) {
			var job = 'down';
			this.get('cart').itemAnzahl(orderProduct, id, job);
		}

	}
	
	
});
