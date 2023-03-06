<script lang="ts">
	import LinkMgidSheet from '../components/LinkMgidSheet.svelte';
	import type { MgidReport } from '../types';
	export let onlidelete
	export let data: null | MgidReport[];
	export let title: string | null = null;

	async function deleteCampaign() {
		// const res = await fetch(url);
		// if (res.status === 200) {
		// 	const data = await res.json();
		// 	switch (type) {
		// 		case 'spotify':
		// 			data_spotify = data;
		// 			break;
		// 		case 'mgid':
		// 			data_mgid = data;
		// 			break;
		// 		default:
		// 			break;
		// 	}
		// } else {
		// 	console.log('Error:', res);
		// 	// data_spotify = 'error';
		// 	// data_mgid = 'error';
		// }
	}
</script>

<section>
	<h3>{title}</h3>
	{#if data}
		<ul class="list">
			{#each data as item}
				<li class="listItem">
					<p>Campaign ID: {item.campaignId}</p>
					{#if item?.sheets_id}
						<p>Sheets ID: {item.sheets_id}</p>
						<!-- <li>{item.sheets_id.substring(0, 8)}{'...'}</li> -->
					{:else}
						<LinkMgidSheet campaignId={item.campaignId} sheets_id={item?.sheets_id} />
					{/if}
					<button on:click={async () => await deleteCampaign()} class="refresh_button"
						>Borrar campaña</button
					>
				</li>
			{/each}
		</ul>
	{:else}
		<p>Cargando...</p>
	{/if}
</section>

<style>
	.list {
		list-style: none;
	}

	.listItem {
		background-color: antiquewhite;
		padding-left: 3px;
		border-bottom: 5rem;
		border-radius: 1rem;
	}
</style>
