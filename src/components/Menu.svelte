<script>
    import { isMenuOpen, toggleMenu } from './../stores/app.js';
	import Header from './../components/Header.svelte'
    
	let open
	isMenuOpen.subscribe((value) => open = value)
</script>

<div class="menu" class:open>
    <div></div>
    <menu>
        <Header name="Menu" icon="fa-times" />
        <h1>Hello</h1>
        <p>Testing</p>
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
        padding: $margin;
        padding-top: 80px;
        transform: translateX(-100vw);
        width: 60vw;
        height: 100vh;
        background: white;
        border-right: 1px solid #eee;
        i {
            @include font-button;
            @include fixed;
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