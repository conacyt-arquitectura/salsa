<template>
  <p class="demo">
<ol>
  <li v-for="(paso, index) in pasos" :key="index">{{paso}}</li>
</ol>
  </p>
</template>

<script>
export default {
  props: ["pasos"],
};
</script>
