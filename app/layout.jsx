import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
