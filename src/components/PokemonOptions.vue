<template>
  <div class="options-container">
    <ul>
      <!-- 
        Recorremos el array de pokemons y pintamos su nombre.

        Al hacer click emitimos un evento personalizado (selection-pokemon) 
        y enviamos el id del pokemon seleccionado.
      -->
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection-pokemon', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // Array de pokemons. Propiedad en la que recibimos el array de los pokemons seleccionado al azar
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px 0;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>