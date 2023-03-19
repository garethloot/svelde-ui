<script lang="ts">
	import { createClass, FormControl, SharedInputProps } from './imports';

	export let {
		value,
		label,
		color,
		width,
		message,
		size,
		disabled,
		inline,
		bordered,
		placeholder
	} = SharedInputProps;

	const classes = createClass(color, size, bordered, message);
</script>

<FormControl {width} {label} {message} {inline}>
	<input type="text" class={classes} bind:value {placeholder} on:change {disabled} />
</FormControl>
