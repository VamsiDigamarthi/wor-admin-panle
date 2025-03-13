import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useRef, useState } from "react";
import { fetchSupportChats, message } from "../redux/supportChatSlice";
import { useSocket } from "../../../Layout/SocketContext";

import io, { Socket } from "socket.io-client";
import { imageUrl } from "../../../Core/url";
import {
  handleSendImage,
  handleUnreadMessage,
} from "../services/supportchat.ser";
import { updateChatUnreadCount } from "../redux/unreadMessages";

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

    // if (socket && isConnected && userProfile) {
    //   socket.emit("support-real-notification", {
    //     newUserId: userProfile?._id,
    //   });
    // }

    const handleNewMessage = ({
      chatId,
      message,
      unreadCount,
    }: {
      chatId: string;
      message: string;
      unreadCount: number;
    }) => {
      console.log("new support messages", unreadCount, chatId, message);
      dispatch(updateChatUnreadCount({ chatId, unreadCount }));
    };

    if (!socket) return;

    socket.on("newSupportMessage", handleNewMessage);

    return () => {
      socket.off("newSupportMessage", handleNewMessage); // Cleanup correctly
    };
  }, [socket, isConnected, userProfile]);

  const socketConnectSpecificChat = async ({ chatId }: { chatId: string }) => {
    if (specificChatRef.current && userProfile) {
      specificChatRef?.current.emit("support-chat-connected", {
        userId: userProfile?._id,
        chatId,
        userType: "support",
      });

      if (socket) {
        socket.emit("support-real-notification", {
          chatId,
          newUserId: userProfile?._id,
        });
      }
    }

    if (!userProfile) return;

    await handleUnreadMessage({ chatId, userId: userProfile._id });
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

  // console.log("supportChats", supportChats);

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

  const handleSendMedias = async ({ type, mediaSource }) => {
    if (!userProfile && !selectChat) return;
    console.log("----------------------");

    const formData = new FormData();

    formData.append("image", mediaSource);

    formData.append("chatId", selectChat);
    formData.append("sender", "supportteam");
    formData.append("userId", userProfile?._id);
    formData.append("type", type);

    const resData = await handleSendImage(formData);

    if (resData) {
      type === "image" ? setImageSources(null) : setAudioSource(null);
      setMessages((prev) => [...prev, resData]);
    }
  };

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
    userProfile,
  };
};
