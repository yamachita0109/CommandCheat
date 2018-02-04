function initEventAcctionBtn() {
	'use strict';
	var initValidate = {
		isJson: function(v) {
			try {
				JSON.parse(v);
				return true;
			} catch (e) {
				console.error('Failure in shaping JSON.')
				return false;
			}
		}
	}

	var initEvent = {
		const: function() {
			this.clickSave();
			this.clickDelete();
		},
		clickSave: function() {
			document.getElementById('save-btn').onclick = function() {
				var text = document.getElementById('json-text').value;
				if (!text) {
					return false;
				}

				// text = text.replace(/\r?\n/g,'');
				if (!initValidate.isJson(text)) {
					return false;
				}
				storageMethod.save(text);

				initEvent.clickAfter();
			}
		},

		clickDelete: function() {
			document.getElementById('delete-btn').onclick = function() {
				storageMethod.delete();

				initEvent.clickAfter();
			}
		},

		// TODO There is no point in using vue.js...
		clickAfter: function() {
			initDisplayIns.main();
			initEventCopy();
			initEventAcctionBtn();
		}
	};

	initEvent.const();
};
initEventAcctionBtn();