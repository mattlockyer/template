<script>
	//components
	import Header from './../components/Header.svelte'
	import Menu from './../components/Menu.svelte'
	//routes
	import Router, { link } from 'svelte-spa-router'
	import Home from './Home.svelte'
	import Link from './Link.svelte'

	const routes = {
		'/': Home,
		'/link': Link,
	}
</script>

<div>
	<Header />
	<Menu />
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