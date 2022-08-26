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
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4); //Seleccionamos un número entre 0 y 3

      this.pokemon = this.pokemonArr[rndInt]; // Seleccionamos el pokemon basado. Este es el pokemon que habrá que adivinar
    },
    checkAnswer( selectedId ){

      this.showPokemon=true
      this.showAnswer=true

      if(selectedId === this.pokemon.id){

        this.message=`Correcto, ${ this.pokemon.name }`

      } else {

        this.message=`Ooops, era ${ this.pokemon.name }`
      }
 
    },
    newGame(){

      this.showPokemon=false
      this.showAnswer=false
      this.pokemonArr=[]
      this.pokemon = null
      this.mixPokemonsArray()

    }
  },
  mounted() {
    this.mixPokemonsArray();
  },
};
</script>
