<script lang="ts">
	import Clients from './Clients.svelte';
	import { env } from '$env/dynamic/public';

	// async function authGoogle() {
	// 	const response = await fetch(`${env.PUBLIC_SERVER_URL}/auth/google`);
	// 	if (response.status === 200) {
	// 		const data = await response.json();
	// 		// console.log("ref", data)
	// 		window.location.href = data.authUrl;
	// 	}
	// }

	let email: string|null = "";
	async function getAdminEmail() {
		const response = await fetch(`${env.PUBLIC_SERVER_URL}/admin/get_email`);
		const data = await response.json();
		// console.log("email", data)
		email = data.email;
	}
	getAdminEmail();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Conectar APIs</h1>
	<p>{email}</p>
	<!-- <p>Antes de conectar usuarios por Spotify/Mgid, con</p> -->
	<!-- <button on:click={authGoogle}>Conectar Google</button> -->
	<a href="/spotify"> Conectar spotify API</a>
	<Clients />
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
