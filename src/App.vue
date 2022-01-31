<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from './components/Navbar.vue'
</script>

<template>
	<div>
		<navbar/>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap')
body
	font-family: 'Open Sans', sans-serif
.container
	@apply px-0 sm:px-24 mt-16
	max-width: 100%
.primary-text
	@apply text-primary-300
button
	background-color: auto

.b-avatar
	z-index: -1

a
	@apply text-black
	text-decoration: none
p
	@apply mb-0

.hidden-on-mobile
	display: none !important
	&.sm-flex
		@apply sm:flex #{!important}
	&.sm-block
		@apply sm:block #{!important}
</style>
