<template>
	<div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Let's build a Workspace</h5>
	        <button type="button" @click="close" class="btn-close" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
	      	<p>Boost your productivity by making it easier for everyone to access boards in one location.</p>
	        <b-form-input class="mt-2" v-model="name" placeholder="Workspace name"></b-form-input>
	        <select v-model="type" class="mt-2 w-full">
	        	<option value="">Please select an type</option>
			      <option v-for="data, key in list" :key="key" :value="data">{{data}}</option>
	        </select>
	        <textarea class="mt-2 w-full" v-model="description" placeholder="Workspace description Optional"></textarea>
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
	methods: {
		submit(){
			const {name, type, description} = this
			this.$store.commit('addworkspace', {
				name, type, description, id: crypto.randomUUID()
			})
		}
	},
	data(){
		return{
			name: '',
			type: '',
			description: '',
			list: [
				'Human Resources', 'Engineering IT', 'Operations', 'Education'
			]
		}
	},
	mounted(){
		this.modal = new bootstrap.Modal(this.$refs.modal, {
		  keyboard: false
		})
	},
}
</script>