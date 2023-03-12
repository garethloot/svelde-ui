<script>import { createClass, createIconClasses } from "./styles";
const { leftIcon, rightIcon } = $$slots;
export let title = "";
export let color = "neutral";
export let size = "md";
export let shape = "default";
export let width = "default";
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
