<template>
  <div>
    <h1>Collin Rijock</h1>
    <h3>Software Developer @ FIU</h3>
    <div>
      <a href="mailto:collinrijock@gmail.com">collinrijock@gmail.com</a>
      <a href="https://github.com/collinrijock">Github</a>
      <a href="./resume.pdf" target="blank">Resume</a>
    </div>

  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="scss">
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h1 {
    font-size: 3rem;
  }

  h3 {
    margin: 0px;
    font-weight: 600;
  }

  div {
    padding: 0;
    margin: 30px;
  }

  a{
    padding: 0px 15px;
  }

}
</style>
