function initEventAcctionBtn() {
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

		isJson: function(v) {
			try {
				JSON.parse(v);
				return true;
			} catch (e) {
				initMessageIns.show(consts.message.errorParseJSON, consts.message.erroKey);
				console.error(consts.message.errorParseJSON);
				return false;
			}
		}
	};

	var initEvent = {
		const: function() {
			this.clickSave();
			this.clickDelete();
			this.clickCopy();
		},
		clickSave: function() {
			document.getElementById('save-btn').onclick = function() {
				var text = document.getElementById('json-text').value;
				if (!text) {
					return false;
				}

				// text = text.replace(/\r?\n/g,'');
				if (!common.isJson(text)) {
					return false;
				}
				storageMethod.save(text);
				initEvent.clickAfter();
				initMessageIns.show(consts.message.successSave, consts.message.successKey);
			}
		},

		// FIXME
		clickDelete: function() {
			document.getElementById('delete-btn').onclick = function() {
				storageMethod.delete();
				initEvent.clickAfter();
				initMessageIns.show(consts.message.successDelete, consts.message.successKey);
			}
		},

		// TODO There is no point in using vue.js...
		clickAfter: function() {
			initDisplayIns.main();
			initEventAcctionBtn();
		},

		clickCopy: function(){
			var copy = document.getElementsByClassName('copy');
			for(var i = 0; i < copy.length; i++ ) {
				copy[i].onclick = function (e) {
					var t = e.target.parentNode.nextElementSibling.innerHTML;
					common.copy(t);
					initMessageIns.show(consts.message.successCopy, consts.message.successKey);
				}
			}
		}
	};

	initEvent.const();
};
initEventAcctionBtn();