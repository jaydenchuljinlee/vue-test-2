// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ButtonCounter from './components/buttonCounter'
import CurrencyInput from './components/currencyInput'

var cee = new Vue({
  el: '#counter-event-example',
  components: {
    ButtonCounter
  },
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

var ci = new Vue({
  el: '#currency-input-example',
  components: {
    CurrencyInput
  }
})
