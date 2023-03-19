import type { TClassStyles } from '../../../types/global';
import { messageClass } from '../message';
import type { TMessage } from '../message';
import { stylesToClass } from '../../../utils/styles';

const Colors: TClassStyles = {
	primary: 'input-primary',
	secondary: 'input-secondary',
	accent: 'input-accent',
	info: 'input-info',
	success: 'input-success',
	warning: 'input-warning',
	ghost: 'input-ghost',
	link: 'input-link',
	neutral: undefined
};

const Sizes: TClassStyles = {
	xs: 'input-xs',
	sm: 'input-sm',
	md: 'input-md',
	lg: 'input-lg'
};

export const createClasses = (
	color: TColor,
	size: TSize,
	bordered: boolean | undefined,
	message: TMessage
) => {
	const inputClasses = ['input', Colors[color], Sizes[size]];

	if (bordered) inputClasses.push('input-bordered');
	if (message) inputClasses.push(messageClass(message));

	return { inputClasses: stylesToClass(inputClasses) };
};

export type TColor = keyof typeof Colors;
export type TSize = keyof typeof Sizes;
