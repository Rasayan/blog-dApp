"use client"

import { Inter } from "next/font/google";
import Usenavbar from "../../components/usenavbar";
import "../../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Usenavbar/>
        {children}
      </body>
    </html>
  );
}