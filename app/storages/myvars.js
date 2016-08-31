
import StorageObject from 'ember-local-storage/local/object';
const Storage = StorageObject.extend();
Storage.reopenClass({
	initialState() { //hier nur hardcoded für defaults zb accordions sind auf zu geklappt
		return{ 
			vclg: 'DE',
			vccu: 'EUR',
			meinevar: 'asdf1äöüß234'
		};
	}
});	
	
/*

// hier variable schon definieren meinevarjson: ganz viele timing fragen - ev später setzen
// dort wo man es braucht zb in der route erst laden sobal in die route laden dort den ajax und im then aufs object zb in application oder ins model hook

	return $.getJSON( 'https://api.vouchercube.com/api/v1/Shop?api_key=abcdefghijklmnopqrstuvwxyz0123456789!' ).then(function(json) {	
		console.log( json.data.attributes.customer );
		return{ 
			meinevarjson: json.data.attributes.customer,
			meinevar: 'asdf1äöüß234'
		};
	
	}, function(reason) {
		alert("nope");
	});
*/

export default Storage;