"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footerbox = () => {
  return (
    <div className='border-t py-6 bg-[#f7f8f9]'>
      {/* bg-[#b1c1ff] */}
      <div className='m-auto max-w-[1300px] w-11/12'>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:pt-6 pt-0 pb-10'>
          <div>
            <Link href="/" className='sm:block flex items-center justify-center'><img src="/Images/Logo.png" alt="" className="max-h-[60px]" /></Link>
            <p className='text-sm sm:max-w-[90%] sm:py-5 py-4 opacity-90 sm:text-start text-center'>Dash Social download is a versatile project allowing users to easily download videos from our website.</p>
            <div className='flex items-center sm:justify-start justify-center gap-2 pt-3'>
              <p className='bg-[#0562ff] text-[#fff] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <FaFacebookF size={20} />
              </p>
              <p className='text-[#fff] w-[40px] h-[40px] rounded-full flex items-center justify-center' style={{ background: "linear-gradient(to right,#3f5efbab,#fc466b)" }}>
                <FaInstagram size={20} />
              </p>
              <p className='bg-[#CD201F] text-[#fff] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <FaYoutube size={20} />
              </p>
              <p className='bg-[#010101] text-[#fff] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <FaTiktok size={20} />
              </p>
            </div>
          </div>
          {/* border-b-2 */}
          <div className='flex flex-col gap-2 text-[#202020] sm:text-base text-sm font-medium sm:text-start text-center sm:pl-[50px] sm:pt-0 pt-8'>
            <h1 className="font-semibold sm:text-base text-sm opacity-90 pb-3 text-[#000000]">Tiktok Links</h1>
            <Link href="/tiktok/analytics" className='hover:text-[#5f5f5fe0]'> <i>Analytics</i></Link>
            <Link href="/tiktok/hashtag-generator" className='hover:text-[#5f5f5fe0]'> <i>Hashtag Generator</i></Link>
            <Link href="/tiktok/video-downloader" className='hover:text-[#5f5f5fe0]'> <i>Video Downloader</i></Link>
            <Link href="/tiktok/voice-generator" className='hover:text-[#5f5f5fe0]'> <i>Voice Generator</i></Link>
            <Link href="/tiktok/money-calculator" className='hover:text-[#5f5f5fe0]'> <i>Money Calculator</i></Link>
            <Link href="/tiktok/followers-counter" className='hover:text-[#5f5f5fe0]'> <i>Followers Counter</i></Link>
            <Link href="/tiktok/video-views" className='hover:text-[#5f5f5fe0]'> <i>Video Views</i></Link>
            <Link href="/tiktok/compare-users" className='hover:text-[#5f5f5fe0]'> <i>Compare Users</i></Link>
          </div>
          <div className='flex flex-col gap-2 text-[#202020] font-medium sm:text-base text-sm sm:text-start text-center sm:pl-[50px] md:pt-0 pt-8'>
            <h1 className="font-semibold sm:text-base text-sm opacity-90 pb-3 text-[#000000]">Instagram Links</h1>
            <Link href="/instagram/videos" className='hover:text-[#5f5f5fe0]'><i>Videos</i></Link>
            <Link href="/instagram/story" className='hover:text-[#5f5f5fe0]'><i>Story</i></Link>
            <Link href="/instagram/reels" className='hover:text-[#5f5f5fe0]'><i>Reels</i></Link>
            <Link href="/instagram/photos" className='hover:text-[#5f5f5fe0]'><i>Photos</i></Link>
            {/* <Link href="/instagram-igtv" className='hover:text-[#5f5f5fe0]'><i>Instagram IGTV</i></Link> */}
          </div>
          <div className='flex flex-col gap-2 text-[#202020] font-medium sm:text-base text-sm sm:text-start text-center sm:pl-[50px] lg:pt-0 pt-8'>
            <h1 className="font-semibold sm:text-base text-sm opacity-90 pb-3 text-[#000000]">Facebook Links</h1>
            <Link href="/facebook/video-downloader" className='hover:text-[#5f5f5fe0]'><i>Videos</i></Link>
            <Link href="/facebook/story-downloader" className='hover:text-[#5f5f5fe0]'><i>Story</i></Link>
            <Link href="/facebook/reels-downloader" className='hover:text-[#5f5f5fe0]'><i>Reels</i></Link>
            <Link href="/facebook/photos-downloader" className='hover:text-[#5f5f5fe0]'><i>Photos</i></Link>
            <Link href="/facebook/profile-downloader" className='hover:text-[#5f5f5fe0]'><i>Profile</i></Link>
            <Link href="/facebook/music-downloader" className='hover:text-[#5f5f5fe0]'><i>Music</i></Link>
          </div>
          <div className='flex flex-col gap-2 text-[#202020] font-medium sm:text-base text-sm sm:text-start text-center sm:pl-[50px] lg:pt-0 pt-8'>
            <h1 className="font-semibold sm:text-base text-sm opacity-90 pb-3 text-[#000000]">Youtube Links</h1>
            <Link href="/youtube/profile" className='hover:text-[#5f5f5fe0]'><i>Profile</i></Link>
            <Link href="/youtube/videos" className='hover:text-[#5f5f5fe0]'><i>Videos</i></Link>
            <Link href="/youtube/playlist" className='hover:text-[#5f5f5fe0]'><i>Playlist</i></Link>
            <Link href="/youtube/shorts" className='hover:text-[#5f5f5fe0]'><i>Shorts</i></Link>
          </div>
          {/* <div className='flex flex-col gap-2 text-[#202020] font-medium text-base text-center'>
            <h1 className="font-semibold text-base opacity-90 pb-3 text-[#000000]">Contact Us</h1>
            <p className='font-semibold'>Phone no.<i className='font-normal text-[#202020]'> +923178934123</i></p>
            <p className='font-semibold'>Address:<i className='font-normal text-[#202020]'> Kohinoor, Faisalabad</i></p>
            <div className='flex items-center justify-center gap-2 pt-3'>
              <p className='bg-[#fff] text-[#181818e0] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <FaFacebookF />
              </p>
              <p className='bg-[#fff] text-[#181818e0] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <FaInstagram />
              </p>
              <p className='bg-[#fff] text-[#181818e0] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <FaXTwitter />
              </p>
            </div>
          </div> */}
        </div>


        <div className='flex items-center md:flex-row flex-col md:gap-4 gap-2 md:justify-between justify-center sm:pt-5 pt-3 border-t border-[#202020] text-[#202020]'>
          <p>We are not affiliated with social media</p>
          <p>© 2024 Dash Social Download. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
