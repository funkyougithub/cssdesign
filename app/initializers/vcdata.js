export function initialize(/* application */) {
	
	/*
	var now = new Date();
	var time = now.getTime();
	var expireTime = time + 3600 * 48000;
	now.setTime(expireTime);
	document.cookie = 'vclg=DE;expires=' + now.toGMTString();
	
	var now = new Date();
	var time = now.getTime();
	var expireTime = time + 3600 * 48000;
	now.setTime(expireTime);
	document.cookie = 'vccu=EUR;expires=' + now.toGMTString();
	*/
	
	
	//application.inject('route', 'foo', 'service:foo');
	
  	Ember.$.getJSON( 'https://api.vouchercube.com/api/v1/Shop?api_key=abcdefghijklmnopqrstuvwxyz0123456789!' )
	.then(function(json) {	
		//alert( json.data.attributes.customer );
		meinevarjson: json.data.attributes.customer;
	}, function(reason) {
		alert("nope");
	});
  
}

export default {
  name: 'vcdata',
  initialize
};
