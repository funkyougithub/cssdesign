import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('products');
	this.route('product', { path: '/product/:product_id' });
	this.route('cart');


	this.route('css_produkte');
	this.route('css_warenkorb');
	this.route('css_detail');
	this.route('css_bestellung');
	this.route('css_diverses');
	this.route('css_bestelluebersicht');
});

export default Router;
