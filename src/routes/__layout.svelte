<script>
	import Nav from "$lib/Nav.svelte";
	import { variables } from "$lib/variables";
	// import Notification from "$lib/notifications/notification.svelte";
</script>

<div class="site">
	<Nav />
	<!-- <Notification /> -->
	<div class="site-content">
		<slot />
	</div>
	<footer class="text-center">
		<p>
			<a href="/"><strong>&copy {variables.appName}</strong></a><br />
			The source code is licensed
			<a href="http://opensource.org/licenses/mit-license.php">MIT</a>
			<br />
		</p>
		<p><a href="/privacy">Privacy</a></p>
	</footer>
</div>

<style>
	footer {
		margin: 40px;
		overflow: hidden;
	}
</style>
