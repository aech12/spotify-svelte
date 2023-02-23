<script lang="ts">
	import ClientsMgid from './ClientsMgid.svelte';
	import ClientsSpotify from './ClientsSpotify.svelte';
	import { env } from '$env/dynamic/public';
	import type { SpotifyReport, MgidReport } from '../types';

	const server_url = env.PUBLIC_SERVER_URL;
	const spotifyUrl_getUsers = `${server_url}/spotify/get_reports`;
	const mgidUrl_getUsers = `${server_url}/mgid/get_reports`;
	let data_spotify: null | SpotifyReport[];
	let data_mgid: null | MgidReport[];

	async function getCampaigns(url: string, type: string) {
		const res = await fetch(url);
		if (res.status === 200) {
			const data = await res.json();
			switch (type) {
				case 'spotify':
					data_spotify = data;
					break;
				case 'mgid':
					data_mgid = data;
					break;
				default:
					break;
			}
		}
	}

	async function fetchData() {
		// getCampaigns(spotifyUrl_getUsers, 'spotify');
		getCampaigns(mgidUrl_getUsers, 'mgid');
	}

	fetchData();
</script>

<section>
	<button on:click={fetchData} class="refresh_button">Refrescar data</button>
	<ClientsSpotify data={data_spotify} title="Clientes Spotify" />
	<ClientsMgid data={data_mgid} title="Clientes Mgid" />
</section>

<style>
	.refresh_button {
		margin-top: 2rem;
	}
</style>
