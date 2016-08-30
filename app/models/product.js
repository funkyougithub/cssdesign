import DS from 'ember-data';

export default DS.Model.extend({
	
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
	
	
	
	cart: DS.belongsTo('cart')
	

	
	
	//categories: DS.hasMany('category')
	//category: DS.belongsTo('category'),
	
	
	/*
	categories: DS.attr(),
	
	ausgeschrieben: Ember.computed('name', function() {
		//return `${this.get('name.` + this.get('produktsprache') + `')}`;
		return this.get('name.DE');
	})	*/
	
		
	/*,

	ausgeschrieben: Ember.computed('name.DE', function() {
		//return `${this.get('name.DE')}`;
		return `${this.get('name.DE')}`;
	})*/

	
	
	
	//'number' 'string'
	
});
