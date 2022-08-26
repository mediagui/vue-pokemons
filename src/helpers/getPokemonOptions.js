
import pokemonApi from "@/api/pokemonApi";

/*
Obtiene un array con todos los pokemon
*/
const getPokemons = () => {

    const pokemonsArr = Array.from( Array(650) ) // Crea un array basado en el que se le pasa como parámetro


    return pokemonsArr.map( ( _ , index) => index + 1 ) // El primer parámetro no me interesa, por lo que le ponemos, por ejemplo, un "_"

}

const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons()
                            .sort( () => Math.random() - 0.5 ) // Con esto rezclamos el array de pokemons

    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) ) 

    return pokemons

}


/**
 * Obtiene los nombres de los pokemons a partir del array desdestructurado que recibe
 * @param {[a,b,c,d]} Array de pokemons desesctruturado 
 */
const getPokemonNames = async( [a,b,c,d] = [] ) => {

    // const resp = await pokemonApi.get(`/1`)

    // console.log(resp.data.name);
    // console.log(a,b,c,d);

    // Definimos las peticiones
    const promiseArr = [
        pokemonApi.get( `/${a}`),
        pokemonApi.get( `/${b}`), 
        pokemonApi.get( `/${c}`),
        pokemonApi.get( `/${d}`),
    ]
    
    // Enviamos las peticiones
    const [p1,p2,p3,p4] = await Promise.all( promiseArr )

    return[
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]

}



export default getPokemonOptions;