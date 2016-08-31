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

	anzahlItem(product, id, anzahl) {

		return this.getCart()
		.then(cart => {
			let orderProduct = cart.get('orderProducts')
			.find(orderProduct => {
				return orderProduct.get('product.id') === id;
			});
			if (orderProduct) {
				orderProduct.set('anzahl', anzahl);				
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

	emtpyCart() {
	
/*
		this.get('store')
		.findAll('order-product')
		.then(orderProduct => {
			
			
			
			
			//console.log( orderProduct.get('length') );
			orderProduct.get('length');
			cart.get('firstObject').destroyRecord();
		});
*/
	
		return this.get('store')
		.findAll('cart')
		.then(cart => {
			
			//hier fehlt noch orderProducts zerstören
			/*
			cart.get('orderProducts').then(function(orderProduct){
				orderProduct.content.forEach(function(rec) {
					Ember.run.once(this, function() {
						rec.deleteRecord();
						rec.save();
					});
				}, this);
			});
			cart.get('orderProducts').forEach(orderProduct => {
				return orderProduct.destroyRecord();
			});*/
			
			if( cart.get('firstObject') )
				return cart.get('firstObject').destroyRecord();
			
		});

		
		
		
	}
	
});