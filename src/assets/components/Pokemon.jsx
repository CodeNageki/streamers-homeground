import React from "react";
import { useState, useEffect } from "react";
import "./pokemon.sass"

const Poke = () => {
    const randomNumber = Math.floor(Math.random() * 1200) + 1;
    let [pokemon, changePokemon] = useState(null);
    let [pokemonImg, changePokemonImg] = useState(null);
    let [pokemonType, changePokemonType] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            const jsonData = await response.json();
            changePokemon(jsonData.name)
            changePokemonImg(jsonData.sprites.front_default)
            changePokemonType(jsonData.types[0].type.name)
        } catch {
            console.log("Niezły error");
        }
    }


    return(
        <section className="poke-section" id="poke">
            <span>LETS CHECK WHAT YOUR DAILY POKEMON IS</span>
            <div className="pokemon-container">
                <h3>Your Pokemon for today is {pokemon}</h3>
                <h4>Main type of {pokemon} is {pokemonType}</h4>
                <img src={pokemonImg} alt="pokemon" />
            </div>
        </section>
    )
}

export default Poke;