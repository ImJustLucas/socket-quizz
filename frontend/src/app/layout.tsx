import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { authEvents } from "@/services/socket.io/global/init.socket";
import { PartyProvider } from "@/context/party-context";

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
        <PartyProvider>
          <div className="bg-[#26262A] min-h-screen min-w-screen flex flex-col justify-center items-center p-4 relative overflow-hidden text-white">
            <div className="absolute -bottom-4 -left-4 w-2/6 aspect-square bg-color-1 rounded-full blur-[200px]"></div>
            <div className="absolute -right-4 -top-4 w-2/12 aspect-square bg-color-2 rounded-full blur-[150px]"></div>
            {children}
          </div>
        </PartyProvider>
      </body>
    </html>
  );
}
