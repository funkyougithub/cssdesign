import Ember from 'ember';

export function selectanzahl(params /*, hash*/ ) {
	
	let [arg1, arg2] = params;
	if(arg1 == arg2)
		return "selected";

}

export default Ember.Helper.helper(selectanzahl);
