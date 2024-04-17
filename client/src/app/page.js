'use client'
import Image from "next/image";
import React from "react";
import { SideNav } from "@/components/SideNav";
import { HomePanel } from "@/components/HomePanel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {

  const [activeTab, setActiveTab] = React.useState('home')

  return (
    <main className="flex flex-row h-screen w-full">
      <SideNav activeTab={activeTab} setActiveTab={setActiveTab}></SideNav>
      <HomePanel></HomePanel>
    </main>
  );
}
