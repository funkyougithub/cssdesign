import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Controller.extend({

	warenkorbBreadcrumbIsDisabled: false,
	
	cart: service(),
	
	myvars: storageFor('myvars'),
		
	actions: {
		
		warenkorb_emtpy() {
			this.get('cart').emtpyCart();
		},		
		sprache_mach(lg) {
			this.set('myvars.vclg', lg);
		},
		geld_mach(cur) {
			this.set('myvars.vccu', cur);
		}

	}
	
	
});
