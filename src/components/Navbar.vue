
<template>
  <nav class="navbar sticky-top bg-dark p-0 b">
    <a class="navbar-brand col-2 text-white" href="#">Admin</a>
    <div class="mr-3">
    <a
      class="navbar-brand nav-link text-white p-2"
      style="border:1px solid black"
      href="#"
      @click="signout()"
    >Sign out</a>
    <a
      class="navbar-brand nav-link text-white p-2 m-0"
      style="border:1px solid black"
      href="#"
      @click="frontPage()"
    >Front page</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.APIPATH}/logout`;
      this.$http.post(url).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/signin");
        }
      });
    },
    frontPage() {
      this.$router.push('/HomePage')
    }
  }
};
</script>
