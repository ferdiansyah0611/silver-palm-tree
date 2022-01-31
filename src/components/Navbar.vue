<template>
	<nav class="navbar">
		<div class="left">
			<a href="">{{app.name}}</a>
      <b-dropdown auto-close="outside" class="hidden-on-mobile sm-flex" id="dropdown-Workspace" text="Workspace">
			  <b-dropdown-header class="text-center">Workspace</b-dropdown-header>
			  <b-dropdown-divider></b-dropdown-divider>
			  <div class="body-dropdown">
			  	<p>Your Workspaces</p>
			  	<div class="workspace">
			  		<a v-for="data, key in app.workspace" :key="key" href="/">
			  			<b-avatar></b-avatar>
			  			<span>{{data.name}}</span>
			  		</a>
			  	</div>
			  </div>
			</b-dropdown>
			<b-dropdown auto-close="outside" class="hidden-on-mobile sm-flex" id="dropdown-Recent" text="Recent">
			  <b-dropdown-header class="text-center">Recent boards</b-dropdown-header>
			  <b-dropdown-divider></b-dropdown-divider>
			  <div class="body-dropdown">
			  	<div class="recent workspace">
			  		<a href="/">
			  			<b-avatar></b-avatar>
			  			<span>
			  				<span>Untitled</span><br/>
			  				<span>Ferdiansyah's Workspace</span>
			  			</span>
			  		</a>
			  	</div>
			  </div>
			</b-dropdown>
			<b-dropdown auto-close="outside" class="hidden-on-mobile sm-flex" id="dropdown-Starred" text="Starred">
			  <b-dropdown-header class="text-center">Starred boards</b-dropdown-header>
			  <b-dropdown-divider></b-dropdown-divider>
			  <div class="body-dropdown">
			  	<div class="recent">
			  		<img src="https://a.trellocdn.com/prgb/dist/images/starred-boards-menu/starred-board.cc47d0a8c646581ccd08.svg" alt="img">
			  		<p class="mt-2">Star important boards to access them quickly and easily.</p>
			  	</div>
			  </div>
			</b-dropdown>
			<b-dropdown auto-close="outside" class="hidden-on-mobile sm-flex" id="dropdown-Templates" text="Templates">
			  <b-dropdown-header class="text-center">Templates</b-dropdown-header>
			  <b-dropdown-divider></b-dropdown-divider>
			  <div class="body-dropdown">
			  	<div class="templates">
			  		<div class="mb-2">
			  			<p class="flex items-center">
			  				<span class="flex-1">Top templates</span>
			  				<i class="mdi mdi-close"></i>
			  			</p>
			  		</div>
			  		<div class="item">
			  			<div v-for="data, key in app.templates" :key="key">
			  				<img src="https://a.trellocdn.com/prgb/dist/images/starred-boards-menu/starred-board.cc47d0a8c646581ccd08.svg" alt="">
			  				<p>Template {{data}}</p>
			  			</div>
			  		</div>
			  		<div class="flex items-center space-x-2 p-2">
			  			<i class="mdi mdi-bulletin-board text-xl"></i>
			  			<p class="text-sm">See hundreds of templates from the Trello community</p>
			  		</div>
			  		<b-button size="sm" class="button mt-2 w-full" type="" variant="primary">Explore templates</b-button>
			  	</div>
			  </div>
			</b-dropdown>
			<b-dropdown no-caret auto-close="outside" class="hidden-on-mobile sm-flex" id="dropdown-Create" text="Create">
			  <b-dropdown-header class="text-center">Create</b-dropdown-header>
			  <b-dropdown-divider></b-dropdown-divider>
			  <div class="">
			  	<div class="create">
			  		<div v-for="data, key in listcreate" class="cursor-pointer hover:bg-gray-100 p-2">
			  			<p class="text-sm font-bold flex space-x-2 items-center">
			  				<i :class="data.icon"></i>
			  				<span>{{data.name}}</span>
			  			</p>
			  			<p class="text-sm">{{data.description}}</p>
			  		</div>
			  	</div>
			  </div>
			</b-dropdown>
		</div>
		<div class="right">
	    <b-form-input placeholder="Search"></b-form-input>
			<b-button class="hidden-on-mobile sm-block">
				<i class="mdi mdi-information-outline"></i>
			</b-button>
			<b-button class="hidden-on-mobile sm-block">
				<i class="mdi mdi-bell-outline"></i>
			</b-button>
			<b-avatar class="cursor-pointer"></b-avatar>
		</div>
	</nav>
</template>
<script>
import { mapState } from 'vuex'
export default{
	data(){
		return{
			listcreate: [
				{
					name: 'Create board',
					description: 'A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.',
					icon: 'mdi mdi-bell-outline'
				},
				{
					name: 'Start with a template',
					description: 'Get started faster with a board template.',
					icon: 'mdi mdi-bell-outline'
				},
				{
					name: 'Create Workspace',
					description: 'A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends.',
					icon: 'mdi mdi-bell-outline'
				},
			]
		}
	},
	mounted(){
		document.querySelectorAll('.dropdown-menu').forEach((el) => {
			el.onclick = e => e.stopPropagation()
		})
	},
	computed: mapState({
		app: 'app',
	})
}
</script>
<style lang="sass">
.navbar
	@apply fixed left-0 top-0 w-full bg-primary-100 text-white flex p-1 sm:px-8
	z-index: 1000
	> div
		@apply flex
	a
		@apply p-2 text-white hover:text-white

	.btn:not(.button)
		background: unset !important
		box-shadow: unset !important
		border: 0px !important
		@apply text-xs
		&:hover
			background: #ffffff33 !important
	.btn-group
		.dropdown-menu.show
			width: 250px
			@apply mt-2
	.body-dropdown
		@apply p-2 mt-2
		p
			@apply text-sm text-gray-500
			font-weight: 500
		.workspace
			max-height: calc(100vh - 300px)
			overflow: auto
			a
				@apply flex items-center space-x-2 hover:text-black hover:bg-gray-100 transition
				color: black !important
		.recent a
			@apply text-sm text-gray-500

		.templates
			.item
				max-height: calc(100vh - 300px)
				overflow: auto
				> div
					@apply flex items-center cursor-pointer space-x-2 text-black hover:bg-gray-100 px-1 text-sm
					img
						width: 40px
						height: 40px

	.left
		@apply flex-1

	.right
		@apply justify-end flex-1 flex space-x-2

	input
		color: black
		@apply rounded-lg
		max-width: 200px

	.b-avatar
		z-index: 1
</style>