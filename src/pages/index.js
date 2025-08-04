import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer"
import Section from "./Section/Home/Section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Navigation />
      <Section />
      <Footer />
    </div>
  );
}
