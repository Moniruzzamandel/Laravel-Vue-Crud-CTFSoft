
require('./bootstrap');

import Vue from 'vue'

// Start VueProgressBar
import VueProgressBar from 'vue-progressbar'

const VueProgressBarOptions = {
  color: '#0c0f9c',
  failedColor: '#874b4b',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}


Vue.use(VueProgressBar, VueProgressBarOptions)
// End VueProgressBar

// Start Snotify
import Snotify, { SnotifyPosition } from 'vue-snotify'

const SnotifyOptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}


Vue.use(Snotify, SnotifyOptions)
// End Snotify

// Start V-Form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
// End V-Form


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('customer-component', require('./components/CustomerComponent.vue').default);
Vue.component('pagination', require('./components/partial/PaginationComponent.vue').default);


const app = new Vue({
    el: '#app',
});
