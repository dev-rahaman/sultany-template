import SidebarTow from "./components/SidebarTow";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeffrey",
  description: "Jeffrey theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <SidebarTow />
        <div>{children}</div>
        <div className="flex items-center justify-center lg:ms-16">
          <p className="text-center">
            Copyright © Designed & Developed by Dev Rahaman 2023
          </p>
        </div>
      </body>
    </html>
  );
}
