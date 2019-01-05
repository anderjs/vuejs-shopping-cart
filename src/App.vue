<template>
  <div id="app">
    <v-navbar title="Vue Shopping Cart"></v-navbar>
      <div class="uk-container">
        <v-invoice 
          title="Cart Invoice" 
          :toggle="toggle" 
          :open="invoice"
          :payments="paymentDetail"
          >
          </v-invoice>
        <v-total :total-item="this.items.length"></v-total>
        <div class="uk-flex">
          <v-form :on-display-invoice="toggle" :on-add-item="getNewItem"></v-form>
          <v-list 
            :item-list="this.items"
            :delete-item="deleteItem"
            >
            </v-list>
        </div>
      </div>
  </div>
</template>

<script>
  // Importing All Vue.js components
  import NavbarVue from './components/Navbar.vue';
  import ContainerVue from './components/Container.vue';
  import ShoppingFormVue from './components/ShoppingForm.vue';
  import ShoppingListVue from './components/ShoppingList.vue';
  import TotalItemVue from './components/TotalItem.vue';
  import InvoiceVue from './components/Invoice.vue';

  export default {
    name: 'App',
    // Conventional Components Name
    components: {
      'v-navbar': NavbarVue,
      'v-container': ContainerVue,
      'v-form': ShoppingFormVue,
      'v-list': ShoppingListVue,
      'v-total': TotalItemVue,
      'v-invoice': InvoiceVue,
    },

    data() {
      return {
        items: [],
        invoice: false,
        paymentDetail: [
          { title: 'Items', value: 0 },
          { title: 'Cost', value: 0}
        ]
      }
    },

    methods: {
      /**
       * Adds a new item to the main component
       * Get that item ands appends to the shopping list.
       * @typedef {object} item
       * @prop {number} cost
       * @prop {string} name
       */
      getNewItem: function(item) {
        const newItem = {
          cost: item.cost,
          name: item.name
        };
        this.items = this.items.concat(newItem);
        this.updatePayments();
      },
      
      /**
       * Deletes an item from cart by it index.
       * @param {number} itemToDelete
       */
      deleteItem: function(itemToDelete) {
        this.items = this.items.filter((item, itemIndex) => {
          return itemIndex !== itemToDelete;
        });
        this.updatePayments();
      },
      
      /**
       * @method toggle toggles in/out the modal of Invoice Cart.
       */
      toggle: function() {
        this.invoice = !this.invoice;
      },
      
      /**
       * @function updatePayments
       * @description When a update occurs, the invoice will be updated.
       */
      updatePayments: function() {
        this.getTotalToPaid();
        this.paymentDetail = this.paymentDetail.map((payment, index) => {
          switch(index) {
            case 0: return Object.assign(payment, { value: this.items.length});
            case 1: return Object.assign(payment, { value: this.getTotalToPaid()});
          }
          return payment;
        });
      },
      
      /**
       * @function getTotalToPaid
       * @description If the cart updates, automatically we get the total to paid.
       * @typedef {object} item the callback argument is the item.
       * @prop {number} cost the dot notation or property of item, will be the cost.
       */
      getTotalToPaid: function() {
        let totalCost = 0;
        this.items.forEach((item) => {
          return totalCost += item.cost;
        });
        return totalCost;
      }, 

    },

    created() {
      // Loads default payment values
      this.paymentDetail = this.paymentDetail.map((payment, index) => {
          switch(index) {
            case 1: return Object.assign(payment, { value: this.items.length});
            case 2: return Object.assign(payment, { value: this.getTotalToPaid()});
          }
          return payment;
      });
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');


 * {
   font-family: 'Monserrat', sans-serif !important;
 }

 .element {
   background-color: #F5F5F5 !important;
 }

 .text {
   font-family: 'Montserrat', sans-serif !important; 
 }

</style>
