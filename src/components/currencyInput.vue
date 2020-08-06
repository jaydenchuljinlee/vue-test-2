<template>
  <span>
    $<input
      ref="input"
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"/>
  </span>
</template>

<script>
  export default {
    name: 'currency-input',
    props: ['value'],
    methods: {
      updateValue: function (value) {
        
        var formattedValue = value.trim().slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3)
        
        if (formattedValue !== value)
        {
          this.$refs.input.value = formattedValue
        }
        
        this.$emit('input', Number(formattedValue))
        
      }
    }
  }
</script>
