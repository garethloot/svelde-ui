import type { TInputWidth, TMessage } from '../../types/global';
export declare const createClass: (width: TInputWidth, message: TMessage) => string;
export declare const getMessage: (message: TMessage) => {
    messageClasses: string;
    messageText: string;
};
