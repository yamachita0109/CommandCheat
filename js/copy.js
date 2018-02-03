(function(){
	'use strict';
	var common = {
		copy: function(s) {
			var temp = document.createElement('div');
			temp.appendChild(document.createElement('pre')).textContent = s;
			var s = temp.style;
			s.position = 'fixed';
			s.left = '-100%';
			document.body.appendChild(temp);
			document.getSelection().selectAllChildren(temp);
			var result = document.execCommand('copy');
			document.body.removeChild(temp);
			return result;
		},

		// TODO to cool
		showModal: function(s) {
			var modalEl = document.createElement('div');
			modalEl.style.margin = '20%';
			modalEl.style.padding = '10%';
			modalEl.style.backgroundColor = '#fff';
			modalEl.textContent = s;
			mui.overlay('on', modalEl);
		}
	};

	var initEvent = {
		const: function(){
			this.clickCopy();
		},
		clickCopy: function(){
			var copy = document.getElementsByClassName('copy');
			for(var i = 0; i < copy.length; i++ ) {
				copy[i].onclick = function (e) {
					var t = e.target.parentNode.nextElementSibling.innerHTML;
					common.copy(t);
					common.showModal('Copy complete!');
				}
			}
		}
	};

	initEvent.const();
})();
