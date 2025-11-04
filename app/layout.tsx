import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
import PostHogProvider from "@/providers/PostHogProvider";
import { ToastProvider } from "@/components/toast-1";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent Hub | Connect, Learn & Grow",
  description:
    "Discover developer events, meetups, and hackathons around the world. Powered by Next.js 16 and MongoDB.",
  keywords: [
    "developer events",
    "tech meetups",
    "hackathons",
    "Next.js 16",
    "MongoDB",
    "DevEvent Hub",
  ],
  authors: [{ name: "Richwell Antwi", url: "https://github.com/Richwell111" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <ToastProvider>
          <Navbar />
          <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
            <LightRays
              raysOrigin="top-center-offset"
              raysColor="#5dfeca"
              raysSpeed={0.5}
              lightSpread={0.9}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.02}
              noiseAmount={0.0}
              distortion={0.01}
            />
          </div>

          <main>{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
