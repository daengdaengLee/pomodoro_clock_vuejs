<template>
  <footer class="AppFooter">
    <p>
      Coded by <a :href="userUrl" target="_blank">KunhoLee</a>.<br>
      You can see the code from <a :href="codeRepoUrl" target="_blank">here</a>!
    </p>
  </footer>
</template>

<script>
export default {
  name: 'PortfolioFooter',
  props: {
    userUrl: {
      type: String,
      default () { return '#' }
    },
    codeRepoUrl: {
      type: String,
      default () { return '#' }
    }
  }
}
</script>

<style scoped>
.AppFooter::before {
  content: '';
  display: block;
  width: 10rem;
  margin: 2rem auto;
  border-top: 1px solid gray;
  margin-bottom: 3rem;
}
.AppFooter {
  padding-bottom: 3rem;
}
.AppFooter p {
  text-align: center;
  font-weight: 300;
  font-size: 1.2rem;
}
.AppFooter p a {
  text-decoration: none;
  color: gray;
}
.AppFooter p a:hover {
  color: darkgray;
}
</style>
