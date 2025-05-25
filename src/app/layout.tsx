import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Daniel Vergara | Software Developer",
  description: "Daniel Vergara's portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${ubuntuMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} m-0 min-h-screen w-screen overflow-x-hidden p-0`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
