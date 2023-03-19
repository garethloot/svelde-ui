import type { TClassStyles } from '../../types/global';
import type { TInputWidth } from './types';

const InputWidths: TClassStyles = {
	xs: 'max-w-xs',
	sm: 'max-w-sm',
	md: 'max-w-md',
	lg: 'max-w-lg'
};

export const inputWidth = (width: TInputWidth): string | undefined => {
	if (width) return InputWidths[width];
};
