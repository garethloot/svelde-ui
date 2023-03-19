import type { TClassStyles } from '../../types/global';
import { stylesToClass } from '$lib/utils/styles';

const Colors: TClassStyles = {
	primary: 'btn-primary',
	secondary: 'btn-secondary',
	accent: 'btn-accent',
	info: 'btn-info',
	success: 'btn-success',
	warning: 'btn-warning',
	ghost: 'btn-ghost',
	link: 'btn-link',
	neutral: undefined
};

const Sizes: TClassStyles = {
	xs: 'btn-xs',
	sm: 'btn-sm',
	md: 'btn-md',
	lg: 'btn-lg'
};

const IconSizes: TClassStyles = {
	xs: 'h-3 w-3',
	sm: 'h-4 w-4',
	md: 'h-6 w-6',
	lg: 'h-9 w-9'
};

const Gap: TClassStyles = {
	xs: 'gap-1',
	sm: 'gap-2',
	md: 'gap-3',
	lg: 'gap-4'
};

const Shapes: TClassStyles = {
	circle: 'btn-circle',
	square: 'btn-square',
	default: undefined
};

const Widths: TClassStyles = {
	wide: 'btn-wide',
	full: 'btn-block',
	default: undefined
};

export const createClasses = (
	color: TColor,
	active: boolean,
	outline: boolean,
	loading: boolean,
	noAnimation: boolean,
	size: TSize,
	shape: TShape,
	width: TWidth
) => {
	const btnClasses = ['btn', Gap[size], Colors[color], Sizes[size], Shapes[shape], Widths[width]];

	if (active) btnClasses.push('btn-active');
	if (outline) btnClasses.push('btn-outline');
	if (loading) btnClasses.push('loading');
	if (noAnimation) btnClasses.push('no-animation');

	const iconClasses = [IconSizes[size]];

	return { btnClasses: stylesToClass(btnClasses), iconClasses: stylesToClass(iconClasses) };
};

export type TColor = keyof typeof Colors;
export type TShape = keyof typeof Shapes;
export type TSize = keyof typeof Sizes;
export type TWidth = keyof typeof Widths;
