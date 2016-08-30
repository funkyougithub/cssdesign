import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
		
	host: 'https://api.vouchercube.com',
	namespace: 'api/v1',
	headers: {
		'API_KEY': 'abcdefghijklmnopqrstuvwxyz0123456789!'
	}	
	
	/*
	headers: Ember.computed(function() {
	return {
	'API_KEY': Ember.get(document.cookie.match(/apiKey\=([^;]*)/), '1'),
	'ANOTHER_HEADER': 'Some header value'
	};
	}).volatile()
	*/
    
});
