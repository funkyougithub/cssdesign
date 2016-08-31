import Ember from 'ember';

export default Ember.Service.extend({

	init(){
		this._super(...arguments); // GANZ WICHTIG
		if(!navigator.cookieEnabled )
			alert("NO COOKIES ALLOWED");
	},
	
	/*
	getMyCookieHash() {
		//https://www.sitepoint.com/how-to-deal-with-cookies-in-javascript/
		var myLocalCookie = this.getMyCookie();
		if (myLocalCookie == null)
			this.setMyCookie();	
		return this.getMyCookie();	
	},
	*/
	
	//this.get('cookie').setMyCookie('vclg','DE');
	
	setMyCookie(coknm,cokval) {
		var now = new Date();
		var time = now.getTime();
		var expireTime = time + 3600 * 48000;
		now.setTime(expireTime);
		document.cookie = coknm + '=' + cokval + ';expires=' + now.toGMTString();		
	},
	getMyCookie(coknm){
		if (coknm == 'vclg')
			return Ember.get(document.cookie.match(/vclg\=([^;]*)/), "1");
		else if (coknm == 'vccu')
			return Ember.get(document.cookie.match(/vccu\=([^;]*)/), "1");	
	}	
	
});
