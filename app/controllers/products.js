import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({


	aktkategorie: null,
  
  	filteredproducts: Ember.computed('model.products', 'aktkategorie', function() {

		if ( this.get('aktkategorie') === null ) {
			return this.get('model.products');
		} else {
			return this.get('model.products').filter(product => {
				return product.get('categories').contains( this.get('aktkategorie') );
			});
		}

	}),
  
	actions: {
		
		aktkategorie_mach(id) {
			this.set('aktkategorie', id);
		},
		aktkategorie_reset() {
			this.set('aktkategorie', null);
		}

	}
	
	
});
