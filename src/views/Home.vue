<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1
      :style="colorContador"
    >{{titulo}} {{contador}}
    </h1>    
    <button @click="accionIncrementar">Incrementar</button>
    <BtnDisminuir/>
    <hr>
    <btnAccionVue :estado="true"/>
    <btnAccionVue :estado="false"/>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
import btnAccionVue from '../components/btnAccion.vue'
import BtnDisminuir from '../components/BtnDisminuir.vue'


export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    btnAccionVue
  },
  data() {
    return {
      titulo: "mi contador:"
    }
  },
  methods: {
    // ...mapMutations(["incrementar"]),
    ...mapActions(["accionIncrementar"])
  },
  computed:{
    ...mapState(["contador"]),
    colorContador(){
      return [this.contador > 100 ? {'color':'green'} : {'color':'red'} ]  
    }
  }
}
</script>
