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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCshIgoTawvRttVRSjRJ1trs2o1eUi0W-4",
  authDomain: "hwang-a4504.firebaseapp.com",
  projectId: "hwang-a4504",
  storageBucket: "hwang-a4504.appspot.com",
  messagingSenderId: "965177667331",
  appId: "1:965177667331:web:616610fe1b678271140336",
  measurementId: "G-L75D4PQL38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app, "gs://hwang-a4504.appspot.com/");
const imagesRef = ref(storage, "test");

const tomungRef = ref(imagesRef, "tomung.png");

const spaceRef = ref(storage, "test/tomung.png");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  console.log(spaceRef);
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
              <img src={`${spaceRef.bucket}/${spaceRef.fullPath}`} />
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
