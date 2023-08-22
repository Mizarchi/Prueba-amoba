<script lang="ts" setup>
import { ref } from 'vue';
import Input from './Input.vue'
import Modal from './Modal.vue'
import axios from 'axios';

const userName = ref('')
const modalVisible = ref(false);

const token = localStorage.getItem('token')

if (token) {
  axios.get('https://contable.amobasoftware.com/api/verify', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then((response) => {
    userName.value = response.data.data.name
  })
}



</script>

<template>

<!--Header -->
  <div class="head">
    <div class="box1">
      <img class="logo1" src="../assets/logo.png">

      <div class="header-right">
        <span class="header-name">Bienvenido, {{userName}}</span>
        <img class="icon" src="../assets/Usuario.svg">
      </div>
    </div>
  </div>

<div class="ContainerP">
 <!--Dropdown Menu -->
 
  <div class="Container1">

    <!-- Menu Top -->
    <div class="box2">
      <div class="ButtonM">
        <img class="margin" src="../assets/Vector1.svg">
        <button class="Hover"> Menu Top</button>
      </div>

   <!-- Ventas -->
      <div class="ButtonM">
        <img class="margin" src="../assets/Vector2.svg">
        <button class="menu-text"> Ventas </button>
        <img class="margin2" src="../assets/Arrow1.svg">
      </div>
   
    <!-- Productos y servicios  -->
      <div class="ButtonM">
        <img class="margin" src="../assets/Group1.svg">
        <button class="menu-text"> Productos y servicios </button>
        <img class="margin2" src="../assets/Arrow1.svg">
      </div>

     <!-- Personas-->
      <div class="ButtonM">
        <img class="margin" src="../assets/Group2.svg">
        <button class="menu-text"> Personas</button>
        <img class="margin2" src="../assets/Arrow1.svg">
      </div>
    </div>
  </div>

     <!-- Facturación-->
  <div class="Container2">
    <div class="box3">
      <h1 class="bill-title"> Factura N:000000000000000</h1>
      <p class="client-text"> Detalles del cliente</p>
      <p class="dni-text"> identificación</p>

      <div class="InputH1">
        <Input class="Input-client" placeholder="12345678910111213141" type="number"/>
        <button class="ButtonH1" @click="modalVisible = true"> Agregar nuevo cliente </Button>
      </div>

      <div>
        <p class="text-data">Nombre:</p>
        <p class="text-data">Apellido:</p>
        <p class="text-data">Correo electrónico:</p>
      </div>
    </div>

    <div class="box4"> 
      <p class="bill-text">Cuerpo de Factura</p>
      <div class="bill-body-botton">
        <button class="ButtonH2"> Add nuevo item a la factura</button>
        <button class="QR">
          <img src="../assets/QR.svg">
        </button>
      </div>
    </div>

    <div class="box4"> 
      <p class="bill-text">forma de pago</p>
      <div>
        <button class="ButtonH2"> Add nuevo item a la factura</button>
      </div>
    </div>
  </div>

  <!-- Generador de factura-->
  <div class="container3">
    <div class="box5">
      <button class="ButtonH3"> Generar factura </button>
      <h1 class="client-text">Detalles de factura</h1>
    </div>
  </div>

  <Modal :visible="modalVisible" @close="modalVisible = false"/>

</div>

</template>

<style scoped lang="sass">
.head
  background: #FFFFFF
  height: 60px

.header-name
  margin-right: 8px

.header-right
  display: flex
  align-items: center

.box1
  display: flex
  justify-content: space-between
  padding-left:20px
  padding-right:20px

.menu-text
  flex: 1
  text-align: left

.logo1
  width: 118px
  height: 43px
  margin-top:9px
.icon
  height: 24px
  width: 24px

.ButtonM
  padding-left: 19px
  padding-top: 28px
  display: flex
  align-items: row

.margin
  margin-right: 10px

.InputH
  width: 290px
  height: 40px

.InputH1
  display: flex


.Input-client
  width: 290px
  height: 40px



.ButtonH1
  background: #2A4DD0
  color: #FFFFFF
  height: 40px
  width: 238px
  border-radius: 6px
  margin-left: 20px

.box2
  background: #F2F3F5
  width: 254px
  height: 966px
  padding-right: 20px
.box3
  width: 768px
  border-radius: 8px
  border: 1px solid #ECEEF1
  background: #FFF
  margin-top: 24px
  margin-left: 24px
  margin-right: 24px
  padding: 30px


.box4
  width: 768px
  border-radius: 8px
  border: 1px solid #ECEEF1
  background: #FFF
  margin-top: 24px
  margin-left: 24px
  margin-right: 24px
  padding: 30px

.box5
  width: 350px
  height: 906px
  border-radius: 8px
  border: 1px solid #ECEEF1
  background: #FFF
  margin-top:24px
  margin-right:20px
  margin-bottom: 34px
  padding: 30px


.ButtonH2 
  width: 604px
  height: 40px
  border-radius: 10px
  border: 1px dashed #ACBADC
  background: #ECEEF1
  color:#ACBADC
  

.QR
  width: 92px
  height: 40px
  background-color: #EDF4FE
  border-radius: 10px
  border: 1px solid #2A4DD0
  display: flex
  justify-content: center
  align-items: center
  margin-left: 12px

.ButtonH3
  height: 48px
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  border-radius: 6px
  background: #ACBADC
  color: #FFFFFF
  font-size: 20px
  margin-bottom:30px


.ContainerP
  display: flex
  justify-content: space-between

.bill-title
  color: #2A4DD0
  font-family: Inter
  font-size: 20px
  font-style: normal
  font-weight: 500
  line-height: normal
  margin-bottom: 24px

.client-text
  color: #000
  font-family: Inter
  font-size: 16px
  font-style: normal
  font-weight: 500
  line-height: normal
  margin-bottom: 5px

.dni-text
  color: #6C727F
  font-family: Inter
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: normal
  margin-bottom: 5px


.bill-text
  color: #2A4DD0
  font-family: Inter
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 14px
  margin-bottom: 5px


.text-data
  margin-top:12px
  margin-left: 310px
  color: #6C727F
  font-family: Inter
  font-size: 12px
  font-style: normal
  font-weight: 700
  line-height: normal

.bill-body-botton
  display: flex
</style>
