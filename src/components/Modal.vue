<script lang="ts" setup>
import Input from './Input.vue';

defineProps(['visible'])
</script>

<template>
  <div class="modal-backdrop" :style="{display: visible ? 'flex' : 'none'}">
    <div class="modal">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="$emit('close')"> x </button>
      </header>

      <h1 class="modal-tittle">Crear cliente</h1>

      <div>
        <div class="input-row">
          <Input class="form-input" placeholder="Karen Maria segunda" name="Nombre" />
          <Input class="form-input" placeholder="Onisimchuk Solis" name="Apellido" />
        </div>

        <div class="input-row">
          <Input class="form-input" placeholder="Amobasoftware@gmail.com" name="Correo electronico" />
          <Input class="form-input" placeholder="Boulevar los andes 735 PB A" name="Dirección" />
        </div>

        <div class="input-row">
          <Input class="form-input" placeholder="38981209" name="Tipo de identificacion" />
        </div>

        <div class="input-row">
          <Input class="form-input" placeholder="3493 664098 " name="Telefono movil" />
          <Input class="form-input" placeholder="3493 664098 " name="Telefono fijo" />
        </div>
      </div>

      <div class="button-container">
        <button class="add-button"> Agregar </button>
      </div>

    </div>
  </div>
</template>

<style lang="sass">
.btn-close
  margin-left: auto
  display: block

.modal-backdrop 
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: rgba(0, 0, 0, 0.3)
  justify-content: center
  align-items: center
  

  .modal 
    background: #FFFFFF
    box-shadow: 2px 2px 20px 1px
    overflow-x: auto
    display: flex
    flex-direction: column
    padding: 13px 50px 30px 50px
    width: 600px
    border-radius: 8px

.input-row
  display: flex
  justify-content: space-between

.form-input
  width: 240px

.add-button
  padding: 12px 14px 12px 14px
  color: #ffffff
  border-radius: 6px
  background: #2A4DD0
  
.button-container
  display: flex
  justify-content: center
  margin-top: 32px

.modal-tittle
  margin-bottom: 20px
  color: #2A4DD0
  font-size: 16px
</style>
