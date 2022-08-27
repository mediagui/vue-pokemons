<template>
<!-- Si no hay pokemon muestra el texto -->
  <h1 v-if="!pokemon">Espere por favor...</h1>

<!-- Si hay pokemon lo muestra -->
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>

    <PokemonPicture 
      :pokemon-id="pokemon.id" 
      :show-pokemon="showPokemon" />

    <PokemonOptions 
      :pokemons="pokemonArr" 
      @selection-pokemon="checkAnswer" />


    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">
        Nuevo Juego
      </button>
    </template>

  </div>

</template>

<script>
// Si el export es default (sin nombre), no se ponen las llaves para hacer la importación
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {

  components: { PokemonPicture, PokemonOptions },

  data() {
    // Función en la que se devuelven propiedades reactivas (monitorizadas por Vue)
    return {
      pokemonArr: [], // array de pokemons de entre los que hay que adivinar el pokemon
      pokemon: null, // pokemon a adivinar
      showPokemon: false, // muestra el pokemon cuando es true, mientras muestra la sombra
      showAnswer: false, // muestra la respuesta cuando adivinamos seleccionamos una opción
      message: '', // mensaje a mostrar tanto si adivinamos el pokemon como si no lo hacemos
    };
  },

  methods: {
    /**
     * Asigna el pokemon que hay que adivinar a la propiedad this.pokemon
     */
    async mixPokemonsArray() {

      // optenemos el array de pokemons
      this.pokemonArr = await getPokemonOptions();

      // calculamos un número aleatorio entre 0 y 3
      const rndInt = Math.floor(Math.random() * 4); 

      // Seleccionamos el pokemon a adivinar haciendo uso del valor anterior (rndInt)
      this.pokemon = this.pokemonArr[rndInt]; 
    },

    /**
     * Comprueba la respuesta en función del id del pokemon seleccionado
     * @param {selectedId} Id del pokemon
     */
    checkAnswer( selectedId ){

      // Mostramos el pokemon y la respuesta tanto si hemos acertado como si no.
      this.showPokemon=true
      this.showAnswer=true

      
      if(selectedId === this.pokemon.id){

        // Si hemos acertado

        this.message=`Correcto, ${ this.pokemon.name }`

      } else {

        // si no hemos hacertado

        this.message=`Ooops, era ${ this.pokemon.name }`
      }
 
    },
    /**
     * Reinicia el juego
     */
    newGame(){

      this.showPokemon=false
      this.showAnswer=false
      this.pokemonArr=[]
      this.pokemon = null
      this.mixPokemonsArray()

    }
  },
  mounted() {
    // Una vez se ha montado la aplicación, hacemos uso del hook y 
    // seleccionamos el pokemon a adivinar
    this.mixPokemonsArray();
  },
};
</script>
