import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useRef, useState } from "react";
import { fetchSupportChats, message } from "../redux/supportChatSlice";
import { useSocket } from "../../../Layout/SocketContext";

import io, { Socket } from "socket.io-client";
import { imageUrl } from "../../../Core/url";

export const useSupLiveChatScreenHook = () => {
  const { userProfile } = useSelector((state: RootState) => state.profile);

  const { socket, isConnected } = useSocket();
  const specificChatRef = useRef<Socket | null>(null);

  const { supportChats } = useSelector(
    (state: RootState) => state.supportChatsList
  );

  const [messages, setMessages] = useState<message[]>([]);
  const [selectChat, setSelectChat] = useState<string>("");
  const [imageSources, setImageSources] = useState<File | null>(null);
  const [audioSource, setAudioSource] = useState<Blob | null>(null); // State to hold audio Blob

  const [message, setMessage] = useState("");

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupportChats());
  }, [userProfile, dispatch]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Reference for the end of the messages container

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    specificChatRef.current = io(`${imageUrl}/new-support-chat`);

    specificChatRef.current.on(
      "message",
      ({ message }: { message: message }) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    );

    if (socket && isConnected && userProfile) {
      socket.emit("support-real-notification", {
        newUserId: userProfile?._id,
      });
    }
  }, [socket, isConnected, userProfile]);

  const socketConnectSpecificChat = ({ chatId }: { chatId: string }) => {
    if (specificChatRef.current && userProfile) {
      specificChatRef.current.emit("support-chat-connected", {
        userId: userProfile?._id,
        chatId,
        userType: "support",
      });
    }
  };

  useEffect(() => {
    if (supportChats?.length) {
      socketConnectSpecificChat({ chatId: supportChats[0]?._id });
      setMessages(supportChats[0]?.messages);
      setSelectChat(supportChats[0]?._id);
    }
  }, [specificChatRef, supportChats]);

  const handleSelectSpecificChat = (chatId: string) => {
    socketConnectSpecificChat({ chatId: chatId });
    const filterMessages = supportChats?.filter((chat) => chat._id === chatId);
    setMessages(filterMessages[0]?.messages);
    setSelectChat(chatId);
  };

  console.log("supportChats", supportChats);

  const handleSubmit = () => {
    if (message) {
      handleSendMessage();
    } else if (imageSources) {
      handleSendMedias({ type: "image", mediaSource: imageSources });
    } else {
      handleSendMedias({ type: "audio", mediaSource: audioSource });
    }
  };

  const handleSendMessage = () => {
    const newMessage = {
      chatId: selectChat,
      message,
      sender: "supportteam",
      userId: userProfile?._id,
      type: "text",
      _id: new Date().toISOString(),
      imageUrl: "",
      read: false,
    };

    specificChatRef.current?.emit("sendMessage", newMessage);

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
  };

  const handleSendMedias = ({ type, mediaSource }) => {};

  return {
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
  };
};
