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

	addItem(product) {
		return this.getCart()
		.then(cart => {
			let orderProduct = cart.get('orderProducts')
			.find(orderProduct => {
				return orderProduct.get('product.id') === product.get('id');
			});

			if (orderProduct) {
				orderProduct.incrementProperty('amount');
				return orderProduct.save();
			} else {
				let newOrderProduct = this.get('store').createRecord('order-product', {
				amount: 1,
				product: product
			});

			cart.get('orderProducts').addObject(newOrderProduct);
			newOrderProduct.save();

			return cart.save();
			}
		});
	}
	
});