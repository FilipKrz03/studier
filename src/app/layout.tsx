import Providers from "@/context/ThemeProvider";
import Header from "./components/Header/Header";
import { Inter } from "next/font/google";
import "./globals.scss";
import MobileNav from "./components/MobileNav/MobileNav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studier",
  description: "Studier Aplication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
        {children}
        <MobileNav />
        </Providers>
        
      </body>
    </html>
  );
}
