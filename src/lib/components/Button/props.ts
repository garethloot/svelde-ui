import type { TColor, TSize, TShape, TWidth } from './styles';

type TProps = {
	title: string;
	color: TColor;
	shape: TShape;
	width: TWidth;
	size: TSize;
	outline: boolean;
	loading: boolean;
	noAnimation: boolean;
	active: boolean;
	disabled: boolean;
};

export const PropsDefaults: TProps = {
	title: '',
	color: 'neutral',
	shape: 'default',
	width: 'default',
	size: 'md',
	outline: false,
	loading: false,
	noAnimation: false,
	active: false,
	disabled: false
};
