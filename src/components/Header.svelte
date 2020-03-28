<script>
	const name = 'world'
</script>

<header>
    <i class="fas fa-bars"></i>
	<h1>Header</h1>
</header>

<style lang="scss">
	header {
		position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 64px;
        background: white;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        align-content: space-between;
        i {
            color: black;
            flex: 0 0 64px;
            width: 64px;
            height: 64px;
            line-height: 64px;
            text-align: center;
            margin: auto;
        }
        h1 {
            margin: 0;
            flex: 1;
            font-size: 1.2rem;
        }
	}
</style>