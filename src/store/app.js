export default{
	state: {
		name: 'Trello Clone',
		templates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
		workspace: [
			{
				id: crypto.randomUUID(),
				name: "Ferdiansyah's",
				type: 'Engineering IT',
				description: 'Hi, this workspace'
			}
		],
		board: []
	},
	mutations: {
		addworkspace(state, data){
			state.workspace.push(data)
		},
		addboard(state, data){
			state.board.push(data)
		},
	}
}