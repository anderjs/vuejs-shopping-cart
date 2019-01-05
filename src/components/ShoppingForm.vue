<template>
  <div>
    <form 
      class="uk-form-width-large" 
      v-on:submit.prevent="onAddItem(selected)">
      <select 
        class="uk-margin-medium-top uk-select" 
        v-model="selected"
        >
        <option
          v-for="item in items" 
          v-bind:key="item.id"
          v-bind:value="item"
          >
          {{item.name}} - {{item.cost}} $
        </option>
      </select>
      <button 
        class="uk-button uk-button-secondary uk-button-medium uk-margin-small" 
        type="submit"
        >
        Add To Cart
      </button>
      <button
        type="button" 
        class="uk-button uk-button-primary uk-button-medium"
        v-on:click="onDisplayInvoice"
        >
        View Invoice
      </button>
    </form>
  </div>
</template>


<script>
  import data from '../api/models/index';

  export default {
    name: "ShoppingForm",
    props: {
      "onAddItem": Function,
      "onDisplayInvoice": Function
    },

    data() {
      return {
        items: [],
        selected: null,
      }
    },
    
    // LifeCycleHooks API
    created() {
      this.items = JSON.parse(JSON.stringify(data));
    },
  }
</script>
