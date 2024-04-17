'use client'
import { IoHomeOutline } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiSignInLight } from "react-icons/pi";
import {motion} from 'framer-motion'
import React from "react";

export const SideNav = function (props) {
    
    return (
        <div className="w-[15rem] px-4 py-2 h-full flex flex-col">
            <div className="w-full bg-[#924CBB] text-black font-bold p-2 text-lg h-[10rem] flex items-end justify-start rounded-lg">
                AnimeList
            </div>
            <motion.button initial={{translateY: 30, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 0.5}}} onClick={(e) => {
                e.preventDefault()
                props.setActiveTab('home')
            }} style={{ color: props.activeTab === "home" ? '#9811E6' : null, backgroundColor: props.activeTab === "home" ? '#9811E630' : null }} className='w-full transition-colors mt-2 py-3 text-lg rounded-lg flex items-center justify-start px-4 flex-row bg-slate-100'>
                <IoHomeOutline className="text-2xl"></IoHomeOutline>
                <div className="ml-3">Home</div>
            </motion.button>
            <motion.button initial={{translateY: 30, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 0.5, delay: 0.5}}} onClick={(e) => {
                e.preventDefault()
                props.setActiveTab('library')
            }} style={{ color: props.activeTab === "library" ? '#9811E6' : null, backgroundColor: props.activeTab === "library" ? '#9811E630' : null }} className='w-full transition-colors mt-2 py-3 text-lg rounded-lg flex items-center justify-start px-4 flex-row bg-slate-100'>
                <IoLibraryOutline className="text-2xl"></IoLibraryOutline>
                <div className="ml-3">Library</div>
            </motion.button>
            <motion.button initial={{translateY: 30, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 0.5, delay: 1}}} onClick={(e) => {
                e.preventDefault()
                props.setActiveTab('friends')
            }} style={{ color: props.activeTab === "friends" ? '#9811E6' : null, backgroundColor: props.activeTab === "friends" ? '#9811E630' : null }} className='w-full transition-colors mt-2 py-3 text-lg rounded-lg flex items-center justify-start px-4 flex-row bg-slate-100'>
                <LiaUserFriendsSolid className="text-2xl"></LiaUserFriendsSolid>
                <div className="ml-3">Friends</div>
            </motion.button>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 1.5}}} className="rounded-lg w-full h-full bg-slate-100 mt-2">
            </motion.div>
            <motion.button initial={{translateY: 30, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 0.5, delay: 2}}} className='w-full transition-colors hover:bg-[#9811E630] hover:text-[#9811E6] mt-2 py-3 text-lg rounded-lg flex items-center justify-start px-4 flex-row bg-slate-100'>
                <PiSignInLight className="text-2xl"></PiSignInLight>
                <div className="ml-3">Sign In</div>
            </motion.button>
        </div>
    )
}