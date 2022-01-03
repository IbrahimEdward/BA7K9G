<script>
    
    import {Search} from "../stores/stores";
    
   
    let SearchBar ="";
 
   

function getSearch() {

Search.update(value =>  {

    return SearchBar

})
}

</script>


<main>
    <input type="text" bind:value={SearchBar}/>
    <nav>
    <button on:click={getSearch(SearchBar)}>
        {#if SearchBar.length > 2}
        <p><a href="/#/SearchD">Search</a></p>
        {:else}
         <p>Search</p>
        {/if}
    </button>
    </nav>

   
</main>
<style>


    a{

        display: block;
        color :rgba(7, 15, 24, 0.925); 
        text-align: center;
        text-decoration: none;
        
        

        
    }
    a:hover{
    
  
    color: rgb(109, 212, 253);
    text-align: center;
   
    
		
    }

    button{
        background-color:rgb(109, 212, 253) ;
		color:rgba(7, 15, 24, 0.925);
        justify-content: center;
        text-align: center;
        width: 200px;
        height: 60px;
    }
    button:hover {
        
    background-color:rgba(7, 15, 24, 0.925) ;

    color: rgb(109, 212, 253);
}


</style>