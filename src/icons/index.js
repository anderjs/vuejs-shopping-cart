import Vue from 'vue';
import { IconCart, IconTrash } from '@vuikit/icons';

Vue.component('VkIconsCart', IconCart);
Vue.component('VkIconsTrash', IconTrash);

export default {
  components: {
    VkIconsCart: IconCart,
    VkIconsTrash: IconTrash
  }
}