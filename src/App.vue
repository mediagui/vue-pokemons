<template>

<!-- Componente de la página donde se monta la aplicación -->
  <PokemonPage />

</template>

<script>


// Si el export es default (sin nombre), no se ponen las llaves para hacer la importación
import PokemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App', // Id del contenedor de la aplicación
  components: {
    PokemonPage, 
  }
}
</script>

<style>
/* Estilos para la aplicación */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
