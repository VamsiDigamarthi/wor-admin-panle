import { useRef, useState } from "react";
import { CircleStop, Play } from "lucide-react";
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
  // isSentByCurrentUser,
  image,
  message,
  type,
  sender,
}) => {
  const isSupportTeam = sender === "supportteam";
  const messageStyles = isSupportTeam ? COLORS.support : COLORS.captain;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlayback = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

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
      {type === "audio" && (
        <div className="w-[250px] h-[50px] bg-red-200 rounded-md flex justify-between items-center px-2">
          <audio
            ref={audioRef}
            src={`${imageUrl}/${message}`}
            onEnded={() => setIsPlaying(false)}
          />
          <span className="text-base font-semibold">Audio File</span>
          <button
            onClick={isPlaying ? handleStopPlayback : handleAudioPlayback}
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            {isPlaying ? <CircleStop size={30} /> : <Play size={30} />}
          </button>
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
