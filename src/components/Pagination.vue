<template>
  <div class="overflow-auto">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li 
          aria-label="Previous" 
          class="page-link" 
          v-if="this.previous"
          @click="() => onClickPage('decrement')"
          >
           <span aria-hidden="true">&laquo;</span>
        </li>
        <li v-for="page in pages" :key="page">
          <div class="page-link" @click="() => onClickPage(page)">
            {{ page }}
          </div>
        </li>
        <li 
          aria-label="Next" 
          class="page-link" 
          v-if="this.next"
          @click="() => onClickPage('increment')"
          >
          <span aria-hidden="true">&raquo;</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import offset from '../utils/offset'

export default {
  name: "Pagination",

  props: ['currentPage', 'totalItems', 'onClickPage'],

  computed: {
    /**
     * Cuando el prop de items cambie, o cuando la pagina actual cambie.
     * Este mismo retornara los elementos de la paginacion.
     */
    pages () {
      const pages = Array(this.totalItems).fill(null).map((_, idx) => idx + 1)

      return offset(pages, this.currentPage - 1, 2, 2)
    },

    /**
     * Retorna un booleano que indica si la pagina es mayor que 1.
     * Por lo tanto debe renderizar el boton de "atras" en la paginacion.
     */
    previous () {
      return this.currentPage > 1
    },

    /**
     * Retorna un booleano que indica si la pagina es la ultima.
     * Math.max lo que hace es conseguir el numero mayor en la pagina.
     * Si la pagina es menor que la ultima pagina siempre debe mostrar el boton
     * De siguiente.
     */
    next () {
      return this.currentPage < Math.max(...this.pages)
    },

    /**
     * Queria adjuntar el conditional style para que se mostrara la pagina activa.
     */
    isActive (pageNumber) {
      return pageNumber === this.currentPage ? "page-link active" : "page-link"
    }
  }
};
</script>