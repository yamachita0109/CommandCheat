// TODO to cool
// TODO There is no point in using vue.js...
var initDisplay = function() {
	var commandTabs = '',
		commandTab = '',
		localStorageJson,
		localStorageText;
	this.main = function() {
		localStorageText = storageMethod.get(consts.storageKey);
		try {
			localStorageJson = JSON.parse(localStorageText);
		} catch (e) {
			initMessageIns.show(consts.message.errorParseJSON, consts.message.erroKey);
			console.error(consts.message.errorParseJSON);
		}
		localStorageJson = localStorageJson ? localStorageJson : [];

		localStorageJson.push(
			{
				title: 'Setting',
				panelName: 'setting-panel',
				lists: []
			}
		);
		var json = localStorageJson.map((o, i)=>{
			o.isActive = i === 0;
			o.activeClass = consts.activeClassName;
			if (!o.panelName) {
				o.panelName = i + '-panel'
			}
			return o;
		});

		if (!commandTabs) {
			commandTabs = new Vue({
				el: consts.tabsElement,
				data: {items: json}
			});
		} else {
			Object.assign(commandTabs.$data, {items: json})
		}

		if (!commandTab) {
			commandTab = new Vue({
				el: consts.tabElement,
				data: {items: json},
				mounted: function() {
					this.$nextTick(function () {
						document.getElementById('json-text').value = localStorageText;
					});
				},
				updated: function() {
					document.getElementById('json-text').value = localStorageText;
				}
			});
		} else {
			Object.assign(commandTab.$data, {items: json})
		}

	};
};
var initDisplayIns = new initDisplay;
initDisplayIns.main();