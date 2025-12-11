import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoyTortaVegan - Tortas Veganas en Santiago de Chile",
  description: "Tortas veganas caseras, hechas con ingredientes naturales. Sabores únicos y 100% veganos.",
  keywords: [
    "tortas veganas",
    "pastelería vegana",
    "tortas veganas en Santiago",
    "soytortavegan",
    "tortas vegetarianas",
    "tortas naturales",
    "tortas sin azucar",
    "tortas de cumpleaños",
    "pasteleria santiago"
  ],
  openGraph: {
    title: "SoyTortaVegan – Tortas Veganas en Santiago de Chile",
    description: "Tortas veganas caseras, hechas con ingredientes naturales. Sabores únicos y 100% veganos.",
    url: "https://",
    siteName: "SoyTortaVegan",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
