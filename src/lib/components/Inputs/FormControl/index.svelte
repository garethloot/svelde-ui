<script lang="ts">
	import { createClasses, InputPropsDefaults, messageText } from './imports';

	export let { width, label, message, inline } = InputPropsDefaults;

	const { formControlClasses, messageClasses } = createClasses(width, message);
</script>

<div class={formControlClasses}>
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
			<span class={messageClasses}>{messageText(message)}</span>
		</p>
	{/if}
</div>
