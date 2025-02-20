import type { Metadata } from "next";
import "../app/scss/global.scss"
import { Navbar } from "@/Components/Navbar";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Edge Impulse",
  description: "Download Videos, Reels, Shorts, and Social Media Analytics Quickly From Instagram, TikTok, YouTube, and More",
  verification: { google: "vm-ZPuD0U4gy5Xovzm_OittzTgkL3Rotj_I2KPSLVXE" },
  openGraph: {
    title: 'Social Media Video, Reels, Shorts & Analytics Downloader',
    description:
      "Download Videos, Reels, Shorts, and Social Media Analytics Quickly From Instagram, TikTok, YouTube, and More",
    // images: [
    //   {
    //     url: 'https://i.ibb.co/VD3T7xv/Tok-Script-Social-Share-Image-copy.jpg',
    //     width: 1600,
    //     height: 900,
    //     alt: 'TOKScript',
    //     type: 'image/jpeg',
    //   },
    // ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* <meta name="google-site-verification" content="vm-ZPuD0U4gy5Xovzm_OittzTgkL3Rotj_I2KPSLVXE" /> */}
      <link rel="icon" href="/favicon.ico" />

      </head>
      <body className="flex flex-col justify-between min-h-screen">
        <Navbar/>
        {children}
        {/* <Footerbox/> */}
        <Footer/>
        </body>
    </html>
  );
}
