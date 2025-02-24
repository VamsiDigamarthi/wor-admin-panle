import SearchCard from "../../../SharedComponents/Search";
import UserCard from "../../../SharedScreens/UserVerificationScreen/Components/UserCard";
import { useSupLiveChatScreenHook } from "../hook/SupLiveChatScreen.hook";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import EmptyMessageCard from "./EmptyMessageCard";

const SupLiveChat = () => {
  const {
    supportChats,
    handleSelectSpecificChat,
    messages,
    selectChat,
    setImageSources,
    handleSubmit,
    setAudioSource,
    setMessage,
    message,
    messagesEndRef,
  } = useSupLiveChatScreenHook();
  console.log(messages);

  return (
    <div className="w-full rounded-md shadow-custom bg-white">
      <ChatHeader />
      <div className="w-full h-[550px] flex">
        <div className="w-[22%] h-full bg-[#e5e7eb] p-2 flex flex-col gap-3">
          <SearchCard width="100%" height="40px" />
          <div className="w-full h-calc[100%-80px] overflow-y-scroll">
            {supportChats?.length > 0 && (
              <>
                {supportChats?.map((supChat, index) => (
                  <UserCard
                    key={index}
                    name={supChat?.userData?.name}
                    profilePic={supChat?.userData?.profilePic}
                    userVerified={supChat?.userData?.userVerified}
                    _id={supChat?._id}
                    isChatScreen={true}
                    passChatIdToParentComs={handleSelectSpecificChat}
                    isSelected={selectChat === supChat._id}
                    mobile={supChat?.userData?.mobile}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="w-[78%] flex flex-col h-full">
          <div className="w-full h-[90%] bg-white overflow-y-auto p-4 flex flex-col gap-3">
            {messages?.length ? (
              <>
                {messages?.map((msg, index) => (
                  <>
                    <ChatMessage
                      image={msg.mediaUrl}
                      message={msg.message}
                      sender={msg.sender}
                      type={msg.type}
                      key={index}
                      isSentByCurrentUser={true}
                    />
                    <div ref={messagesEndRef} />
                  </>
                ))}
              </>
            ) : (
              <EmptyMessageCard />
            )}
          </div>
          <ChatInput
            setImageSources={setImageSources}
            handleSubmit={handleSubmit}
            setAudioSource={setAudioSource}
            setMessage={setMessage}
            message={message}
          />
        </div>
      </div>
    </div>
  );
};

export default SupLiveChat;
