import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
	initialState() {

		return $.getJSON( 'https://api.vouchercube.com/api/v1/Shop?api_key=abcdefghijklmnopqrstuvwxyz0123456789!' ).then(function(json) {	
			console.log( json.data.attributes.customer );
			return{ 
				meinevarjson: json.data.attributes.customer,
				meinevar: 'asdf1äöüß234'
			};
		
		}, function(reason) {
			alert("nope");
		});
	
	}
});

export default Storage;