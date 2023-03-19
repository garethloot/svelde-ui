import { stylesToClass } from '../../utils/styles';
import type { TClassStyles } from '../../types/global';

const YPaddingSizes: TClassStyles = {
	xs: 'py-2',
	sm: 'py-4',
	md: 'py-8',
	lg: 'py-16',
	none: undefined
};

const XPaddingSizes: TClassStyles = {
	xs: 'px-2',
	sm: 'px-4',
	md: 'px-8',
	lg: 'px-16',
	none: undefined
};

const BackgroundColors: TClassStyles = {
	primary: 'bg-primary',
	'primary-focus': 'bg-primary-focus',
	secondary: 'bg-secondary',
	'secondary-focus': 'bg-secondary-focus',
	accent: 'bg-accent',
	'accent-focus': 'bg-accent-focus',
	info: 'bg-info',
	'info-focus': 'bg-info-focus',
	success: 'bg-success',
	'success-focus': 'bg-success-focus',
	warning: 'bg-warning',
	'warning-focus': 'bg-warning-focus',
	error: 'bg-error',
	'error-focus': 'bg-error-focus',
	neutral: 'bg-neutral',
	'neutral-focus': 'bg-neutral-focus',
	none: undefined
};

export const createClass = (
	fluid: boolean,
	yPadding: TPaddingSize,
	xPadding: TPaddingSize,
	bgColor: TBackgroundColor
): TClassStyles => {
	const sectionClasses = [BackgroundColors[bgColor]];

	const containerClasses = [YPaddingSizes[yPadding], XPaddingSizes[xPadding]];

	if (!fluid) containerClasses.push('container mx-auto');

	return {
		sectionClasses: stylesToClass(sectionClasses),
		containerClasses: stylesToClass(containerClasses)
	};
};

export type TBackgroundColor = keyof typeof BackgroundColors;
export type TPaddingSize = keyof typeof YPaddingSizes;
