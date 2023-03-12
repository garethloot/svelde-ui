import { inputWidth } from '../../utils/inputs';
import { messageClassAndText } from '../../utils/message';
const MessageTypes = {
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error'
};
export const createClass = (width, message) => {
    const classes = ['form-control'];
    if (width)
        classes.push(inputWidth(width));
    if (message)
        classes.push(messageClassAndText(message, MessageTypes).classText);
    return classes.join(' ');
};
export const getMessage = (message) => {
    const classes = ['label-text-alt'];
    const { classText, messageText } = messageClassAndText(message, MessageTypes);
    if (message)
        classes.push(classText);
    return { messageClasses: classes.join(' '), messageText };
};
