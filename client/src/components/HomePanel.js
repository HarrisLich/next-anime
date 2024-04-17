'use client'
import { HiMagnifyingGlass } from "react-icons/hi2";
import React from "react";
import { TextField } from "@mui/material";
import { PiTextUnderlineFill } from "react-icons/pi";
import Slider from "react-slick";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";



export const HomePanel = function () {

    const slider = React.useRef(null)

    return (
        <div className="w-full border-l px-2 py-6 h-full flex flex-col">
            <TextField InputProps={{ sx: { borderRadius: '9999px' } }} label="Search"></TextField>
            <div className="mt-4 px-4 text-2xl">
                Seasonal Anime
            </div>
            <div className="w-[80%] h-fit">

            </div>
        </div>
    )
}
