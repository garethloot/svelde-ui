import type { TInputWidth, TMessage, TSize } from './global';
import type { TColor } from './color';

export interface ISharedInputProps {
	value?: string;
	placeholder?: string;
	label: string;
	color: TColor;
	bordered?: boolean;
	width: TInputWidth;
	message: TMessage;
	size: TSize;
	disabled: boolean;
	inline: boolean;
	checked?: boolean;
}
