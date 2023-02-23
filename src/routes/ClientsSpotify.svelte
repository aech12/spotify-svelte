<script lang="ts">
	import LinkSpotifySheet from '../components/LinkSpotifySheet.svelte';
	import type { SpotifyReport } from '../types';
	export let data: null | SpotifyReport[];
	export let title: string | null = null;
</script>

<section>
	<h3>{title}</h3>
	{#if data}
		<ul class="list">
			{#each data as item}
				<li>{item.campaign_name}</li>
				{#if item?.sheets_id}
					<li>{item.sheets_id}</li>
					<!-- <li>{item.sheets_id.substring(0, 8)}{'...'}</li> -->
				{:else}
					<LinkSpotifySheet campaign_id={item?.campaign_id} sheets_id={item?.sheets_id} />
				{/if}
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
</style>
