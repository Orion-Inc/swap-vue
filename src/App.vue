<template>
	<div id="app">
		<Navbar/>

		<div>Content for each page</div>

		<Footer/>
	</div>

</template>

<script>
	import Navbar from './components/html/navbar.vue';
	import Footer from './components/html/footer.vue';

	export default {
		name: 'App',
		components: {Navbar, Footer}
	}
</script>

<style>

</style>
