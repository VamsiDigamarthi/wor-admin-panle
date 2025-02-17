import { Phone, Send, TextQuote } from "lucide-react";
import IconButton from "../../../SharedComponents/IconButton";

const ChatInput = () => {
  return (
    <div className="w-full flex justify-between items-center h-[10%] px-4">
      <div className="flex items-center w-[85%] gap-3">
        <TextQuote color="gray" />
        <input
          type="text"
          className="w-[80%] border border-gray-300 rounded-md px-2 h-[40px] outline-none"
          placeholder="Type your message here..!"
        />
      </div>
      <div className="flex items-center w-[22%] gap-2">
        <IconButton
          isDisplayBordered={false}
          bgColor="#3b82f6"
          title="Send"
          onClick={() => {}}
          textColor="#fff"
        >
          <Send color="#fff" />
        </IconButton>
        <IconButton
          isDisplayBordered={false}
          bgColor="#22c55e"
          title="Call"
          onClick={() => {}}
          textColor="#fff"
        >
          <Phone color="#fff" />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatInput;
