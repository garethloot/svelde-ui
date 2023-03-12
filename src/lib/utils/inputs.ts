import type { TClassStyles, TInputWidth } from '../types/global';

const InputWidths: TClassStyles = {
	xs: 'max-w-xs',
	sm: 'max-w-sm',
	md: 'max-w-md',
	lg: 'max-w-lg'
};

export const inputWidth = (width: TInputWidth): string => {
	if (width) return InputWidths[width];
	return '';
};
