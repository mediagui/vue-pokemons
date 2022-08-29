
import pokemonApi from "@/api/pokemonApi";

/**
 * Devuelve un array de pokemons
 * @returns Array de objetos pokemon
 */
export const getPokemons = () => {

    const pokemonsArr = Array.from(Array(650)) // Crea un array basado en el que se le pasa como parámetro

    return pokemonsArr.map((_, index) => index + 1) // El primer parámetro no me interesa, por lo que le ponemos, por ejemplo, un "_"

}


/**
 * Función asíncrona que devuelve un array con el nombre de 4 pokemons
 * @returns Array de cadenas
 */
const getPokemonOptions = async () => {

    // Desordena el array de pokemons obtenidos
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

    return pokemons

}


/**
 * Función asíncrona que obtiene los nombres de los pokemons a partir del array que recibe
 * @param {[a,b,c,d]} Array de pokemons 
 */
 export const getPokemonNames = async ([a, b, c, d] = []) => {

    // const resp = await pokemonApi.get(`/1`)

    // console.log(resp.data.name);
    // console.log(a,b,c,d);

    // Definimos las peticiones poniendo un pokemon en cada una de ellas
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    // Enviamos las peticiones del array
    const [p1, p2, p3, p4] = await Promise.all(promiseArr)

    // Obtenemos la respuesta y haciendo uso de la desestructuración tomamos nombre e id del pokemon
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ]

}



export default getPokemonOptions;