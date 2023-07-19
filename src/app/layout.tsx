import Providers from "@/context/Providers";
import Header from "./components/Header/Header";
import ProgressBarPage from "./UI/ProgressBar/ProgressBar";
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
        <div id="overlays" />
        <Providers>
          <ProgressBarPage />
          <Header />
          {children}
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
