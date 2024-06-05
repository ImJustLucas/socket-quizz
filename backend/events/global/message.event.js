export const sendMessageGLobal = (io) => (msg) => {
  console.log(`message: ${msg}`);
  io.emit("message", msg);
};
