import type { TMessage } from './message';
import type { TColor } from '../../types/color';
import type { TInputWidth } from './types';
import type { TSize } from '../../types/global';

export interface IInputProps {
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

export const InputPropsDefaults: IInputProps = {
	value: '',
	placeholder: '',
	label: '',
	color: 'neutral',
	width: undefined,
	bordered: false,
	message: undefined,
	size: 'md',
	disabled: false,
	inline: false,
	checked: false
};
