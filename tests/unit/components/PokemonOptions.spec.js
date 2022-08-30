import { shallowMount } from "@vue/test-utils";
import  PokemonOptions from "@/components/PokemonOptions";


import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonOptions Componente', () => {

    let wrapper


    beforeEach( () => {

        wrapper = shallowMount(PokemonOptions, {
            props:{
                pokemons // Equivalente a  pokemons: pokemons
            }
        })        

    })

    test('debe hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })


    test('debe de mostrar las 4 opciones correctamente', () => {
    
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)

        expect(liTags[0].text()).toBe('pikachu')
        expect(liTags[1].text()).toBe('charmander')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('mew')
        
    })


    test('debe emitir "selection-pokemon" con sus respectivos parámetros al hacer click' , () => {
    
        // desestructuramos los elementos li en los que tenemos los pokemons
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        //click manual sobre los elementos
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect( wrapper.emitted('selection-pokemon').length ).toBe(4) // Por lo menos emitido 1 vez
        expect( wrapper.emitted('selection-pokemon')[0] ).toStrictEqual([5]) // Se emite el evento con un arreglo de un elemento con el valor 5
        expect( wrapper.emitted('selection-pokemon')[1] ).toStrictEqual([10]) // Se emite el evento con un arreglo de un elemento con el valor 10
        expect( wrapper.emitted('selection-pokemon')[2] ).toStrictEqual([15]) // Se emite el evento con un arreglo de un elemento con el valor 15
        expect( wrapper.emitted('selection-pokemon')[3] ).toStrictEqual([20]) // Se emite el evento con un arreglo de un elemento con el valor 20

    })

})

