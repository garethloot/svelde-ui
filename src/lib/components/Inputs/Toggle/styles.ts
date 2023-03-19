import { stylesToClass } from '../../../utils/styles';
import type { TClassStyles } from '../../../types/global';
import { messageClass, type TMessage } from '../message';

const Colors: TClassStyles = {
	primary: 'toggle-primary',
	secondary: 'toggle-secondary',
	accent: 'toggle-accent',
	info: 'toggle-info',
	success: 'toggle-success',
	warning: 'toggle-warning',
	neutral: ''
};

const Sizes: TClassStyles = {
	xs: 'toggle-xs',
	sm: 'toggle-sm',
	md: 'toggle-md',
	lg: 'toggle-lg'
};

export const createClasses = (color: TColor, size: TSize, message: TMessage) => {
	const toggleClasses = ['toggle', Colors[color], Sizes[size]];

	if (message) toggleClasses.push(messageClass(message));

	return { toggleClasses: stylesToClass(toggleClasses) };
};

export type TColor = keyof typeof Colors;
export type TSize = keyof typeof Sizes;
