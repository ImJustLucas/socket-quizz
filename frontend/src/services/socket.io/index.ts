import { io } from "socket.io-client";
import "./global/init.socket";

const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://10.2.161.137:1337";

export const socket = io("http://10.2.161.137:1337", {
  transports: ["websocket"],
  timeout: 10000,
});
