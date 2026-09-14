export default interface ChatInterface {
  chatId: string;
  interlocutorId: string;
  interlocutorAvatar?: null | string;
  interlocutorName: string;
  lastMessageCreateAt: string;
  lastMessageIsRead: boolean;
  lastMessageSenderId: string;
  lastMessageText: string;
}
