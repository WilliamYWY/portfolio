import { HiAnnotation } from "react-icons/hi";
import { FaRegLightbulb } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiPointySword } from "react-icons/gi";
import { AiTwotoneExperiment } from "react-icons/ai";
import React, { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(true);
    const handleClick = () => {
        setIsOpen(current => !current);
    }

    return (
        <div className="fixed top-1/2 bottom-0 m-auto left-0 font-serif h-full">
            <div className="h-[500px] w-24 hidden sm:flex bg-gradient-to-br from-violet-400 to-violet-100 absolute -z-10 blur-md rounded-br-full rounded-tr-full animate-pulse"></div>
            <nav id='navBar' className={`absolute hidden sm:flex duration-500 justify-center items-center from-purple-700 to-violet-400 bg-gradient-to-t h-[500px] w-24 rounded-br-full rounded-tr-full`} >
                <div className="flex flex-col h-5/6 justify-between mr-3">
                    <div className="group bg-gray-400 bg-opacity-0 rounded-lg transition-all duration-300 p-0.5 hover:bg-opacity-30">
                        <a className="flex flex-col items-center justify-center" href="#about">
                            <FaRegLightbulb className='text-4xl transition-all duration-300 bg-gray-400 bg-opacity-30 rounded-lg group-hover:bg-opacity-0' />
                            <p className="text-sm text-center">About Me</p>
                        </a>
                    </div>

                    <div className="group bg-gray-400 bg-opacity-0 rounded-lg transition-all duration-300 p-0.5 hover:bg-opacity-30">
                        <a className="flex flex-col items-center justify-center" href="#skills">
                            <GiPointySword className='text-4xl transition-all duration-300 bg-gray-400 bg-opacity-30 rounded-lg group-hover:bg-opacity-0' />
                            <p className="text-sm text-center">Skills</p>
                        </a>
                    </div>
                    <div className="group bg-gray-400 bg-opacity-0 rounded-lg transition-all duration-300 p-0.5 hover:bg-opacity-30">
                        <a className="flex flex-col items-center justify-center" href="#projects">
                            <AiTwotoneExperiment className='text-4xl transition-all duration-300 bg-gray-400 bg-opacity-30 rounded-lg group-hover:bg-opacity-0' />
                            <p className="text-sm text-center">Projects</p>
                        </a>
                    </div>
                    <div className="group bg-gray-400 bg-opacity-0 rounded-lg transition-all duration-300 p-0.5 hover:bg-opacity-30">
                        <a className="flex flex-col items-center justify-center" href="#contact">
                            <HiAnnotation className='text-4xl transition-all duration-300 bg-gray-400 bg-opacity-30 rounded-lg group-hover:bg-opacity-0' />
                            <p className="text-sm text-center">Contact Me</p>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}