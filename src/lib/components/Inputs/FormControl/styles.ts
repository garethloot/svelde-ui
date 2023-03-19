import type { TMessage } from '../message';
import type { TInputWidth } from '../types';

import { inputWidth } from '../../../utils/inputs';
import { messageClass } from '../message';
import { stylesToClass } from '$lib/utils/styles';

export const createClasses = (width: TInputWidth, message: TMessage) => {
	const formControlClasses: (string | undefined)[] = ['form-control'];

	if (width) formControlClasses.push(inputWidth(width));
	if (message) formControlClasses.push(messageClass(message));

	const messageClasses: (string | undefined)[] = ['label-text-alt'];
	if (message) messageClasses.push(messageClass(message));

	return {
		formControlClasses: stylesToClass(formControlClasses),
		messageClasses: stylesToClass(messageClasses)
	};
};
