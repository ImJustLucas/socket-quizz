import { io } from "socket.io-client";
import "./global/init.socket";

export const socket = io("http://10.2.161.137:1337", {
  transports: ["websocket"],
  timeout: 10000,
});
