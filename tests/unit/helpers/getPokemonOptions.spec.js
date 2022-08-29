
// La importación del export por defecto va fuera de las llaves
import getPokemonOptions from "@/helpers/getPokemonOptions";
import getpokemonOpstions, { getPokemonNames, getPokemons } from "@/helpers/getPokemonOptions";

describe('getPokemonOptions helpers', () => {

    test('debe de regresar un arreglo de números', () => {

        const pokemons = getPokemons()

        expect( pokemons.length ).toBe(650)

        // Estamos comprobando que el id del pokemon en la posición indicada es un número
        // y se corresponde con el valor que le indicamos en el toBe()

        expect( pokemons[0] ).toBe(1)
        expect( pokemons[500] ).toBe(501)
        expect( pokemons[649] ).toBe(650)

    })


    test('debe de retornar un array de 4 elementos con nombre de pokemons', async() => {

        const pokemons = await getPokemonNames([1,2,3,4])

        expect(pokemons).toStrictEqual(
            [
                { name:'bulbasaur', id:1 },
                { name:'ivysaur', id:2 },
                { name:'venusaur', id:3 },
                { name:'charmander', id:4 },
            ]
        )


    })

    test('debe de retornar un array mezclado', async() => {

        const pokemons = await getPokemonOptions()

        expect( pokemons.length ).toBe(4)

        expect(pokemons).toStrictEqual(
            [
                { 
                    name: expect.any(String), // Esperamos una cadena
                    id: expect.any(Number),   // Esperamos un número
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number), 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number), 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number), 
                },
            ]
        )

        
    })

})