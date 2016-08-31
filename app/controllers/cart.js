import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
	inject: {
		service
	}
} = Ember;

export default Ember.Controller.extend({
	
  	cart: service(),
	
	selectarr: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
	
	isWarenkorbLeer: Ember.computed('cart', function() {
		
		return this.get('cart').getWarenkorbEmpty();
		/*
		var gia = this.get('cart').getItemAnzahl();
		if (Number(gia) === 0) {
			return false;
		} else {
			return true;
		}
		*/
		
		//return this.get('cart').
		
		/*
		if ( this.get('cart') === null ) {
			return true;
		} else {
			return false;
		}
		*/
	}),
	
	actions: {
			
		warenkorb_anzahl(item, id, value) {
			console.log(value);
			//return this.get('cart').anzahlItem(item, id, value);
			
		}

	}
	
	
});
