var localStorageJson = [
	{
		message: 'Git Command',
		panelName: '1-panel',
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
		panelName: '2-panel',
		lists: [
			{
				command: 'find . -type f -name "*.js" | xargs grep keyword -n',
				memo: '複数ファイルからテキスト検索'
			}
		]
	}
];