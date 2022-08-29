
import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";


describe('PokemonPicture component', () => {

    test('debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount( PokemonPicture , {
            // Enviamos estas propiedades porque al ejecutar el test solo con la sentencia shallowMount(...)
            // nos avisa en un warning de que faltan
            props: { 
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('debe de mostrar la imagen oculta y el pokemon 100', () => {

        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        // En teoría debería encontrar 2 imágenes, pero sólo devolverá 1 porque showPokemon está a false
        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBeUndefined()

        expect(img1.classes('hidden-pokemon')).toBeTruthy()

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

        

    })

    test('debe de mostrar el pokemon si showPokemon está en true', () => {

        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        // En teoría debería encontrar 2 imágenes, pero sólo devolverá 1 porque showPokemon está a false
        const img1 = wrapper.find('img')

        expect(img1.exists()).toBeTruthy()

        expect(img1.classes('hidden-pokemon')).toBeFalsy()
        expect(img1.classes('fade-in')).toBeTruthy()

    })


})