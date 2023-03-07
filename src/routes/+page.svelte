<script lang="ts">
	import { Button, Toggle, TextInput, Section, Swap } from '$lib';
	import { MdAddCircle, MdAddCircleOutline } from 'svelte-icons/md';
	let checked = true;
	$: console.log(checked);
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
		width="lg"
		size="lg"
		label="Testing a name that is a bit longer"
	/>
	<TextInput bordered width="lg" label="Test" />
	<Swap>
		<MdAddCircle slot="on" />
		<MdAddCircleOutline slot="off" />
	</Swap>
</Section>
