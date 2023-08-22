<script lang="ts" setup>
const props = defineProps({
  name: String,
  placeholder: String,
  type: String,
  modelValue: String,
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-container">
    <label class="input-label">{{ props.name }}</label>

    <input
      class="input"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :type="props.type"
      @input="$emit('update:modelValue', ($event.target as any).value)"
    />
  </div>
</template>

<style scoped lang="sass">
.input-container
  margin-bottom: 12px

.input
  width: 100%
  height: 40px
  border-radius: 10px
  border: 1px solid #ACBADC
  background: #FFF
  padding: 0 8px

.input-label
  display: block
  margin-bottom: 4px

</style>