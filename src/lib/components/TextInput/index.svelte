<script lang="ts">
	import type { TSize, TMessage, TInputWidth } from '../../types/global';
	import type { TTextInputColors } from './types';
	import { createClass } from './styles';
	import FormControl from '../FormControl/FormControl.svelte';

	export let value = '';
	export let label = '';
	export let placeholder = '';
	export let color: TTextInputColors = 'neutral';
	export let message: TMessage = undefined;
	export let width: TInputWidth = undefined;
	export let bordered = false;
	export let size: TSize = 'md';
	export let disabled = false;

	const classes = createClass(color, size, bordered, message);
</script>

<FormControl {width} {label} {message}>
	<slot name="label-extra" slot="label-extra" />
	<input type="text" class={classes} bind:value {placeholder} on:change {disabled} />
</FormControl>
