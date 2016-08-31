import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
	inject: {
		service
	}
} = Ember;

export default Ember.Controller.extend({
	
	cart: service(),
	
	betrag: '',
	betragValid: Ember.computed.match('betrag', /^\d{1,9}$/),
	//betragDisabled: Ember.computed.not('betragValid'),
	
	head: '',
	headValid: Ember.computed.notEmpty('head'),
	//headDisabled: Ember.computed.not('headValid'),
	
	lauftext: '',
	lauftextValid: Ember.computed.notEmpty('lauftext'), //Ember.computed.gte('lauftext.length', 5),
	//lauftextDisabled: Ember.computed.not('lauftextValid'),
	
	submitDisabled: Ember.computed('betragValid', 'headValid', 'lauftextValid', function() {
		if(
		this.get('betragValid') == true &&  
		this.get('headValid')  == true &&  
		this.get('lauftextValid') == true 
		)
			return false;
		else
			return true;
	}),

	actions: {
		
		warenkorb_add(item) {
			var betrag = this.get('betrag');
			var head = this.get('head');
			var lauftext = this.get('lauftext');
			
			this.get('cart').addItem(item, betrag, head, lauftext)
				.then((response) => { 
				this.transitionToRoute('cart');
			});
			
			this.set('betrag', '');
			this.set('head', '');
			this.set('lauftext', '');
		}

	}

	/*
	Ember.computed.notEmpty('lauftext'),
	kontaktIsValid: Ember.computed.match('kontaktEmail', /^.+@.+\..+$/),
	textIsValid: Ember.computed.gte('kontaktText.length', 5),	//gte = greater than or equal
	checkMyValids: Ember.computed.and('kontaktIsValid', 'textIsValid'), // If you have two computed properties, and both must be true, you can use a third computed property to compute the and.
	kontaktButtonIsDisabled: Ember.computed.not('checkMyValids'),
	*/		

	/*
	actualHead: Ember.computed('head', function() {
		console.log('actualHead function is called: ', this.get('head'));
	}),
	headChanged: Ember.observer('head', function() {
		console.log('observer is called', this.get('head'));
	})
	*/
	
});
