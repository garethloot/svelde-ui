<script lang="ts">
	import { createClass, getMessage, SharedInputProps } from './imports';

	export let { width, label, message, inline } = SharedInputProps;

	const { messageClasses, messageText } = getMessage(message);

	const classes = createClass(width, message);
</script>

<div class={classes}>
	{#if label}
		<label class="label">
			<span class="label-text truncate">
				{label}
			</span>
			{#if inline}
				<slot />
			{/if}
		</label>
	{/if}
	{#if !inline}
		<slot />
	{/if}
	{#if message}
		<p class="label">
			<span class={messageClasses}>{messageText}</span>
		</p>
	{/if}
</div>
