<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';
	import axios from 'axios';
	// import { FormData } from 'formdata-node';

	// form variables
	const getToken_url = `${env.PUBLIC_SERVER_URL}/spotify/get-token`;
	const code = $page.url.searchParams.get('code');
	let client_id = '';
	let client_secret = '';

	let error_msj: null | string = null;

	let userCreated: string | null = null;

	async function handleSubmit(e: any) {
		const formData = new FormData(e.target);
		const json = Object.fromEntries(formData.entries());

		axios
			.post(getToken_url, { ...json, code })
			.then(function (response) {
				console.log(response);
				if (response.data?.access_token) {
					userCreated = 'Usuario creado exitosamente. Va a ser redireccionado.';
					setTimeout(() => {
						window.location.href = '/';
					}, 1500);
				} else {
					error_msj = 'Error creando usuario/tokens';
				}
			})
			.catch(function (error) {
				console.log(error);
				userCreated = 'Error creando usuario';
				error_msj = error.message;
				setTimeout(() => {
					userCreated = null;
				}, 3000);
			});
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Spotify</h1>
	<p>---</p>
	<p>
		PASO 5 - Ingresar su "CLIENT_ID" y "CLIENT_SECRET" generados en el paso 1. Se pueden encontrar
		en el siguiente link:
	</p>
	<a href="//developer.spotify.com/dashboard/applications"
		>https://developer.spotify.com/dashboard/applications</a
	>
	<p>---</p>

	<div>
		<form on:submit|preventDefault={handleSubmit}>
			<!-- <form action={`${env.PUBLIC_SERVER_URL}/spotify/get-token`} method="POST"> -->
			<p>CLIENT_ID:</p>
			<input type="text" name="client_id" bind:value={client_id} />
			<p>CLIENT_SECRET:</p>
			<input type="password" name="client_secret" bind:value={client_secret} />
			<input type="submit" value="SIGUIENTE" />
		</form>
	</div>
	{#if error_msj}
		<p>{error_msj}</p>
		<p>Por favor, empezar desde paso 1</p>
	{/if}
	{#if userCreated}
		<p>
			{userCreated}
		</p>
	{/if}
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
