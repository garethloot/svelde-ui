const InputWidths = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg'
};
export const inputWidth = (width) => {
    if (width)
        return InputWidths[width];
    return '';
};
