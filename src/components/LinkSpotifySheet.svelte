<script lang="ts">
	import { env } from '$env/dynamic/public';
	import axios from 'axios';
	export let sheets_id: string | null = null;
	export let campaign_id: string;
	
	let result = ""

	// form variables
	const linkToSheet_url = `${env.PUBLIC_SERVER_URL}/spotify/link_sheet`;
	let sheets_id_input = '';

	async function handleSubmit() {
		axios
			.post(linkToSheet_url, {
				campaign_id,
				sheets_id: sheets_id_input
			})
			.then(function (response) {
				console.log(response);
				sheets_id = response.data.sheets_id;
				result = "cargado correctamente"
			})
			.catch(function (error) {
				result = "error"
				console.log(error);
			});
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<p>{result}</p>
	<input
		type="text"
		name="sheets_id_input"
		bind:value={sheets_id_input}
		placeholder="google sheets id"
	/>
	<input type="submit" value="LINK" />
</form>
