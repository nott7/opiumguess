import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Opium Guess",
  description: "WÆ.",
  icons: {
    icon: "/icons/favicon.ico",
    appleIcon: "/icons/apple-touch-icon.png",
    msIcon: "/icons/mstile-150x150.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
