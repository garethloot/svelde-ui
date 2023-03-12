<script lang="ts">
	import type { TPaddingSize, TColor } from './types';
	import { createClass } from './import';

	export let fluid = false;
	export let xPadding: TPaddingSize = 'xs';
	export let yPadding: TPaddingSize = 'xs';
	export let backgroundColor: TColor = 'none';

	const { sectionClasses, containerClasses } = createClass(
		fluid,
		xPadding,
		yPadding,
		backgroundColor
	);
</script>

<section class={sectionClasses}>
	<div class={containerClasses}><slot /></div>
</section>
