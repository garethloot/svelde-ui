const Colors = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    ghost: 'btn-ghost',
    link: 'btn-link',
    neutral: ''
};
const Sizes = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
};
const IconSize = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-9 w-9'
};
const Gap = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
};
export const createClass = (color, active, outline, loading, noAnimation, size, shape, width) => {
    const classes = ['btn', Gap[size], Colors[color], Sizes[size]];
    if (active)
        classes.push('btn-active');
    if (outline)
        classes.push('btn-outline');
    if (loading)
        classes.push('loading');
    if (noAnimation)
        classes.push('no-animation');
    if (shape === 'circle')
        classes.push('btn-circle');
    if (shape === 'square')
        classes.push('btn-square');
    if (width === 'wide')
        classes.push('btn-wide');
    if (width === 'full')
        classes.push('btn-block');
    return classes.join(' ');
};
export const createIconClasses = (size) => {
    return IconSize[size];
};
