<script>
    import { isMenuOpen, toggleMenu } from './../stores/app.js'
	export let name = 'Header'
	export let icon = 'fa-bars'
</script>

<header>
    <i class="fas {icon}" on:click={toggleMenu}></i>
	<h1>{name}</h1>
</header>

<style lang="scss">
	header {
		@include fixed;
        width: 100%;
        height: 64px;
        background: white;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        align-content: space-between;
        i {
            @include font-button;
        }
        h1 {
            margin: 0;
            flex: 1;
            font-size: 1.2rem;
        }
	}
</style>