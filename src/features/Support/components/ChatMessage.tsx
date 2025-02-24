import { imageUrl } from "../../../Core/url";

type ChatMessageProps = {
  isSentByCurrentUser: boolean;
  image: string;
  message: string;
  sender: string;
  type: string;
};

const COLORS = {
  support: {
    backgroundColor: "#e02e88",
    text: "#fff",
  },
  captain: {
    backgroundColor: "#f7f7f7",
    text: "#e02e88",
  },
};

const ChatMessage: React.FC<ChatMessageProps> = ({
  isSentByCurrentUser,
  image,
  message,
  type,
  sender,
}) => {
  const isSupportTeam = sender === "supportteam";
  const messageStyles = isSupportTeam ? COLORS.support : COLORS.captain;

  console.log(`${imageUrl}/${image}`);

  return (
    <div
      className={`max-w-[60%] flex items-start gap-2 ${
        isSupportTeam ? "ml-auto flex-row-reverse" : ""
      }`}
    >
      <img className="w-[40px] h-[40px] rounded-full bg-blue-400" alt="User" />
      {type === "image" && (
        <div className="w-[300px] h-[350px] rounded-md overflow-hidden bg-[#f7f7f7] p-3">
          <img
            className="w-full h-full rounded-md object-cover"
            alt="chat-image"
            src={`${imageUrl}/${image}`}
          />
        </div>
      )}
      {type === "text" && (
        <p
          style={{
            maxWidth: "100%",
            wordWrap: "break-word",
            backgroundColor: messageStyles.backgroundColor,
            color: messageStyles.text,
          }}
          className={`w-fit max-w-[100%] px-3 py-2 rounded-xl text-base font-medium ${
            isSupportTeam ? "text-left" : ""
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ChatMessage;
