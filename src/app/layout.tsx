import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SecurityRestrictions from "./components/SecurityRestrictions";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dinámica Tiktok",
  description: "Multiplicamos en vivo.",
  other: {
    'http-equiv-cache-control': 'no-cache',
    'http-equiv-pragma': 'no-cache',
    'http-equiv-expires': '0',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased overflow-x-hidden`}
      >
        <SecurityRestrictions />
        {children}
      </body>
    </html>
  );
}
