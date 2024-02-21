import { Inter } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import Navbar from "../../../components/navbar";
import "../../../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
