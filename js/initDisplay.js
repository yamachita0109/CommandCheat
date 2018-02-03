var activeClassName = 'mui--is-active';

var commandTabs = new Vue({
	el: '#command-tabs',
	data: {
		items: [
			{
				message: 'Git Command',
				isActive: true,
				activeClass: activeClassName,
				panelName: 'git-panel'
			},
			{
				message: 'Linux Command',
				isActive: false,
				activeClass: activeClassName,
				panelName: 'linux-panel'
			}
		]
	}
});

var commandTab = new Vue({
	el: '#command-tab',
	data: {
		items: [
			{
				message: 'Git Command',
				isActive: true,
				activeClass: activeClassName,
				panelName: 'git-panel',
				lists: [
					{
						command: 'git diff --color-words',
						memo: 'いい感じの差分表示'
					},
					{
						command: 'git log --graph --all --format="%x09%C(cyan bold)%an%Creset%x09%C(yellow)%h%Creset %C(magenta reverse)%d%Creset %s"',
						memo: 'ログおしゃん'
					}
				]
			},
			{
				message: 'Linux Command',
				isActive: false,
				activeClass: activeClassName,
				panelName: 'linux-panel',
				lists: [
					{
						command: 'find . -type f -name "*.js" | xargs grep keyword -n',
						memo: '複数ファイルからテキスト検索'
					}
				]
			}
		]
	}
});

