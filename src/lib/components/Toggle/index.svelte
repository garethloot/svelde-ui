<script lang="ts">
	import type { TInputWidth, TMessage, TSize } from '../../types/global';
	import type { TColor } from '../../types/color';
	import { createClass } from './styles';
	import FormControl from '../FormControl/FormControl.svelte';

	export let checked = false;
	export let label = '';
	export let color: TColor = 'neutral';
	export let width: TInputWidth = undefined;
	export let message: TMessage = undefined;
	export let size: TSize = 'md';
	export let disabled = false;

	const classes = createClass(color, size, message);
</script>

<FormControl {width} {label} {message}>
	<slot name="label-extra" slot="label-extra" />
	<input type="checkbox" class={classes} bind:checked on:change {disabled} />
</FormControl>
