<script lang="ts">
	import { env } from '$env/dynamic/public';

	const callback_url = env.PUBLIC_SPOTIFY_CALLBACK_URL || '';

	let client_id_value = 'ba863013e9a14b8bad5bec7a48cf3a7c';

	async function handleClick(client_id: string) {
		window.location.href = `https://accounts.spotify.com/authorize/?client_id=${client_id}&response_type=code&redirect_uri=${callback_url}`;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Spotify</h1>
	<div>
		<h1>Generar token para Spotify</h1>
		<a href="//developer.spotify.com/documentation/ads-api/quick-start/">
			https://developer.spotify.com/documentation/ads-api/quick-start/
		</a>
		<p>---</p>
		<p>PASO 1 - Generar "CLIENT_ID" y "SECRET" de la App en Spotify. Se puede encontrar en:</p>
		<a href="//developer.spotify.com/dashboard/applications">
			https://developer.spotify.com/dashboard/applications
		</a>
		<p>Guia para generarlos</p>
		<a href="//developer.spotify.com/documentation/General/guides/authorization/app-settings/">
			https://developer.spotify.com/documentation/ General/guides/authorization/app-settings/
		</a>
		<p>
			PASO 2 - Configurar la "redirect uri" de su app en https://developer.spotify.com/ con la
			siguiente url: {callback_url}
		</p>
		<p>PASO 3 - Aceptar Terminos</p>
		<p>PASO 4 - Completar la forma abajo</p>
		<p>---</p>
		<input name="client_id" bind:value={client_id_value} placeholder="CLIENT_ID" />
		<button on:click={() => handleClick(client_id_value)}>AUTORIZAR</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* flex: 0.6; */
		flex-wrap: wrap;
		background: 'gray';
		overflow-wrap: break-word;
		text-align: 'center';
		word-wrap: break-word;
	}

	h1 {
		width: 100%;
	}
</style>
