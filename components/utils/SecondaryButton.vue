<template>
  <Button :class="`secondary-button ${type}`">
    {{ textBtn }}
  </Button>
</template>

<script>
export default {
  props: {
    textBtn: {
      type: String,
      default: "Click",
    },
    type: {
      type: String,
      default: "green",
    },
  },
};
</script>

<style lang="sass" scoped>
.secondary-button
  width: 170px
  height: 40px
  background: none
  border-radius: 5px
  font-weight: 500
  font-family: poppins
  text-transform: uppercase
  cursor: pointer

.green
  border: 2px solid #32D6B6
  color: #32D6B6

.purple
  border: 2px solid #505AF6
  color: #505AF6

@media (min-width: 768px)
  .secondary-button
    margin: 10px 0
</style>
