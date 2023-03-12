import { messageClassAndText } from '../../utils/message';
const Colors = {
    primary: 'input-primary',
    secondary: 'input-secondary',
    accent: 'input-accent',
    info: 'input-info',
    success: 'input-success',
    warning: 'input-warning',
    ghost: 'input-ghost',
    link: 'input-link',
    neutral: ''
};
const Sizes = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg'
};
const MessageTypes = {
    success: 'input-success',
    warning: 'input-warning',
    error: 'input-error'
};
export const createClass = (color, size, bordered, message) => {
    const classes = ['input', Colors[color], Sizes[size]];
    if (bordered)
        classes.push('input-bordered');
    if (message)
        classes.push(messageClassAndText(message, MessageTypes).classText);
    return classes.join(' ');
};
