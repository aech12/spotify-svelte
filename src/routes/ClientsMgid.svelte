<script lang="ts">
	import LinkMgidSheet from '../components/LinkMgidSheet.svelte';
	import type { MgidReport } from '../types';
	export let data: null | MgidReport[];
	export let title: string | null = null;
</script>

<section>
	<h3>{title}</h3>
	{#if data}
		<ul class="list">
			{#each data as item}
				<li>{item.campaignId}</li>
				{#if item?.sheets_id}
					<li>{item.sheets_id}</li>
					<!-- <li>{item.sheets_id.substring(0, 8)}{'...'}</li> -->
				{:else}
					<LinkMgidSheet campaignId={item.campaignId} sheets_id={item?.sheets_id} />
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
