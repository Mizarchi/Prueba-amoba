<script lang="ts" setup>
const props = defineProps({
    name: String,
}) 

</script>

<template>
<button class="button">{{ props.name }}</button>
</template>

<style scoped lang="sass">
.button
  margin-top: 24px
  border: 0px
  border-radius: 6px
  background: #2A4DD0
  padding: 14px 12px
  color: white

  &:hover
    background-color: #00008B
</style>