<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';
	import axios from 'axios';
	// import { FormData } from 'formdata-node';

	// form variables
	const getToken_url = `${env.PUBLIC_SERVER_URL}/mgid/get-token`;
	let email = '';
	let password = '';

	let error: string | null = null;
	let submitting = false;
	// let userCreated: string | null = null;

	async function handleSubmit(e: any) {
		if (submitting) return;
		submitting = true;
		const formData = new FormData(e.target);
		const json = Object.fromEntries(formData.entries());

		// request for token
		try {
			const response = await axios.post(getToken_url, json);

			console.log('RES', response.data);
			window.location.href = '/';
		} catch (error) {
			console.error('There was a problem with the axios request:', error);
			// console.log('MSJ', error?.message);
			// error = error?.message || 'error';
		} finally {
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>MGID</h1>
	<div>
		<form on:submit|preventDefault={handleSubmit}>
			<p>EMAIL:</p>
			<input type="text" name="email" bind:value={email} />
			<p>PASSWORD:</p>
			<input type="password" name="password" bind:value={password} />
			<input type="submit" value="SIGUIENTE" />
		</form>
		{#if error}
			<p>
				{error}
			</p>
		{/if}
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
