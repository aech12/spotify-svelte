<script lang="ts">
	import ClientsMgid from './ClientsMgid.svelte';
	import ClientsSpotify from './ClientsSpotify.svelte';
	import { env } from '$env/dynamic/public';
	import type { SpotifyReport, MgidReport } from '../types';

	const server_url = env.PUBLIC_SERVER_URL;
	const spotifyUrl_getUsers = `${server_url}/spotify/get_reports`;
	const mgidUrl_getUsers = `${server_url}/mgid/get_campaigns`;
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
		} else {
			console.log('Error:', res);
			// data_spotify = 'error';
			// data_mgid = 'error';
		}
	}

	async function fetchData() {
		getCampaigns(spotifyUrl_getUsers, 'spotify');
		getCampaigns(mgidUrl_getUsers, 'mgid');
	}

	fetchData();

	function handleLiDelete(index: string | number, type: 'mgid' | 'spotify') {
		if (type === 'spotify' && data_spotify)
			data_spotify = data_spotify.filter((item) => item.id !== index);
		if (type === 'mgid' && data_mgid)
			data_mgid = data_mgid.filter((item) => item.campaignId !== index);
	}
</script>

<section>
	<button on:click={fetchData} class="refresh_button">Refrescar data</button>
	<ClientsSpotify data={data_spotify} title="Clientes Spotify" onlidelete={handleLiDelete} />
	<ClientsMgid data={data_mgid} title="Clientes Mgid" onlidelete={handleLiDelete} />
</section>

<style>
	.refresh_button {
		margin-top: 2rem;
	}
</style>
