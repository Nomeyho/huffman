<script>
import { frequencies } from '../js/store.js';
</script>

<div class="menu">
  <h3>Frequency</h3>
  {#each $frequencies as frequency}
    <label>
      <span>{frequency.letter}:</span>
      <input type=number bind:value={frequency.value}>
    </label>
  {/each}
</div>

<style>
.menu {
	background-color: white;
  min-height: 100vh;
  width: 150px;
  padding: 10px;
  border-right: 1px solid #ccc;
}

h3 {
  text-align: center;
}

label {
  display: block;
  white-space: nowrap;
  margin-bottom: 4px;
  font-size: 14px;
}

label span {
  display: inline-block;
  width: 15px;
}

input {
  display: inline-block;
  width: 90px;
  border: 1px solid #ddd;
  padding: 2px;
}
</style>