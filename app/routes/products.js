import Ember from 'ember';
import RSVP from 'rsvp';
import { storageFor } from 'ember-local-storage';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Route.extend({
	
	myvars: storageFor('myvars'),
	
	model() {
		
		//alert(window.xyz);
		//alert( this.get('vcdata').readFlag() );
		
		//alert( this.get('myvars.meinvariant') );
		
		return RSVP.hash({
			products: this.get('store').findAll('product'),
			categories: this.get('store').findAll('category')
		});		
	}
	
});
