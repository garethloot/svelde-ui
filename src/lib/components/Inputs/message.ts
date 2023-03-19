import type { TClassStyles } from '../../types/global';

export interface ISuccessMessage {
	success: string;
}
export interface IWarningMessage {
	warning: string;
}
export interface IErrorMessage {
	error: string;
}

export type TMessage =
	| undefined
	| 'success'
	| 'warning'
	| 'error'
	| ISuccessMessage
	| IWarningMessage
	| IErrorMessage;

export const MessageTypes: TClassStyles = {
	success: 'text-success',
	warning: 'text-warning',
	error: 'text-error'
};

function instanceOfSuccess(object: any): object is ISuccessMessage {
	return 'success' in object;
}

function instanceOfWarning(object: any): object is IWarningMessage {
	return 'warning' in object;
}

function instanceOfError(object: any): object is IErrorMessage {
	return 'error' in object;
}

export const messageClass = (message: TMessage): string | undefined => {
	if (message === 'success' || instanceOfSuccess(message)) return MessageTypes.success;
	if (message === 'warning' || instanceOfWarning(message)) return MessageTypes.warning;
	if (message === 'error' || instanceOfError(message)) return MessageTypes.error;
};

export const messageText = (message: TMessage): string => {
	if (instanceOfSuccess(message)) return message.success;
	if (instanceOfWarning(message)) return message.warning;
	if (instanceOfError(message)) return message.error;
	return '';
};
