import Ember from 'ember';

const {
  inject: {
    service
  }
} = Ember; // = shoppingCart: Ember.inject.service() // wenn kein name angegeben dann ruft er wie im object angegeben auf

export default Ember.Service.extend({
	
	store: service(), //gekapseltes objekt damit ich drauf zugreifen kann

	getCart() {
		return this.get('store')
		.findAll('cart')
		.then(carts => {
			if (carts.get('length') === 0) {
				return this.get('store').createRecord('cart');
			} else {
				//console.log('firstObject');
				return carts.get('firstObject');
			}
		});
	},

	getWarenkorbEmpty() {
	
		return this.get('store')
		.findAll('order-product')
		.then(orderProducts => {
			if (orderProducts.get('length') === 0) {
				return true;
			} else {
				return false;
			}
		});

	},
	
	getItemAnzahl() {
		
		return this.get('store')
		.findAll('order-product')
		.then(orderProduct => {
			//console.log( orderProduct.get('length') );
			return orderProduct.get('length');
		});
		
	},
	
	itemAnzahl(product, id, job){
		
		return this.getCart()
		.then(cart => {
			let orderProduct = cart.get('orderProducts')
			.find(orderProduct => {
				return orderProduct.get('product.id') === id;
			});
			
			if (orderProduct) {
				if(job == 'up'){
					orderProduct.incrementProperty('anzahl');
				}else if(job == 'down'){
					orderProduct.decrementProperty('anzahl');
				}
				let myanz = orderProduct.get('anzahl');
				if( myanz < 1){
					orderProduct.set('anzahl', 1);
				}else if(myanz > 10){
					orderProduct.set('anzahl', 10);
				}
				return orderProduct.save();
			}
			
		});
		
	},

	addItem(product, betrag, head, text) { 
		return this.getCart()
		.then(cart => {
			let orderProduct = cart.get('orderProducts')
			.find(orderProduct => {
				return orderProduct.get('product.id') === product.get('id');
			});

			if (orderProduct) {
				//orderProduct.incrementProperty('anzahl');
				orderProduct.set('betrag', betrag);
				orderProduct.set('head', head);				
				orderProduct.set('text', text);				
				return orderProduct.save();
			} else {
				let newOrderProduct = this.get('store').createRecord('order-product', {
					anzahl: 1,
					product: product,
					betrag: betrag,
					head: head,
					text: text
				});
				cart.get('orderProducts').addObject(newOrderProduct);
				newOrderProduct.save();
				return cart.save();
			}
		});
	},

	itemDelete(product, id){
		
		return this.getCart()
		.then(cart => {
			
			let orderProduct = cart.get('orderProducts')
			.find(orderProduct => {
				return orderProduct.get('product.id') === id;
			});
			
			if (orderProduct) {
				orderProduct.destroyRecord();
			}
			
		});
		
	},
	
	emtpyCart() {
	
		this.get('store')
		.findAll('order-product')
		.forEach(orderProduct => {
			orderProduct.destroyRecord();
		});

		/*this.get('store')
		.findAll('cart')
		.forEach(cart => {
			cart.destroyRecord();
		});*/
		
		this.get('store')
		.findAll('cart')
		.then(cart => {	
			if( cart.get('firstObject') ){
				cart.get('firstObject').get('orderProducts').forEach(orderProduct => {
					orderProduct.destroyRecord();
				});
				cart.get('firstObject').destroyRecord();
			}
		});
		
	}

	
});	