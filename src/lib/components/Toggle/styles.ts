import type { TClassStyles, TColors, TMessage, TSize } from '../../types/global';
import { messageClassAndText } from '../../utils/message';

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

const MessageTypes: TClassStyles = {
	success: 'input-success',
	warning: 'input-warning',
	error: 'input-error'
};

export const createClass = (color: TColors, size: TSize, message: TMessage) => {
	const classes = ['toggle', Colors[color], Sizes[size]];
	if (message) classes.push(messageClassAndText(message, MessageTypes).classText);
	return classes.join(' ');
};
