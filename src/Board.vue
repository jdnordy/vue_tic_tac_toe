<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <table id="board">
      <Row @markBox="markBox" v-for="(row, key, i) in this.board" :key="i" :row="row" :r="i" />
    </table>
    <h1 v-if="!gameEnd">Player {{ player }}'s turn.</h1>
    <h1 v-else-if="winner === 'cat'">Cat's Game</h1>
    <h1 v-else>Player {{ winner }} wins the game!</h1>
    <button @click="newGame" v-if="gameEnd">New Game</button>
  </div>
</template>

<script>
import Row from "./components/Row.vue";

export default {
  name: "App",
  components: {
    Row
  },
  data: () => {
    return {
      board: {
        0: ["-", "-", "-"],
        1: ["-", "-", "-"],
        2: ["-", "-", "-"]
      },
      player: "X",
      msg: "Tic Tac Toe",
      moves: 0
    };
  },
  computed: {
    winner: function() {
      // only check for winner after 5 moves
      if (this.moves >= 5) {
        for (let i = 0; i < 3; i++) {
          if (
            (this.board[i][0] === this.board[i][1] &&
              this.board[i][1] === this.board[i][2]) ||
            (this.board[0][i] === this.board[1][i] &&
              this.board[1][i] === this.board[2][i])
          )
            return this.player === "X" ? "O" : "X";
        }
        if (
          (this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2]) ||
          (this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0])
        )
          return this.player === "X" ? "O" : "X";
      }

      // check if cats game
      if (this.moves === 9) return "cat";

      return "none";
    },
    gameEnd: function() {
      return this.winner === "none" ? false : true;
    }
  },
  methods: {
    markBox: function(r, c) {
      // only update box if game has not ended
      if (this.gameEnd) return;

      this.$set(this.board[r], c, this.player);
      this.player = this.player === "X" ? "O" : "X";
      this.moves++;
    },
    newGame: function() {
      this.board = {
        0: ["-", "-", "-"],
        1: ["-", "-", "-"],
        2: ["-", "-", "-"]
      };
      this.player = "X";
      this.moves = 0;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  margin: 0 auto;
}
</style>
