import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
	
	warenkorbBreadcrumbIsDisabled: false,
	
	myvars: storageFor('myvars'),
	
	actions: {
		
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
