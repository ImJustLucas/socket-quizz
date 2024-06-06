import { io } from "socket.io-client";
import "./global/init.socket";

const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "https://api-socket-quizz.onrender.com/";

export const socket = io("https://api-socket-quizz.onrender.com/", {
  transports: ["websocket"],
  timeout: 10000,
});
