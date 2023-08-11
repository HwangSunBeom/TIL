"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";

import ToasterContext from "../context/ToastContext";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="eng">
      <body className={`dark:bg-black`}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              enableSystem={false}
              attribute="class"
              defaultTheme="light"
            >
              <Lines />
              <Header />
              <ToasterContext />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
