export type TClassStyles = { [key: string]: string | undefined };
export type TSize = 'xs' | 'sm' | 'md' | 'lg';

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
	| TSuccessMessage
	| TWarningMessage
	| TErrorMessage;

export type TInputWidth = TSize | undefined;

export type TPaddingSize = TSize | 'none';
