<template>
	<div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Let's build a Board</h5>
	        <button type="button" @click="close" class="btn-close" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
	      	<p>Boost your productivity by making it easier for everyone to access boards in one location.</p>
	        <b-form-input class="mt-2" v-model="title" placeholder="Board title"></b-form-input>
	        <select v-model="theme" class="mt-2 w-full">
	        	<option value="">Please select an theme</option>
			      <option v-for="data, key in list" :key="key" :value="data">{{data}}</option>
	        </select>
	        <select v-model="visibility" class="mt-2 w-full">
	        	<option value="">Please select an visibility</option>
			      <option v-for="data, key in ['private', 'workspace', 'public']" :key="key" :value="data">{{data}}</option>
	        </select>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn button btn-secondary" @click="close">Close</button>
	        <button type="button" class="btn button btn-primary" @click="submit">Save changes</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script>
export default{
	props: {
		open: {
			type: Boolean
		},
		close: {
			type: Function
		}
	},
	data(){
		return{
			title: '',
			theme: '',
			visibility: '',
			list: [
				'blue', 'green', 'orange'
			]
		}
	},
	methods: {
		submit(){
			const {title, theme, visibility} = this
			this.$store.commit('addboard', {
				title, theme, visibility, id: crypto.randomUUID()
			})
		}
	},
	mounted(){
		this.modal = new bootstrap.Modal(this.$refs.modal, {
		  keyboard: false
		})
	},
	watch: {
		open(newValue, old){
			if(this.modal){
				if(newValue){
					this.modal.show()
				}else{
					this.modal.hide()
				}
			}
		}
	},
}
</script>