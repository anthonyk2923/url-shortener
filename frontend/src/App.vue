<template>
  <div class="show center">
    <div class="outer ">
      <Info @submitForm="postData" />
    </div>

    <Backround />
  </div>
</template>

<script>
import Backround from "./components/Backround"
import Info from "./components/Info"
export default {
  name: 'App',
  components: {
    Backround,
    Info
  },
};
</script>

<style>
.center {
  height: 100vh;
  align-items: center;
  justify-content: center;

}

.show {
  display: flex;
}

.outer {
  z-index: 1;
}

* {
  font-family: Verdana, sans-serif;
}
</style>