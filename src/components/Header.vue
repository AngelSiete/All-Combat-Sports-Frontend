<template >
<section id="header" class="is-red">
  <div>
    <header class="header " >
     <div class="content has-text centered  "  >
           <router-link to="/">
           <strong class="has-text-black is-size-2">
           ALL COMBAT SPORTS
          </strong>
          </router-link>
      <div class="field is-grouped my-4">
      <div class="control  is-expanded  mx-2 my-4 ">
          
           
    <div class="field has-addons ml-4">
  <div class="control">
    <input class="input is rounded" type="text" placeholder="Buscar un luchador" v-model="buscadorLuchador">
  </div>
  <div class="control">
     <a :href="buscadorLuchador != '' ? '/luchador/' + buscadorLuchador : '#'" class="button is-black">
              Buscar
            </a>
  </div>
</div>
    <!--      -->
    
     <!--  -->
    </div>
    <div class="control level-right  mr-4">
            <button class="button has-text-white is-focused is-black mx-1">
              <router-link to="/luchadores">
              Lista de Luchadores
              </router-link>
              </button> 
            
      <div class="button navbar-item has-dropdown is-hoverable is-black mx-1">
        <router-link to="/luchas">
        <a class="navbar-link has-text-primary-light	">
          Luchas (todas las modalidades)
        </a>
        </router-link> 
        <div class="navbar-dropdown">
          <router-link to="/luchasBox">
          <a class="navbar-item">
            Boxeo
          </a>
           </router-link>
          <hr class="navbar-divider">
          <router-link to="/luchasMMA">
          <a class="navbar-item">
            MMA
          </a>
          </router-link>
        </div>
      </div>
            <button class="button is-focused is-black mx-1">Inicia Sesión</button> 
    
    </div>
    
   </div>
     </div>
    
  </header>

   
  </div>
  </section>
</template>
<script>
export default {
  name: "App",
  data(){
    return {
     buscadorLuchador: ''
    }
  },
}
</script>

<style>
.is-red{
  background-color: #E81F00;
}
</style>
