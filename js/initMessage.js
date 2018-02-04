// TODO to cool
var initMessage = function() {
	var messageIns;
	this.main = function() {
		messageIns = new Vue({
			el: consts.messageElement,
			data: {
				className: '',
				message: '',
				isDisplay: false
			}
		});
	};
	this.show = function(m, c) {
		messageIns.isDisplay = true;
		messageIns.message = m;
		messageIns.className = c;
		setTimeout(function(){
			messageIns.isDisplay = false;
			messageIns.className = '';
		}, 3000);
	};
};
var initMessageIns = new initMessage;
initMessageIns.main();