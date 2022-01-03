<script>
	import Router from "svelte-spa-router";
	import { onMount } from "svelte";

	let joke={}
	

		onMount(async () => {
		const response = await fetch('https://api.chucknorris.io/jokes/random')
		joke = await response.json()
			
		})  
		Router 



</script>


<main>

	


<nav>


	<h1>Refresh fo another one !!</h1>
	
	{#if joke.value}

	<h2>{joke.value}</h2>
	<img src="{joke.icon_url}" alt="{joke.id}">

	{:else}
	<h3>Loading ... </h3>

	{/if}
	
	
</nav>


</main>
<style>
     main{
        height: 100%;
        padding-top: 0px;
        padding-left: 0px;
    }

    nav{
        padding-top: 20px;
        padding-left: 50px;
    }

    h1{
        color : white;
        padding-bottom: 40px;
    }
</style>
	
	
	