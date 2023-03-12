import { messageClassAndText } from '../../utils/message';
const Colors = {
    primary: 'toggle-primary',
    secondary: 'toggle-secondary',
    accent: 'toggle-accent',
    info: 'toggle-info',
    success: 'toggle-success',
    warning: 'toggle-warning',
    neutral: ''
};
const Sizes = {
    xs: 'toggle-xs',
    sm: 'toggle-sm',
    md: 'toggle-md',
    lg: 'toggle-lg'
};
const MessageTypes = {
    success: 'input-success',
    warning: 'input-warning',
    error: 'input-error'
};
export const createClass = (color, size, message) => {
    const classes = ['toggle', Colors[color], Sizes[size]];
    if (message)
        classes.push(messageClassAndText(message, MessageTypes).classText);
    return classes.join(' ');
};
