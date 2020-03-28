<script>
	import Router, { link } from 'svelte-spa-router'
	import Home from './Home.svelte'
	import Link from './Link.svelte'

	import Header from './../components/Header.svelte'

	const routes = {
		'/': Home,
		'/link': Link,
	}

	const name = 'world'
</script>

<div>
	<Header />
	<main>
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		<a href="/" use:link>Home</a> 
		<a href="/link" use:link>Link</a> 

		<Router {routes}/>
	</main>
</div>

<style global lang="scss">

	main {
		margin: $margin;
		margin-top: 80px;

		> h1 {
			margin: 0;
			color: #ff3e00;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
			&:hover {
				font-weight: bold;
			}
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>