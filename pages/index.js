import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { HiAnnotation } from "react-icons/hi";
import { FaRegLightbulb } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });
import NavBar from './navbar';
import Content from './content';
import Loader from './loader';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  var load

  function showPage() {
    setIsLoading(false)
  }

  function sleep() {
    load = setTimeout(showPage, 2000)
  }

  sleep()
  return (
    <>
      <Head>
        <title>William Yang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className="fixed inset-0 -z-10">
          <img src="/pexels-lucas-pezeta-5700932.jpg" className="w-screen h-screen object-cover" />
        </div>
        <div className={`fixed inset-0 duration-300 ${isLoading ? "z-20" : "-z-30 opacity-0"}`}>
          <Loader />
        </div>
        <Content />
        <NavBar />
      </main>
    </>
  )
}
