import { getPokemonDetails } from "../Api";
import { SET_POKEMONS } from "./Types";

export const setPokemons=(payload)=>({
    type:SET_POKEMONS,
    payload,

});

//export const setLoading=(payload)=>({
  //  type:SET_LOADING,
    //payload
//})=>;

export const getPokemonsWhitDetails=
    (pokemons=[])=>
    async (dispatch)=>{
        const pokemonDetailed = await Promise.all(
        pokemons.map((pokemon)=>getPokemonDetails(pokemon))
         );
    dispatch(setPokemons(pokemonDetailed));
};