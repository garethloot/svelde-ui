<script>export let checked = false;
</script>

<label class="swap">
	<input type="checkbox" bind:checked on:change />
	<div class="swap-on">
		<slot name="on">ON</slot>
	</div>
	<div class="swap-off">
		<slot name="off">OFF</slot>
	</div>
</label>
