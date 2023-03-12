<script lang="ts">
	import type { TBtnColors, TBtnShape, TBtnWidth, TBtnSize } from './types';
	import { createClass, createIconClasses } from './styles';

	const { leftIcon, rightIcon } = $$slots;

	export let title: string = '';
	export let color: TBtnColors = 'neutral';
	export let size: TBtnSize = 'md';
	export let shape: TBtnShape = 'default';
	export let width: TBtnWidth = 'default';
	export let outline = false;
	export let loading = false;
	export let noAnimation = false;
	export let active = false;
	export let disabled = false;

	$: classes = createClass(color, active, outline, loading, noAnimation, size, shape, width);

	const iconClasses = createIconClasses(size);
</script>

<button on:click class={classes} {disabled}>
	{#if leftIcon && !loading}
		<div class={iconClasses}>
			<slot name="leftIcon" />
		</div>
	{/if}
	{title}
	{#if rightIcon}
		<div class={iconClasses}>
			<slot name="rightIcon" />
		</div>
	{/if}
</button>
