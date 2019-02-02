
<template>
  <nav class="navbar sticky-top flex-md-nowrap p-0">
    <a class="navbar-brand col-2 mr-0 text-white" href="#">Admin</a>
    <div class="d-flex justify-content-end mr-3">
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
    
    <!-- <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
        @click="searchList(name)"
    >-->
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
