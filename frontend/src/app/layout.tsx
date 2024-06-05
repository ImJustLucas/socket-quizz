import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { socket } from "@/services/socket.io";
import { authEvents } from "@/services/socket.io/global/init.socket";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socket quizz",
  description: "A simple quiz app using websockets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  authEvents.connect();
  authEvents.disconnect();
  authEvents.connectError();

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
