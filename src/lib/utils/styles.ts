export const stylesToClass = (styles: (string | undefined)[]) => {
	return styles.filter((style) => style !== undefined).join(' ');
};
