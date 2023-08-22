<script lang="ts" setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  import Input from './Input.vue';
  import Button from './Button.vue';

  const router = useRouter();

  const emailValue = ref('');
  const passwordValue = ref('')

  function entrar() {
    console.log(emailValue.value, passwordValue.value)

    axios.post('https://contable.amobasoftware.com/api/login', {
      username: emailValue.value,
      password: passwordValue.value,
    }).then((respuesta: any) => {
      if (respuesta.data.access_token) {
        localStorage.setItem('token', respuesta.data.access_token)
        router.push('/home');
      }
    });
  }
</script>

<template>
  <div class="container">
    <div class="box">
      <img class="logo" src="../assets/logo.png">

      <Input placeholder="Email" name="Email" v-model="emailValue" />
      <Input placeholder="Password" name="Contraseña" type="password" v-model="passwordValue" />

      <Button name="continuar" @click="entrar()"></Button> 
    </div>
  </div>
</template>

<style scoped lang="sass">
.box
  background: #FFFFFF
  background-color: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
  border-radius: 10px
  box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3)
  padding: 50px
  width: 25%
  display: flex
  flex-direction: column
  justify-content: center

.container
  display: flex
  justify-content: center
  align-items: center
  height: 99vh

.logo
  margin-bottom: 24px
  width: 150px
  margin-left: auto
  margin-right: auto
</style>
