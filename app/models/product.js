import DS from 'ember-data';
import { storageFor } from 'ember-local-storage';

export default DS.Model.extend({
	
	myvars: storageFor('myvars'),
	
	name: DS.attr(),
	allowCustomText: DS.attr('boolean'),
	images: DS.attr(),
	active: DS.attr('boolean'),
	config: DS.attr(),
		//tax
		//priceWithTax
		//priceWithoutTax
	allowCustomDesign: DS.attr('boolean'),
	description: DS.attr(),
	categories: DS.attr(),

	cart: DS.belongsTo('cart'),
	
	namelg: Ember.computed('myvars.vclg', function() {
		let hlprlg = this.get('myvars.vclg');
		return this.get("name")[hlprlg];
	}),
	
	preis: Ember.computed('myvars.vccu', function() {
		let hlprcu = this.get('myvars.vccu');
		return this.get( "config.priceWithoutTax." + hlprcu ) + '/' + this.get( "config.priceWithTax." + hlprcu );
	})
	
	/*
	i18n: Ember.inject.service("i18n"),
	localizedName: Ember.computed("i18n.locale", "name", function() {
		return this.get("name")[this.get("i18n.locale")];
	})
	*/
	
});
