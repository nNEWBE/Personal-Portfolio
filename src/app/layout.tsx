import type { Metadata } from "next";
import { Lobster, Madimi_One, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/provider";

const madimi = Madimi_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-madimi",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SHUVO | Portfolio",
  description: "A personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${madimi.variable} ${lobster.variable} ${poppins.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
