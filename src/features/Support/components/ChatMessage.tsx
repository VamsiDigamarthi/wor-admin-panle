type ChatMessageProps = {
  isSentByCurrentUser: boolean;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ isSentByCurrentUser }) => {
  return (
    <div
      className={`max-w-[60%] flex items-start gap-2 ${
        isSentByCurrentUser ? "ml-auto flex-row-reverse" : ""
      }`}
    >
      <img className="w-[40px] h-[40px] rounded-full bg-blue-400" alt="User" />
      <p
        className={`w-[calc(100%-50px)] p-3 rounded-xl text-base font-medium ${
          isSentByCurrentUser
            ? "bg-blue-500 text-white"
            : "bg-[#e5e7eb] text-black"
        }`}
      >
        Hi, I'm having issues with my recent order #45678. Can you help?
      </p>
    </div>
  );
};

export default ChatMessage;
