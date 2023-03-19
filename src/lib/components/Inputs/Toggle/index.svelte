<script lang="ts">
	import { createClasses, FormControl, InputPropsDefaults } from './imports';

	export let { label, color, width, message, size, disabled, inline, checked } = InputPropsDefaults;

	const { toggleClasses } = createClasses(color, size, message);
</script>

<FormControl {width} {label} {message} {inline}>
	<input type="checkbox" class={toggleClasses} bind:checked on:change {disabled} />
</FormControl>
