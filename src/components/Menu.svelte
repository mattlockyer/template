<script>
    import { isMenuOpen, toggleMenu } from './../stores/app.js';
	import { link } from 'svelte-spa-router'
    import Header from './../components/Header.svelte'
    export let routes
    console.log(routes)
    let links = Object.keys(routes).map((k) => ({ path: k, name: routes[k].name }))
    links[2] = { path: '/link/42', name: 'Surprise' }
</script>

<div class="menu" class:open="{ $isMenuOpen }">
    <div on:click={toggleMenu}></div>
    <menu>
        <Header name="Menu" icon="fa-times" />
        {#each links as {path, name}}
            <a href={path} on:click={toggleMenu} use:link>{name}</a> 
        {/each}
    </menu>
</div>


<style lang="scss">
.menu {
    > div {
        transition: opacity 0.32s ease-out;
        @include fixed;
        background: black;
        width: 0;
        opacity: 0;
        height: 100vh;
    }
	menu {
        transition: 0.32s ease-out;
        @include fixed;
        margin: 0;
        padding: 0;
        padding-top: 64px;
        transform: translateX(-100vw);
        width: 60vw;
        height: 100vh;
        background: white;
        border-right: 1px solid $light;
        i {
            @include font-button;
            @include fixed;
        }
        a {
            padding: $margin;
            border-bottom: 1px solid $light;
            display: block;
            &:hover {
                background: $light;
            }
        }
    }
}
.menu.open {
    > div {
        width: 100vw;
        opacity: 0.5;
    }
    menu {
        transform: translateX(0);
    }
}
</style>