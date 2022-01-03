
<script>
import Router from "svelte-spa-router";
import Nav from "../components/nav.svelte";
import Search from "../components/SearchIn.svelte"
import RandomC from "../components/RandomC.svelte";

    
</script>


<main>

   

	

  


       <nav>
        

        <h1>
            Home
        </h1>

        <h3>
            Get a New Joke for The Day
        </h3>


        
        <Search/>
        <RandomC/>

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