import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import DataProvider from "./dataProvider";

const font = Karla({ subsets: ["latin-ext"] });

export const metadata = {
  title: "Space Tourism",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon-32x32.png" />
      </head>
      <body className={font.className}>
        <main className="setting">
          <DataProvider>
            <Navbar />
            <SideBar />
            {children}
          </DataProvider>
        </main>
      </body>
    </html>
  );
}