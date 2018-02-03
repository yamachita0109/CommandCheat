// TODO to cool
localStorageJson.push(
	{
		message: '+ New Tab',
		panelName: 'puls-panel',
		lists: []
	}
);
var json = localStorageJson.map((o, i)=>{
	o.isActive = i === 0;
	o.activeClass = consts.activeClassName;
	o.lists = o.lists.map((o)=>{

	});
	return o;
});

var commandTabs = new Vue({
	el: consts.tabsElement,
	data: {items: json}
});

var commandTab = new Vue({
	el: consts.tabElement,
	data: {items: json}
});

