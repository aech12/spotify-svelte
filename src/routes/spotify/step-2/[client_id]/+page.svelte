<script>
import { env } from '$env/dynamic/public';
export function load({ params }) {
    console.log(params.client_id)
    return {
        props: {
          client_id: params.client_id
        }
    };
}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>Spotify</h1>
    <div>{props.client_id}</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* flex: 0.6; */
        flex-wrap: wrap;
        background: "gray";
        overflow-wrap: break-word; 
        text-align: "center";
        word-wrap: break-word;
	}

	h1 {
		width: 100%;
	}
</style>
