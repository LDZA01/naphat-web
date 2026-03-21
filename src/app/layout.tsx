import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "../../components/Providers";
import LoadingScreen from "../../components/LoadingScreen";
import ScrollProgress from "../../components/ScrollProgress";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naphat Chartwanchai",
  description:
    "Computer Engineering student at Chulalongkorn University. Passionate about Software Engineering, Data Science, and AI.",
  keywords: [
    "Naphat Chartwanchai",
    "Software Engineer",
    "Full-stack Developer",
    "AI Engineer",
    "Chulalongkorn University",
  ],
  authors: [{ name: "Naphat Chartwanchai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Naphat Chartwanchai | Full-stack & AI Engineer",
    description:
      "Computer Engineering student at Chulalongkorn University. Passionate about Software Engineering, Data Science, and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <Providers>
          <LoadingScreen />
          <ScrollProgress />
          {children}
        </Providers>
      </body>
    </html>
  );
}
