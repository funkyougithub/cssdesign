import DS from 'ember-data';

export default DS.Model.extend({

	anzahl: DS.attr('number'),
	product: DS.belongsTo('product'),
	
	betrag: DS.attr('number'),
	head: DS.attr('string'),
	text: DS.attr('string')

});
