// TODO to cool
// TODO There is no point in using vue.js...
var initDisplay = function() {
	var commandTabs = '',
		commandTab = '';
	this.main = function() {
		var localStorageJson,
			localStorageText = storageMethod.get(consts.storageKey);

		try {
			localStorageJson = JSON.parse(localStorageText);
		} catch (e) {
			// TODO handling
			console.error('Failure in shaping JSON.')
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
				data: {items: json}
			});
		} else {
			Object.assign(commandTab.$data, {items: json})
		}

		document.getElementById('json-text').value = localStorageText
	};
};
var initDisplayIns = new initDisplay;
initDisplayIns.main();