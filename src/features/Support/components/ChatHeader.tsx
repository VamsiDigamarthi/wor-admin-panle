import { Settings } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 border-b border-b-gray-200">
      <p className="font-medium text-lg">Live Chat & Support</p>
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center">
          <span className="w-[9px] h-[9px] bg-green-500 rounded-full"></span>
          <span className="text-sm text-green-500">Online</span>
        </div>
        <button className="cursor-pointer">
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
