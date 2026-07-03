import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";

// Single font for the whole app, per the "old archive" design direction.
// Exposed as a CSS variable so globals.css controls where it's applied,
// rather than hard-coding a className on every element.
const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hush House Cookbook",
  description: "The librarian's recipe archive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={philosopher.variable}>
      <body>{children}</body>
    </html>
  );
}
