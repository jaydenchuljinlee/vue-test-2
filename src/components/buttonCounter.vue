<template>
  <button v-on:click="incrementCounter">{{ counter }}</button>
</template>

<script>
  export default {
    name: 'button-counter',
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter: function () {
        this.counter += 1
        this.$emit('increment')
      }
    }
  }
</script>
