<script lang="ts">
	import { createClasses, FormControl, InputPropsDefaults } from './imports';

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
	} = InputPropsDefaults;

	const { inputClasses } = createClasses(color, size, bordered, message);
</script>

<FormControl {width} {label} {message} {inline}>
	<input type="text" class={inputClasses} bind:value {placeholder} on:change {disabled} />
</FormControl>
