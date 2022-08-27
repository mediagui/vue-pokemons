<template>
  <div class="pokemon-container">
    <!-- Si no hay que mostrar el pokemon, mostramos su sombra -->
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      class="hidden-pokemon"
      alt="pokemon"
    />

    <!-- En caso contrario, mostramos el pokemon -->
    <img v-else :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    // Id del pokemon del que hay que obtener la imagen
    pokemonId: {
      type: Number,
      required: true,
    },
    // Usada para indicar si hay que mostrar el pokemon
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    // Usamos una funcion computada para obtener la imagen y la sombra del pokemon a adivinar
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
  margin: 0 auto;
}

img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
