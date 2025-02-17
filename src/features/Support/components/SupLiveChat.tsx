import SearchCard from "../../../SharedComponents/Search";
import UserCard from "../../../SharedScreens/UserVerificationScreen/Components/UserCard";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const SupLiveChat = () => {
  return (
    <div className="w-full rounded-md shadow-custom bg-white">
      <ChatHeader />
      <div className="w-full h-[700px] flex">
        <div className="w-[22%] h-full bg-[#e5e7eb] p-2">
          <SearchCard width="100%" height="40px" />
          <UserCard />
          <UserCard />

          <UserCard />
        </div>
        <div className="w-[78%] flex flex-col h-full">
          <div className="w-full h-[90%] bg-white overflow-y-auto p-4 flex flex-col gap-3">
            <ChatMessage isSentByCurrentUser={true} />
            <ChatMessage isSentByCurrentUser={false} />
            <ChatMessage isSentByCurrentUser={true} />
            <ChatMessage isSentByCurrentUser={false} />
            <ChatMessage isSentByCurrentUser={true} />
            <ChatMessage isSentByCurrentUser={false} />
            <ChatMessage isSentByCurrentUser={true} />
            <ChatMessage isSentByCurrentUser={false} />
            <ChatMessage isSentByCurrentUser={true} />
            <ChatMessage isSentByCurrentUser={false} />
            <ChatMessage isSentByCurrentUser={true} />
            <ChatMessage isSentByCurrentUser={false} />
          </div>
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default SupLiveChat;
