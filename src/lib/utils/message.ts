import type { TClassStyles, TMessage } from '$lib/types/global';

export const messageClassAndText = (
	message: TMessage,
	MessageTypes: TClassStyles
): { classText: string; messageText: string } => {
	if (message === 'success' || (typeof message === 'object' && message?.success))
		return { classText: MessageTypes['success'], messageText: message.success };
	if (message === 'warning' || (typeof message === 'object' && message?.warning))
		return { classText: MessageTypes['warning'], messageText: message.warning };
	if (message === 'error' || (typeof message === 'object' && message?.error))
		return { classText: MessageTypes['error'], messageText: message.error };
	return { classText: '', messageText: '' };
};
