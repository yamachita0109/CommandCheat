// TODO Error
var storageMethod = {
	save: function(v) {
		if (!v) {
			return false;
		}
		localStorage.setItem(consts.storageKey, v);
	},

	get: function() {
		return localStorage.getItem(consts.storageKey);
	},

	delete: function() {
		localStorage.removeItem(consts.storageKey);
	}
}