import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./compontes/header";
import Footer from "./compontes/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "माऊली मंडप डेकोरेटर्स ॲण्ड साऊंड सिस्टम",
  description:
    "माऊली मंडप डेकोरेटर्स ॲण्ड साऊंड सिस्टम तुम्हाला तुमच्या खास प्रसंगांसाठी परिपूर्ण डेकोरेशन आणि साऊंड सिस्टीम सेवा बुक करण्याची सुविधा देते.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
