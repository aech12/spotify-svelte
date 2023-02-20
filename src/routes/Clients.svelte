<script lang="ts">
	import ClientsRender from './ClientsRender.svelte';
	import { env } from '$env/dynamic/public';
	import type { SpotifyReport } from '../types';

	const server_url = env.PUBLIC_SERVER_URL;
	let data_spotify: null | SpotifyReport[];
	const spotifyUrl_getUsers = `${server_url}/spotify/get_reports`;
	// let data_mgid: null | Report[];
	// const mgidUrl_getUsers = '';

	async function getCampaigns(url: string, type: string) {
		const res = await fetch(url);
		if (res.status === 200) {
			const data = await res.json();
			// console.log(data)
			switch (type) {
				case 'spotify':
					data_spotify = data;
					break;
				default:
					break;
			}
		}
	}

	async function fetchData() {
		getCampaigns(spotifyUrl_getUsers, 'spotify');
		// data_spotify = getUsers(spotifyUrl_getUsers);
	}

	fetchData();
</script>

<section>
	<button on:click={fetchData} class="refresh_button">Refrescar data</button>
	<ClientsRender data={data_spotify} title="Clientes Spotify" />
	<!-- <ClientsRender data={data_mgid} title="Clientes Mgid" /> -->
</section>

<style>
	.refresh_button {
		margin-top: 2rem;
	}
</style>
