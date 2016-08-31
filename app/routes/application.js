import Ember from 'ember';
import RSVP from 'rsvp';
import { storageFor } from 'ember-local-storage';

const {
  inject: {
    service
  }
} = Ember;
		
export default Ember.Route.extend({
	
	myvars: storageFor('myvars'),
  
	model() {
		
		window.apk = "abcdefghijklmnopqrstuvwxyz0123456789!";
		
		//this.set('myvars.meinvariant', '12 zu mittag');
		Ember.$.getJSON( 'https://api.vouchercube.com/api/v1/Shop?api_key=' + window.apk )
		.then(function(json) {	
			window.vcc = json.data.attributes.customer;
			window.lgg = json.data.attributes.languages;
			window.crr = json.data.attributes.currencies;			
		}, function(reason) {
			alert("NO SHOPINIT DATA");
		});
		
		return RSVP.hash({
			products: this.get('store').findAll('product')
		});		
	}
	
});

/*
{
   "data":{
      "attributes":{
         "customer":"What a wonderful Client",
         "languages":[
            {
               "code":"DE",
               "name":"Deutsch"
            },
            {
               "code":"EN",
               "name":"English"
            }
         ],
         "currencies":[
            "EUR",
            "USD",
            "GBP"
         ],
         "default_language":"DE"
      },
      "type":"shop",
      "id":"shop1"
   }
}
*/