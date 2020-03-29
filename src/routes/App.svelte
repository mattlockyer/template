<script>
	//components
	import { onMount } from 'svelte';
	import Header from './../components/Header.svelte'
	import Menu from './../components/Menu.svelte'
	//routes
	import Router, { link, location } from 'svelte-spa-router'
	import Home from './Home.svelte'
	import Link from './Link.svelte'

	const routes = {
		'/': Home,
		'/link': Link,
		'/link/:id': Link,
	}
	
	location.subscribe((v) => {
		console.log(v)
	})
</script>

<div>
	<Header name={routes[$location] && routes[$location].name || $location} />
	<Menu {routes} />
	<main>
		<Router {routes}/>
	</main>
</div>

<style global lang="scss">
	main {
		margin: $margin;
		margin-top: 80px;
	}
</style>