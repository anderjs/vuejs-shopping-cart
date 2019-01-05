<template>
  <div class="uk-width-1-1 uk-margin-left uk-margin-medium-top">
    <ul class="text-center uk-list uk-list-striped">
      <li class="uk-text-muted" v-for="(item, index) in itemList" v-bind:key="index">
        {{item.name}} - {{item.cost}} <span class="uk-text-success">$</span>
        <button 
          v-on:click="deleteItem(index)"
          class="uk-button-danger uk-margin-small-left"
          >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ShoppingList",
    props: {
      itemList: Array,
      deleteItem: Function,
    },
  }
</script>