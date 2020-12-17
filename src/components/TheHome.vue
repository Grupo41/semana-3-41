<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #16214e">
      <a class="navbar-brand" style="color: white">¡Bienvenido!</a>
      <!--<button
        class="btn btn-outline-light my-2 my-sm-0"
        type="button"
        @click.prevent="getMoreDetails"
      >
        Mostrar Información Completa
      </button>-->
      <form class="form-inline">
        <button
          class="btn btn-outline-light my-2 my-sm-0"
          type="button"
          @click.prevent="logOut"
        >
          Salir
        </button>
      </form>
    </nav>

    <div class="container mt-5">
      <!--<p>Nombre: {{ user.nombre }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Rol: {{ user.rol }}</p>
      <p>Fecha de creación: {{ user.createdAt }}</p>
      <p>Fecha de actualización: {{ user.updatedAt }}</p>-->

      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Atributo</th>
            <th scope="col">Información del usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-active">
            <th scope="row">1</th>
            <td>ID</td>
            <td>{{ user.id }}</td>
          </tr>
          <tr class="table-primary">
            <th scope="row">2</th>
            <td>Nombre</td>
            <td>{{ user.name }}</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">3</th>
            <td>Email</td>
            <td>{{ user.email }}</td>
          </tr>
          <tr class="table-warning">
            <th scope="row">4</th>
            <td>Rol</td>
            <td>{{ user.rol }}</td>
          </tr>
          <tr class="table-success">
            <th scope="row">5</th>
            <td>Fecha de creación</td>
            <td>{{ user.createdAt }}</td>
          </tr>
          <tr class="table-info">
            <th scope="row">6</th>
            <td>Fecha de actualización</td>
            <td>{{ user.updatedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let user = localStorage.getItem("user");
      let token = localStorage.getItem("jwt");
      //console.log(JSON.parse(user));

      if (token) {
        this.user = JSON.parse(user);
      }
    },
    getMoreDetails() {
      let user = localStorage.getItem("user");
      let token = localStorage.getItem("jwt");
      //console.log(JSON.parse(user));

      if (token) {
        this.user = JSON.parse(user);
      }
    },
    logOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>