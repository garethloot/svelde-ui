import type { TClassStyles, TInputWidth, TMessage } from '../../types/global';
import { inputWidth } from '../../utils/inputs';
import { messageClassAndText } from '../../utils/message';

const MessageTypes: TClassStyles = {
	success: 'text-success',
	warning: 'text-warning',
	error: 'text-error'
};

export const createClass = (width: TInputWidth, message: TMessage) => {
	const classes = ['form-control'];
	if (width) classes.push(inputWidth(width));
	if (message) classes.push(messageClassAndText(message, MessageTypes).classText);
	return classes.join(' ');
};

export const getMessage = (message: TMessage) => {
	const classes = ['label-text-alt'];
	const { classText, messageText } = messageClassAndText(message, MessageTypes);
	if (message) classes.push(classText);
	return { messageClasses: classes.join(' '), messageText };
};
