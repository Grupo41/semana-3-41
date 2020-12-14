<template>
<div class="container mt-5" style="border-style: double; background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 68%, rgba(0,212,255,1) 100%); padding: 60px">

  <form>
    <div class="form-group">
      <label for="exampleInputEmail1" style="color: white; font-weight:bold; font-size: 20px">Correo Electrónico</label>
      <input
        v-model="login.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted" style="color: #16214e; font-size:15px"
        >Información segura.</small
      >
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1" style="color: white; font-weight:bold; font-size: 20px">Contraseña</label>
      <input 
      v-model="login.password"
      type="password" 
      class="form-control" 
      id="exampleInputPassword1" />
    </div>
    
    <button 
    @click.prevent="loginUser"
    type="submit" 
    class="btn btn-primary">Entrar</button>
  </form>
  <!-- <pre>{{login}}</pre>-->
</div>

</template>

<script>

import swal from 'sweetalert';
export default {
  name: "TheLogin",
  data() {
    return {
      login:{
        email:'',
        password:''
      }
    };
  },
  methods: {
    async loginUser(){
      try{
        let response = await this.$http.post('/api/auth/signin', this.login);
        //console.log(response.data)
        let token = response.data.tokenReturn;
        let user = response.data.user;

        localStorage.setItem('jwt',token);
        localStorage.setItem('user', JSON.stringify(user));

        if(token){
          swal("Éxito!", "Login correcto", "success");
          this.$router.push('/home');
        }
        
      }
      catch(e){
        swal("Oops!", "Algo salió mal :(", "error");
          //console.log(err.response)
      }
    }
  },
};
</script>