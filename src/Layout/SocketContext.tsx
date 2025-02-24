import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
import { imageUrl } from "../Core/url";

// Define types for the SocketContext
interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
}

// Create a Context for the Socket
const SocketContext = createContext<SocketContextType | undefined>(undefined);

// Custom hook to use the SocketContext
export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

// SocketProvider to wrap the app and provide the socket instance
interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const socketRef = useRef<Socket | null>(null); // Store the socket instance in the ref
  const [isConnected, setIsConnected] = useState<boolean>(false); // Connection status

  useEffect(() => {
    // Initialize the socket instance and store it in the ref
    socketRef.current = io(imageUrl, {
      transports: ["websocket"],
      reconnectionAttempts: 200, // Retry 200 times if disconnected
      reconnectionDelay: 1000, // Wait 1 second before trying to reconnect
      reconnectionDelayMax: 5000, // Wait up to 5 seconds between reconnection attempts
    });

    const socket = socketRef.current; // Assign to socket variable from the ref

    socket.on("connect", () => {
      console.log("Socket connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.warn("Socket disconnected");
      setIsConnected(false);
    });

    socket.on("connect_error", (error: Error) => {
      console.error("Socket connection error:", error.message);
    });

    return () => {
      if (socket) {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("connect_error");
        socket.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
