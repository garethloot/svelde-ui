<script lang="ts">
	import { createClass, FormControl, SharedInputProps } from './imports';

	export let { label, color, width, message, size, disabled, inline, checked } = SharedInputProps;

	const classes = createClass(color, size, message);
</script>

<FormControl {width} {label} {message} {inline}>
	<input type="checkbox" class={classes} bind:checked on:change {disabled} />
</FormControl>
