import { text } from 'svelte/internal';
import { writable } from 'svelte/store'

// export const Joke = writable ({
//     "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//     "id" : "NQXb8Y1YTD-GvG1YScZdAA",
//     "url" : "",
//     "value" : "Don't ever make the mistake of staring at Chuck Norris or you will find yourself picking up your teeth with two broken arms and counting them with two black eyes."
//     })
export const Search = writable();
export const CatName = writable([]);
export let CatNumber = writable (0);
