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
		
		warenkorb_anzahl() {
			this.get('cart').getItemAnzahl();
		},
		warenkorb_emtpy() {
			return this.get('cart').emtpyCart()
				.then((response) => { 
				this.transitionToRoute('cart');
			});
		},
		sprache_mach_de() {
			this.set('myvars.vclg', 'DE');
		},
		sprache_mach_en() {
			this.set('myvars.vclg', 'EN');
		},
		geld_mach_eur() {
			this.set('myvars.vccu', 'EUR');
		},
		geld_mach_usd() {
			this.set('myvars.vccu', 'USD');
		}

	}
	
	
});
