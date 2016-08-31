import DS from 'ember-data';
import { storageFor } from 'ember-local-storage';

export default DS.Model.extend({
	
	myvars: storageFor('myvars'),
	
	name: DS.attr(),
	
	namelg: Ember.computed('myvars.vclg', function() {
		let hlprcat = this.get('myvars.vclg');
		return this.get("name")[hlprcat];
	})
	
	//products: DS.hasMany('product')
	
});
