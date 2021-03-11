<template>
  <button class="main-button">
    {{ textBtn }}
  </button>
</template>

<script>
export default {
  props: {
    textBtn: {
      type: String,
      default: "Click",
    },
  },
};
</script>

<style lang="sass" scoped>
.main-button
  width: 170px
  height: 40px
  margin: 30px 0
  background-color: $color-primary
  border: none
  border-radius: 5px
  color: $color-light
  font-weight: 500
  font-family: poppins
  text-transform: uppercase
  cursor: pointer

</style>
