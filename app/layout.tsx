import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes"


const geistSans = localFont({

    src: "./fonts/Sara1170470173201689.woff2",
    variable: "--font-awesome-webfont",

});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Kiwa",
  description: "Kiwa-bolg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>

    </html>
  );
}
