<script lang="ts">
	import { createClasses, PropsDefaults } from './imports';

	export let { title, color, shape, width, size, outline, loading, noAnimation, active, disabled } =
		PropsDefaults;

	$: ({ btnClasses, iconClasses } = createClasses(
		color,
		active,
		outline,
		loading,
		noAnimation,
		size,
		shape,
		width
	));

	const { leftIcon, rightIcon } = $$slots;
</script>

<button on:click class={btnClasses} {disabled}>
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
