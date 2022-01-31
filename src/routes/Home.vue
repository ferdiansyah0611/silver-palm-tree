<template>
	<div class="home">
		<div class="left">
			<div>
				<a @click.prevent="changemenu('boards')" :class="active === 'boards' && 'active' " href=""><i class="mdi mdi-bulletin-board"></i> Boards</a>
				<a @click.prevent="changemenu('templates')" :class="active === 'templates' && 'active' "  href=""><i class="mdi mdi-table-column"></i> Templates</a>
				<a @click.prevent="changemenu('home')" :class="active === 'home' && 'active' "  href=""><i class="mdi mdi-home"></i> Home</a>
			</div>
			<p class="flex items-center">
				<span class="flex-1">Workspaces</span>
				<i @click="handle('openaddworkspace')" class="mdi mdi-plus text-black cursor-pointer"></i>
			</p>
			<item-workspace v-for="data, key in app.workspace" :key="key" :data.sync="data" :first="key === 0"></item-workspace>
		</div>
		<div class="right">
			<div v-if="opentemplate">
				<h2 class="primary-text font-bold my-2 text-xl flex">
					<i class="mdi mdi-bulletin-board"></i>
					<span class="flex-1 ml-1"> Most popular templates</span>
					<i @click="handleopentemplate" class="mdi mdi-close cursor-pointer"></i>
				</h2>
				<p class="primary-text">
					<span class="text-gray-500">Get going faster with a template from the Trello community or </span>
					<select class="p-1" name="" id="">
						<option value="">Choose a category</option>
						<option v-for="data, key in category" :key="key" :value="data">{{data}}</option>
					</select>
				</p>
				<div class="list-template">
					<div v-for="data, key in template" :key="key" style="background: url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg)" >
						<span>Template</span>
						<p class="font-bold">{{data}}</p>
					</div>
				</div>
				<div class="mt-2">
					<a class="text-sm text-underline" href="/">Browse the full template gallery</a>
				</div>
			</div>

			<div :class="opentemplate && 'mt-8'">
				<h5 class="text-primary-400 font-bold">YOUR WORKSPACES</h5>
				<div class="menu">
					<div class="profile">
						<b-avatar></b-avatar>
			  		<span>{{user.name}}'s</span>
					</div>
					<a href="" class="hidden-on-mobile sm-flex">
						<i class="mdi mdi-bulletin-board"></i>
						<span>Boards</span>
					</a>
					<a href="" class="hidden-on-mobile sm-flex">
						<i class="mdi mdi-bulletin-board"></i>
						<span>Workspace table</span>
					</a>
					<a href="" class="hidden-on-mobile sm-flex">
						<i class="mdi mdi-bulletin-board"></i>
						<span>Members (1)</span>
					</a>
					<a href="" class="hidden-on-mobile sm-flex">
						<i class="mdi mdi-bulletin-board"></i>
						<span>Settings</span>
					</a>
					<a href="" class="hidden-on-mobile sm-flex">
						<i class="mdi mdi-bulletin-board"></i>
						<span>Upgrade</span>
					</a>
				</div>
				<div class="board">
					<div class="new" @click="handle('openboard')">
						<p>Create new boards</p>
					</div>
					<div v-for="data, key in app.board" :key="key">
						{{data.title}}
					</div>
				</div>
				<b-button size="sm" type="" class="mt-4" variant="primary">View all closed boards</b-button>
				
				<add-board :open="openboard" :close="() => handle('openboard')"></add-board>
				<add-workspace :close="() => handle('openaddworkspace')" :open.sync="openaddworkspace"></add-workspace>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import AddWorkspace from 'components/AddWorkspace.vue'
	import ItemWorkspace from 'components/ItemWorkspace.vue'
	import AddBoard from 'components/AddBoard.vue'
	export default{
		name: 'Home',
		components: {
			AddWorkspace, ItemWorkspace, AddBoard
		},
		data(){
			return{
				active: 'boards',
				opentemplate: true,
				openworkspace: true,
				openaddworkspace: false,
				openboard: true,
				category: [
					'Popular', 'Technology information'
				],
				template: [
					'Project Management', 'Kanban Template', 'Simple Project Board', 'Remote Team Hub'
				]
			}
		},
		methods: {
			changemenu(value){
				this.active = value
			},
			handleopentemplate(){
				this.opentemplate = !this.opentemplate
			},
			handleworkspace(){
				this.openworkspace = !this.openworkspace
			},
			handle(name){
				this[name] = !this[name]
			}
		},
		computed: mapState({
			user: 'user',
			app: 'app',
		})
	}
</script>
<style lang="sass">
	$sm: 640px
	.home
		@apply grid
		grid-template-columns: 1fr
		@media (min-width: $sm)
			grid-template-columns: 300px minmax(300px, 1fr)
		.left
			@apply hidden sm:block pb-6 sticky
			z-index: 1
			top: 65px
			max-height: calc(100vh - 13vh)
			overflow: auto
			> *
				@apply flex-1
			> div
				display: grid
			a
				text-decoration: none
				@apply p-2 hover:bg-gray-100 font-bold text-sm
				&.active
					@apply text-primary-100 bg-primary-200
			p
				@apply text-sm p-2 text-gray-400 m-0

		.list-template
			@apply grid grid-cols-2 sm:grid-cols-4 mt-4
			> div
				@apply p-2
				height: 100px
				span
					@apply p-1 text-xs rounded-sm
					background: #efefef
				p
					@apply mt-2
					color: white

		.workspace-down
			@apply ml-5
			> a
				@apply flex space-x-2 text-gray-500 hover:bg-gray-100

		.right
			// max-height: calc(100vh - 13vh)
			overflow: auto
			@apply px-4 pb-6
			.menu
				@apply flex space-x-2 mt-2
				.profile
					@apply flex items-center space-x-2 flex-1
				a
					@apply flex items-center space-x-2 bg-gray-100 p-2 text-sm
			.board
				@apply grid grid-cols-2 sm:grid-cols-4 mt-2
				.new
					@apply bg-gray-100 text-xs font-bold flex justify-center items-center text-gray-400 hover:bg-gray-200 cursor-pointer
					height: 100px
				> div:not(.new)
					@apply bg-gray-100 text-xs font-bold flex justify-center items-center text-gray-400 hover:bg-gray-200 cursor-pointer
					height: 100px
</style>