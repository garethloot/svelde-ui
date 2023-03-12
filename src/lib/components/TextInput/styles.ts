import type { TClassStyles, TMessage, TSize } from '../../types/global';
import type { TTextInputColors } from './types';
import { messageClassAndText } from '../../utils/message';

const Colors: TClassStyles = {
	primary: 'input-primary',
	secondary: 'input-secondary',
	accent: 'input-accent',
	info: 'input-info',
	success: 'input-success',
	warning: 'input-warning',
	ghost: 'input-ghost',
	link: 'input-link',
	neutral: ''
};

const Sizes: TClassStyles = {
	xs: 'input-xs',
	sm: 'input-sm',
	md: 'input-md',
	lg: 'input-lg'
};

const MessageTypes: TClassStyles = {
	success: 'input-success',
	warning: 'input-warning',
	error: 'input-error'
};

export const createClass = (
	color: TTextInputColors,
	size: TSize,
	bordered: boolean | undefined,
	message: TMessage
) => {
	const classes = ['input', Colors[color], Sizes[size]];
	if (bordered) classes.push('input-bordered');
	if (message) classes.push(messageClassAndText(message, MessageTypes).classText);
	return classes.join(' ');
};
