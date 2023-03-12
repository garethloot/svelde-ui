<script lang="ts">
	import { Button, Toggle, TextInput, Section, Swap } from '$lib';
	import MdAddCircle from 'svelte-icons/md/MdAddCircle.svelte';
	import MdAddCircleOutline from 'svelte-icons/md/MdAddCircleOutline.svelte';
	let checked = true;
</script>

<Section>
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Section>

<Section>
	<Button title="Button" />
	<Toggle
		bind:checked
		color="primary"
		inline
		width="lg"
		size="lg"
		label="Testing a name that is a bit longer to see what happens when there is a long text"
	/>
	<TextInput
		bordered
		width="lg"
		label="Testing a name that is a bit longer to see what happens when there is a long text"
	/>
	<Swap>
		<MdAddCircle slot="on" />
		<MdAddCircleOutline slot="off" />
	</Swap>
</Section>
