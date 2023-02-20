//import { useEffect, useState } from 'react';
//import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWhitDetails, setPokemons } from './Actions/Index';
import Searcher from './Componentes/Searcher';
import PokemonList from './Componentes/PokemonList';
import { getPokemon,getPokemonDetails } from './Api';
import logo from './Statics/logo.svg';
import './App.css'
import { Col,Spin } from 'antd';



//function App({pokemons,setPokemons})
function App() {
  //const [pokemons,setPokemons]=useState([]);
const pokemons=useSelector(state=>state.pokemons);
const dispatch=useDispatch();

console.log( pokemons)
useEffect(()=>{
  const fetchPokemons=async()=>{
  const pokemonsRes=await getPokemon();

          dispatch(getPokemonsWhitDetails(pokemonsRes));
         // dispatch(setPokemons(pokemonsRes));
  };
  fetchPokemons();

},[]);

  return (
    <div className="buscador">
      <Col span={4} offset={10} >
        <img  src={logo} alt='Pokedux'/>
      </Col>
      <Searcher/>
      <Spin spinning size='large'/>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}
//const mapStateToProps=(state)=>({
//  pokemons: state.pokemons,
//});
//const mapDispatchToProps=(dispatch)=>({
//  setPokemons:(value)=> dispatch(setPokemonsActions(value)),
//});
//export default connect(mapStateToProps,mapDispatchToProps) (App);
export default App;
