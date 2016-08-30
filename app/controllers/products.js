import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
	
	meinkategorie: null,
	
	filteredproducts: Ember.computed(model.products, 'meinkategorie', function() {
		
		if ( this.get('meinkategorie') == null ) {
			return this.get('model.products');
		}else{
			return this.get('model.products');
		}
		
	})
  
  
  
	actions: {
		
		meinkategorie_mach(id) {
			this.set('meinkategorie', id);
		}
		
		/*
		countUp() {
			//this.incrementProperty('myvars.counter');
			//alert( this.get('myvars.mycustomg') );
		},
		resetMyvars() {
			//this.get('myvars').reset();
		}
		*/

	}
	
	
});
