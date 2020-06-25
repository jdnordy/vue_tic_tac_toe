<template>
  <td class="row">
    <button v-on:click="markBox">{{ mark }}</button>
  </td>
</template>

<script>
export default {
  name: "Box",
  props: {
    mark: String,
    r: Number,
    c: Number
  },
  methods: {
    markBox: function() {
      // do nothing if box is already marked
      if (this.mark !== "-") return;

      this.$emit("markBox", this.r, this.c);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 100px;
  height: 100px;
  font-size: 50px;
}
</style>
