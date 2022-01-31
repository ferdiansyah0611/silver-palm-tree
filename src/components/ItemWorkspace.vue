<template>
	<div>
		<a @click.prevent="handle" :href="'/workspace/' + data.id" class="flex items-center space-x-2">
			<span class="bg-pink-400 text-white" style="height: 30px;padding: 4px;">F</span>
			<span class="primary-text font-bold flex-1">{{data.name}}</span>
			<i :class="openworkspace ? 'mdi mdi-chevron-up': 'mdi mdi-chevron-down' "></i>
		</a>
		<div v-if="openworkspace" class="workspace-down">
			<a href="/">
				<i class="mdi mdi-bulletin-board"></i>
				<span>Boards</span>
			</a>
			<a href="/">
				<i class="mdi mdi-cards-heart-outline"></i>
				<span>Highlights</span>
			</a>
			<a href="/">
				<i class="mdi mdi-table"></i>
				<span>Workspace table</span>
			</a>
			<a href="/">
				<i class="mdi mdi-bulletin-board"></i>
				<span>Members</span>
			</a>
			<a href="/">
				<i class="mdi mdi-account-multiple-outline"></i>
				<span>Settings</span>
			</a>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
export default{
	props: {
		data: {
			type: Object
		},
		first: {
			type: Boolean
		}
	},
	data(){
		return{
			openworkspace: false
		}
	},
	mounted(){
			if(this.first){
				this.handle()
			}
	},
	methods: {
		handle(){
			this.openworkspace = !this.openworkspace
		}
	},
	computed: mapState({
		app: 'app'
	})
}
</script>