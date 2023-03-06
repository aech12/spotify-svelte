<script lang="ts">
	import LinkSpotifySheet from '../components/LinkSpotifySheet.svelte';
	import type { SpotifyReport } from '../types';
	export let onlidelete;
	export let data: null | SpotifyReport[];
	export let title: string | null = null;
</script>

<section>
	<h3>{title}</h3>
	{#if data}
		<ul class="list">
			{#each data as item}
				<li class="listItem">
					<p>Nombre de campaña: {item.campaign_name}</p>
					{#if item?.sheets_id}
						<p>Sheets id: {item.sheets_id}</p>
						<!-- <li>{item.sheets_id.substring(0, 8)}{'...'}</li> -->
					{:else}
						<LinkSpotifySheet campaign_id={item?.campaign_id} sheets_id={item?.sheets_id} />
					{/if}
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
