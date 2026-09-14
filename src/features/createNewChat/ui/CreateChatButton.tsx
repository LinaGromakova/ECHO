import createNewChat from '../api/createNewChat';

const CreateChatButton = ({ targetUserId }: { targetUserId: string }) => {
  return (
    <button
      type='button'
      className='cursor-pointer bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors'
      onClick={() => {
        createNewChat(targetUserId);
      }}
    >
      Написать
    </button>
  );
};
export default CreateChatButton;
