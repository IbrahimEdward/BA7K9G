<script>
    import {Search} from "../stores/stores";
    import { onMount } from 'svelte'
    import SearchIn from "../components/SearchIn.svelte";


    

    let searchbar;
    let searchedJokes = [];
    let searchedJoke = [];
    let ss;
    let link

        Search.subscribe(value => {
            searchbar = value

        
    })


        onMount(async () => {
		const response = await fetch("https://api.chucknorris.io/jokes/search?query="+searchbar)
		searchedJokes = await response.json()
        searchedJoke = searchedJokes.result 

		})
        console.log(searchedJokes)



</script>
<main>


    <nav>
    
    {#if searchedJokes.total}
   
    
    <h2>{searchedJokes.total} "{searchbar}" Chuck Norris Jokes!</h2>
    
    {#each searchedJoke as searchedJok , i}
    <ul>
    <h3><li>{searchedJok.value}</li></h3>
    </ul>   
    {/each}

    {:else}
    <h1>loading</h1>
    {/if}


    </nav>
        

        

</main>
<style>
    main{
        background-color: rgba(7, 15, 24);
        padding-top: 10px;
        padding-left: 50px;
        padding-right: 25px;

        height: fit-content
    }

    nav{
        padding: 15px;
        height: fit-content;
    }
</style>