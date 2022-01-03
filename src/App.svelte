<script>
    import Router from "svelte-spa-router";
	import Random from "./routes/RandomD.svelte";
	import About from "./routes/About.svelte";
	import Nav from "./components/nav.svelte"
	import Home from "./routes/Home.svelte";
	import SearchD from "./routes/SearchD.svelte";
	let page;


	let routes = {

		"/": Home,
		"/About": About,
		"/RandomD": Random,
		
		"/SearchD": SearchD
		// "*": NotFound 

	}
</script>

<main>
		
	<Nav/>
	<nav>

		
	</nav>
	<a href="/#/"><h1>Laughter Limited</h1></a>
	<Router {routes}/>

</main>
<style>

	main{

		margin: 0;
		padding: 0;
		
		background-color: rgba(7, 15, 24);
		height: 100%;
		width: 100%;
		font-family: sans-serif;
	}
	nav{
		height: 10px;
		background-color: rgb(109, 212, 253);
	}
	h1{
        color : rgb(109, 212, 253);
        padding-bottom: 30px;
		text-align: center;
    }

	
</style>

