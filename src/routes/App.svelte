<script>
	//components
	import regexparam from 'regexparam'
	import { onMount } from 'svelte'
	import Header from './../components/Header.svelte'
	import Menu from './../components/Menu.svelte'

	//routing
	let Chunk, route, params, location = window.location.href
	window.addEventListener('hashchange', ({ newURL }) => {
		location = newURL
		resolveRoute()
	}, false)

	const routes = [
		{ path: '/', name: 'Home', promise: import('./../routes/Home.svelte') },
		{ path: '/link', name: 'Link', promise: import('./../routes/Link.svelte') },
		{ path: '/link/:id', name: 'Link', promise: import('./../routes/Link.svelte') },
	]

	const resolveRoute = () => {
		location = location.split('#')[1]
		route = routes.find((r) => {
			const rep = regexparam(r.path)
			if (rep.pattern.test(location)) {
				const matches = rep.pattern.exec(location)
				params = {}
				rep.keys.forEach((k, i) => params[k] = matches[i+1])
				return true
			}
		})
		if (route) route.promise.then((res) => Chunk = res.default)
		else routes[0].promise.then((res) => Chunk = res.default)
	}
	resolveRoute()
</script>

<div>
	<Header name={route.name || location} />
	<Menu {routes} />
	<main>
		<svelte:component this={Chunk} {params} />	
	</main>
</div>

<style global lang="scss">
	main {
		margin: $margin;
		margin-top: 80px;
	}
</style>