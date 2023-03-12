<script>import { createClass } from "./import";
export let fluid = false;
export let xPadding = "xs";
export let yPadding = "xs";
export let backgroundColor = "none";
const { sectionClasses, containerClasses } = createClass(fluid, xPadding, yPadding, backgroundColor);
</script>

<section class={sectionClasses}>
	<div class={containerClasses}><slot /></div>
</section>
