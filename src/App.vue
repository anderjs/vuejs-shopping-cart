<template>
  <div id="app">
    <b-container class="view">
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
          <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
          </ul>
          <pagination :currentPage="currentPage" :onClickPage="handleClickPage" :totalItems="5"></pagination>
        </b-col>
      </b-row>
      <div>
        Pagina actual {{ currentPage }}
      </div>
    </b-container>
  </div>
</template>

<script>
import Service from "./services";
import PaginationVue from "./components/Pagination.vue";

export default {
  name: "App",

  components: {
    pagination: PaginationVue
  },

  data() {
    return {
      currentPage: 1,
      limit: 2,
      users: []
    };
  },

  /**
   * Al montarse el componente debemos obtener nuestros datos de la api.
   * La funcion recibe la pagina actual, y el limit de usuarios a obtener.
   * Retorna uan promesa, y el valor se obtiene.
   */
  mounted() {
    Service.fetchUsers(this.currentPage, this.limit).then(users => {
      this.users = users.response;
    });
  },

  /**
   * En el ciclo de vida, cuando la data o el state de vue cambia.
   * Actua como un listener, por lo cual cuando el estado termina de actualizarse
   * Volvemos a ejecutar una nueva llamada a la api.
   * Podemos colocar esto incluso en un computedProperty que solamente hara la 
   * llamada a la api cuando la pagina, o el limite cambien.
   */
  updated: function() {
    this.$nextTick(function(state) {
      Service.fetchUsers(this.currentPage, this.limit).then(users => {
        this.users = users.response;
      });
    });
  },

  methods: {
    /**
     * Este parametro puede ser numero o string.
     * Si recibe un numero asignara la pagina seleccionada.
     * Si recibe un string "increment" desde pagination.
     * Incrementara por 1 el valor de la paginacion.
     * Si recibe un string "decrement" reducira el valor por 1.
     */
    handleClickPage(page) {
      if (typeof page === "number") {
        return (this.currentPage = page);
      }
      switch (page) {
        case "increment":
          return this.currentPage ++;
        case "decrement":
          return this.currentPage --;
      }
    }
  },
  /**
   * Computed property para obtener el tama;o del array.
   * Recordar siempre usar computed properties para no hacer muy verboso el codigo.
   */
  computed: {
    total() {
      return this.users.length;
    }
  }
};
</script>

<style scoped>
.view {
  padding-top: 40px;
}
</style>
