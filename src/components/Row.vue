<template>
  <tr class="row">
    <Box @markBox="markBox" v-for="(mark, i) in row" :key="i" :mark="mark" :r="r" :c="i" />
  </tr>
</template>

<script>
import Box from "./Box.vue";

export default {
  name: "Row",
  components: {
    Box
  },
  props: {
    row: Array,
    r: Number
  },
  methods: {
    markBox: function(r, c) {
      this.$emit("markBox", r, c);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
