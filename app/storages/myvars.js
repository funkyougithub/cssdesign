
import StorageObject from 'ember-local-storage/local/object';
const Storage = StorageObject.extend();
Storage.reopenClass({
	initialState() { //hier nur hardcoded für defaults zb accordions sind auf zu geklappt
		return{ 
			vclg: 'DE',
			vccu: 'EUR',
			customer: window.vcc,
			languages: window.lgg,
			currencies: window.crr
		};
	}
});	
	
export default Storage;