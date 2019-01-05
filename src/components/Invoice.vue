<template>
  <vk-modal :show="open">
    <vk-modal-title slot="header" v-text="title"></vk-modal-title>
    <dl class="uk-description-list uk-description-list-divider">
      <dt 
        class="uk-text-muted" 
        v-for="(payment, index) in payments" v-bind:key="index"
        >
        {{payment.title}}: {{payment.value}} 
        <span v-if="payment.title === 'Cost'" class="uk-text-success">$</span>
      </dt>
    </dl>
    <vk-button v-on:click="toggle" type="danger">
      Close
    </vk-button>
  </vk-modal>
</template>



<script>
  export default {
    name: "Invoice",
    props: {
      open: Boolean,
      title: String,
      toggle: Function,
      payments: Array,
    },
  }
</script>

<style scope>
</style>
