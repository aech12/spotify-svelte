<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';
	const code = $page.url.searchParams.get('code');
	const code_query = encodeURIComponent(code || '');

	let connected = 'Cargando';
	let error: string | null;

	async function authGoogle() {
		if (code) {
			const response = await fetch(`${env.PUBLIC_SERVER_URL}/auth/google/callback?code=${code}`);
			const data = await response?.json();

			if (response.status === 200) {
				connected = 'Conectado';
				// window.location.href = '/';
			} else {
				connected = 'Error';
				error = data?.message;
			}
		}
	}
	authGoogle();

	async function test() {
		const response = await fetch(`${env.PUBLIC_SERVER_URL}/auth/google/get_drive`);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Conectar Google</h1>
	<button on:click={authGoogle}>Reintentar conexion a Google</button>
	<button on:click={test}>test</button>
	<p>{connected}</p>
	{#if error}
		<p>
			{error}
		</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
