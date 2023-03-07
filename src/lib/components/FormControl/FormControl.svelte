<script lang="ts">
	import type { TInputWidth, TMessage } from '../../types/global';
	import { createClass, getMessage } from './styles';

	export let width: TInputWidth = undefined;
	export let label: string = '';
	export let message: TMessage = undefined;

	const classes = createClass(width, message);
	const { messageClasses, messageText } = getMessage(message);
</script>

<div class={classes}>
	{#if label}
		<label class="label">
			<span class="label-text">{label}</span>
			<slot name="label-extra" />
		</label>
	{/if}
	<slot />
	{#if message}
		<label class="label text-success">
			<span class={messageClasses}>{messageText}</span>
		</label>
	{/if}
</div>
