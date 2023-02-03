import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaPython, FaSwift, FaJava, FaGoogleDrive } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiArduino, SiSolidity, SiBitcoin } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import React, { useState } from 'react';



export default function Content() {

    const skillType = {
        none: 0,
        python: 1,
        mysql: 2,
        arduino: 3,
        swift: 4,
        javascript: 5,
        solidity: 6,
        java: 7
    }

    const [skillInfo, setSkillInfo] = useState(skillType.none);

    function InfoClick(type) {
        if (type == 'python') {
            setSkillInfo(skillType.python);
        } else if (type == 'sql') {
            setSkillInfo(skillType.mysql);
        } else if (type == 'arduino') {
            setSkillInfo(skillType.arduino);
        } else if (type == 'swift') {
            setSkillInfo(skillType.swift);
        } else if (type == "javascript") {
            setSkillInfo(skillType.javascript);
        } else if (type == "solidity") {
            setSkillInfo(skillType.solidity);
        } else if (type == "java") {
            setSkillInfo(skillType.java);
        } else {
            setSkillInfo(skillType.none);
        }
    }
    return (
        <div className="flex flex-col items-center space-y-5 justify-between mt-9 mb-9 font-serif">
            <div id="about" className="w-5/6 sm:w-4/6 2xl:w-[1000px] relative group">
                <div className="bg-gradient-to-br from-violet-400 to-violet-100  w-full h-full inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                </div>
                <div className="bg-[#03001C] h-full w-full shadow-xl rounded-lg duration-200 relative text-white p-5 pb-20">
                    <h1 className="font-bold text-4xl">
                        About Me
                    </h1>
                    <span className="block bg-white absolute w-4/6 h-[1px] top-14 m-0"></span>
                    <h2 className="mt-5 mb-5 text-3xl font-bold ">
                        Hey, I&apos;m <span className="text-[#8D9EFF]">William Yang</span>
                    </h2>
                    <p className="text-xl mt-0 mb-5">
                        Software Engineer <br></br> Biomedical Engineering
                    </p>
                    <p className="text-xl mt-0 mb-5">
                        Passionate about building application, service and solution.
                        <br></br>
                        Experience in  <span className="text-[#8D9EFF] font-semibold">machine lerning</span>, <span className="text-[#8D9EFF] font-semibold">RESTful API</span> and <span className="text-[#8D9EFF] font-semibold">trading bot</span>.
                    </p>
                    <p className="text-xl mt-0">
                        Seeking to learn more about <span className="text-[#8D9EFF] font-semibold">AIoT</span>, <span className="text-[#8D9EFF] font-semibold">health technology</span>, <span className="text-[#8D9EFF] font-semibold">block chain</span> and <span className="text-[#8D9EFF] font-semibold">FinTech</span>.
                    </p>
                    <div className="absolute flex flex-row bottom-5 space-x-5">
                        <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY" className="">
                            <AiFillGithub className="text-2xl hover:scale-110 mt-2 duration-150" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/williamyy777/" className="">
                            <AiFillLinkedin className="text-2xl hover:scale-110 mt-2 duration-150" />
                        </a>
                    </div>

                </div>
            </div>
            <div id="skills" className="sm:flex sm:h-[500px] justify-between space-y-5 w-5/6 sm:flex-row sm:space-x-5 sm:space-y-0 sm:w-4/6 2xl:w-[1000px]">
                <div className="sm:h-full sm:flex-1 relative">
                    <div className="bg-gradient-to-br from-green-400 to-sky-300 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                    </div>
                    <div className="bg-[#03001C] h-full shadow-xl rounded-lg text-white p-5">
                        <h1 className="font-bold text-3xl">
                            Skills
                        </h1>
                        <ul className="mt-7 space-y-4 text-xl">
                            <li className={`bg-[#8D9EFF] relative flex flex-row justify-center items-center rounded-full hover:scale-105 cursor-pointer duration-200 ${skillInfo == skillType.python ? "sm:translate-x-[20%]" : ""}`}>
                                <div className="bg-gradient-to-br from-sky-300 to-green-400 w-full h-full hover:scale-105 inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                                </div>
                                <button className="w-full h-full  absolute rounded-full" onClick={() => InfoClick("python")}>
                                </button>
                                <FaPython className="inline-block mr-2" />
                                Python
                            </li>
                            <li className={`bg-[#8D9EFF] relative flex flex-row justify-center items-center rounded-full hover:scale-105 cursor-pointer duration-200 ${skillInfo == skillType.mysql ? "sm:translate-x-[20%]" : ""}`}>
                                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-full h-full hover:scale-105 inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                                </div>
                                <button className="w-full h-full absolute rounded-full" onClick={() => InfoClick("sql")}>
                                </button>
                                <GrMysql className="inline-block mr-2" />
                                MySQL
                            </li>
                            <li className={`bg-[#8D9EFF] relative flex flex-row justify-center items-center rounded-full hover:scale-105 cursor-pointer duration-200 ${skillInfo == skillType.arduino ? "sm:translate-x-[20%]" : ""}`}>
                                <div className="bg-gradient-to-br from-blue-600 to-sky-700 w-full h-full hover:scale-105 inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                                </div>
                                <button className="w-full h-full absolute rounded-full" onClick={() => InfoClick("arduino")}>
                                </button>
                                <SiArduino className="inline-block mr-2" />
                                Arduino
                            </li>
                            <li className={`bg-[#8D9EFF] relative flex flex-row justify-center items-center rounded-full hover:scale-105 cursor-pointer duration-200 ${skillInfo == skillType.swift ? "sm:translate-x-[20%]" : ""}`}>
                                <div className="bg-gradient-to-br from-teal-400 to-purple-700 w-full h-full hover:scale-105 inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                                </div>
                                <button className="w-full h-full absolute rounded-full" onClick={() => InfoClick("swift")}>
                                </button>
                                <FaSwift className="inline-block mr-2" />
                                Swift
                            </li>
                            <li className={`bg-[#8D9EFF] relative flex flex-row justify-center items-center rounded-full hover:scale-105 cursor-pointer duration-200 ${skillInfo == skillType.javascript ? "sm:translate-x-[20%]" : ""}`}>
                                <div className="bg-gradient-to-br from-orange-900 to-amber-200 w-full h-full hover:scale-105 inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                                </div>
                                <button className="w-full h-full absolute rounded-full" onClick={() => InfoClick("javascript")}>
                                </button>
                                <DiJavascript1 className="inline-block mr-2" />
                                HTML/CSS/JavaScript
                            </li>
                            <li className={`bg-[#8D9EFF] relative flex flex-row justify-center items-center rounded-full hover:scale-105 cursor-pointer duration-200 ${skillInfo == skillType.solidity ? "sm:translate-x-[20%]" : ""}`}>
                                <div className="bg-gradient-to-br from-red-500 to-indigo-600 w-full h-full hover:scale-105 inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                                </div>
                                <button className="w-full h-full absolute rounded-full" onClick={() => InfoClick("solidity")}>
                                </button>
                                <SiSolidity className="inline-block mr-2" />
                                Solidity
                            </li>
                            <li className={`bg-[#8D9EFF] relative flex flex-row justify-center items-center rounded-full hover:scale-105 cursor-pointer duration-200 ${skillInfo == skillType.java ? "sm:translate-x-[20%]" : ""}`}>
                                <div className="bg-gradient-to-br from-red-600 to-pink-800 w-full h-full hover:scale-105 inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                                </div>
                                <button className="w-full h-full absolute rounded-full" onClick={() => InfoClick("java")}>
                                </button>
                                <FaJava className="inline-block mr-2" />
                                JAVA
                            </li>

                        </ul>
                        <span className="block bg-white absolute w-4/6 h-[1px] top-14 m-0"></span>
                    </div>
                </div>
                <div className="sm:h-full h-[400px] sm:flex-1 relative">
                    <div className={`${skillInfo == skillType.python ? "" : "hidden"} bg-gradient-to-br from-sky-300 to-green-400 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.mysql ? "" : "hidden"} bg-gradient-to-br from-orange-500 to-red-600 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.arduino ? "" : "hidden"} bg-gradient-to-br from-blue-600 to-sky-700 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.swift ? "" : "hidden"} bg-gradient-to-br from-teal-400 to-purple-700 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.javascript ? "" : "hidden"} bg-gradient-to-br from-orange-900 to-amber-200 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.solidity ? "" : "hidden"} bg-gradient-to-br from-red-500 to-indigo-600 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.java ? "" : "hidden"} bg-gradient-to-br from-red-600 to-pink-800 flex-1 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`bg-[#03001C] flex justify-center items-center w-full absolute h-full shadow-xl rounded-lg delay-0 ${skillInfo == skillType.none ? "" : "opacity-0"}`}>
                        <img src="/arrow_left.png" className="animate-bounce hidden sm:block" />
                        <img src="/arrow_left.png" className="animate-bounce hidden sm:block" />
                        <img src="/arrow_left.png" className="animate-bounce hidden sm:block" />
                        <img src="/arrow_up.png" className="animate-bounce sm:hidden" />
                        <img src="/arrow_up.png" className="animate-bounce sm:hidden" />
                        <img src="/arrow_up.png" className="animate-bounce sm:hidden" />
                    </div>
                    <div className={`bg-[#03001C] w-full absolute h-full shadow-xl rounded-lg delay-0 p-5 ${skillInfo == skillType.python ? "bg-[#8D9EFF]" : "opacity-0"}`}>
                        <div className={`ease-in-out duration-[800ms] h-5/6 opacity-0 ${skillInfo == skillType.python ? "opacity-100" : ""}`}>
                            <h1 className="text-3xl font-bold mb-6">
                                Python
                            </h1>
                            <p className="text-2xl">
                                Experience:
                            </p>
                            <ul className="list-disc pl-9 pt-3 space-y-1 text-lg">
                                <li>
                                    Machine Learning (Pytorch, TensorFlow)
                                </li>
                                <li>
                                    Computer Vision (Opencv, Scikit-image)
                                </li>
                                <li>
                                    Data Cleaning (Pandas)
                                </li>
                                <li>
                                    RESTful API (Flask)
                                </li>
                                <li>
                                    Trading Bot & Trading Simulation (Binance API)
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`bg-[#03001C] w-full absolute h-full shadow-xl rounded-lg delay-0 p-5 ${skillInfo == skillType.mysql ? "bg-[#8D9EFF]" : "opacity-0"}`}>
                        <div className={`ease-in-out duration-[800ms] h-5/6 opacity-0 ${skillInfo == skillType.mysql ? "opacity-100" : ""}`}>
                            <h1 className="text-3xl font-bold mb-6">
                                Mysql
                            </h1>
                            <p className="text-2xl">
                                Experience:
                            </p>
                            <ul className="list-disc pl-9 pt-3 space-y-1 text-lg">
                                <li>
                                    <p>Storing and management of the data for <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1YiEGJ-OD-6-svDI6W6x3obZEoJ5d7_xK/view?usp=share_link" className="absolute z-20 underline ">hAIr</a> hAIr application.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`bg-[#03001C] w-full absolute h-full shadow-xl rounded-lg delay-0 p-5 ${skillInfo == skillType.arduino ? "bg-[#8D9EFF]" : "opacity-0"}`}>
                        <div className={`ease-in-out duration-[800ms] h-5/6 opacity-0 ${skillInfo == skillType.arduino ? "opacity-100" : ""}`}>
                            <h1 className="text-3xl font-bold mb-6">
                                Arduino
                            </h1>
                            <p className="text-2xl">
                                Experience:
                            </p>
                            <ul className="list-disc pl-9 pt-3 space-y-1 text-lg">
                                <li>
                                    <p>Built a simple device to test the moisture of user&apos;s skin.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`bg-[#03001C] w-full absolute h-full shadow-xl rounded-lg delay-0 p-5 ${skillInfo == skillType.swift ? "bg-[#8D9EFF]" : "opacity-0"}`}>
                        <div className={`ease-in-out duration-[800ms] h-5/6 opacity-0 ${skillInfo == skillType.swift ? "opacity-100" : ""}`}>
                            <h1 className="text-3xl font-bold mb-6">
                                Swift
                            </h1>
                            <p className="text-2xl">
                                Experience:
                            </p>
                            <ul className="list-disc pl-9 pt-3 space-y-1 text-lg">
                                <li>
                                    <p>Built an user interface for <a href="https://drive.google.com/file/d/1YiEGJ-OD-6-svDI6W6x3obZEoJ5d7_xK/view?usp=share_link" className="absolute z-20 underline">hAIr</a> hAIr application which allow users to rechieve historical data and receieve broadcasts from store.</p>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className={`bg-[#03001C] w-full absolute h-full shadow-xl rounded-lg delay-0 p-5 ${skillInfo == skillType.javascript ? "bg-[#8D9EFF]" : "opacity-0"}`}>
                        <div className={`ease-in-out duration-[800ms] h-5/6 opacity-0 ${skillInfo == skillType.javascript ? "opacity-100" : ""}`}>
                            <h1 className="text-3xl font-bold mb-6">
                                HTML/CSS/JavaScript
                            </h1>
                            <p className="text-2xl">
                                Experience:
                            </p>

                        </div>
                    </div>
                    <div className={`bg-[#03001C] w-full absolute h-full shadow-xl rounded-lg delay-0 p-5 ${skillInfo == skillType.solidity ? "bg-[#8D9EFF]" : "opacity-0"}`}>
                        <div className={`ease-in-out duration-[800ms] h-5/6 opacity-0 ${skillInfo == skillType.solidity ? "opacity-100" : ""}`}>
                            <h1 className="text-3xl font-bold mb-6">
                                Solidity
                            </h1>
                            <p className="text-2xl">
                                Experience:
                            </p>

                        </div>
                    </div>
                    <div className={`bg-[#03001C] w-full absolute h-full shadow-xl rounded-lg delay-0 p-5 ${skillInfo == skillType.java ? "bg-[#8D9EFF]" : "opacity-0"}`}>
                        <div className={`ease-in-out duration-[800ms] h-5/6 opacity-0 ${skillInfo == skillType.java ? "opacity-100" : ""}`}>
                            <h1 className="text-3xl font-bold mb-6">
                                JAVA
                            </h1>
                            <p className="text-2xl">
                                Experience:
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div id="projects" className="sm:flex m-0 justify-between w-5/6 sm:flex-row sm:w-4/6 2xl:w-[1000px] flex-wrap gap-4 space-y-5 sm:space-y-0">
                <div className="bg-black sm:h-[400px] h-[400px] sm:flex-1 rounded-3xl shadow-xl relative group hover:scale-105 duration-200">
                    <div className="bg-black h-full inset-0 m-auto absolute z-0 group-hover:scale-[102%] rounded-3xl overflow-hidden">
                        <h1 className="text-white m-5 font-bold text-3xl underline">
                            Trading Bot & Trading Simulation
                        </h1>
                        <p className="text-white font-normal m-5 sm:text-sm text-base">
                            #Python
                        </p>
                        <p className="text-white m-5 sm:text-base text-lg">
                            &bull; Script the strategy with Python and use Binance API to trade.
                        </p>
                        <div className={`bg-gray-500 h-full inset-0 m-auto absolute rounded-lg opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY/tradingBot" className="">
                                <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>
                    </div>
                    <div className={`${skillInfo == skillType.python ? "" : "hidden"} bg-gradient-to-br from-sky-300 to-green-400 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                </div>
                <div className="bg-black sm:h-[400px] h-[400px] sm:flex-1 rounded-3xl shadow-xl relative group hover:scale-105 duration-200">
                    <div className="bg-black h-full inset-0 m-auto absolute z-0 group-hover:scale-[102%] rounded-3xl overflow-hidden">
                        <h1 className="text-white m-5 font-bold text-3xl underline">
                            hAIr
                        </h1>
                        <p className="text-white font-normal m-5 sm:text-sm text-base">
                            #Python, #Swift, #MySQL
                        </p>
                        <p className="text-white h-1/2 m-5 sm:text-base text-lg text-ellipsis overflow-hidden">
                            &bull; Use <span className="text-[#8D9EFF]">Scikit-Image</span> to analyze photos.<br></br>
                            &bull; Use <span className="text-[#8D9EFF]">Flask RESTful API</span> to construct server side.<br></br>
                            &bull; Use <span className="text-[#8D9EFF]">PyMySQL</span> to manage data storage.<br></br>
                            &bull; Use <span className="text-[#8D9EFF]">SwiftUI</span> to build user interface.
                        </p>
                        <div className={`bg-gray-500 h-full inset-0 m-auto absolute rounded-lg opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1YiEGJ-OD-6-svDI6W6x3obZEoJ5d7_xK/view" className="">
                                <FaGoogleDrive className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>
                    </div>
                    <div className={`${skillInfo == skillType.python ? "" : "hidden"} bg-gradient-to-br from-sky-300 to-green-400 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.mysql ? "" : "hidden"} bg-gradient-to-br from-orange-500 to-red-600 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                    <div className={`${skillInfo == skillType.swift ? "" : "hidden"} bg-gradient-to-br from-teal-400 to-purple-700 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                </div>
                <div className="bg-black sm:h-[400px] h-[400px] sm:flex-1 rounded-3xl shadow-xl relative group hover:scale-105 duration-200">
                    <div className="bg-black h-full inset-0 m-auto absolute z-0 group-hover:scale-[102%] rounded-3xl overflow-hidden">
                        <h1 className="text-white m-5 font-bold text-3xl underline">
                            Solidity Learning Note
                        </h1>
                        <p className="text-white font-normal m-5 sm:text-sm text-base">
                            #Solidity
                        </p>
                        <p className="text-white h-1/2 m-5 sm:text-base text-lg text-ellipsis overflow-hidden">
                            &bull; Learning tips and basic of Solidity.
                        </p>
                        <div className={`bg-gray-500 h-full inset-0 m-auto absolute rounded-lg opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY/solidity-note" className="">
                                <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>

                    </div>
                    <div className={`${skillInfo == skillType.solidity ? "" : "hidden"} bg-gradient-to-br from-red-500 to-indigo-600 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                </div>
                <div className="bg-black sm:h-[400px] h-[400px] sm:flex-1 rounded-3xl shadow-xl relative group hover:scale-105 duration-200">
                    <div className="bg-black h-full inset-0 m-auto absolute z-0 group-hover:scale-[102%] rounded-3xl overflow-hidden">
                        <h1 className="text-white m-5 font-bold text-3xl underline">
                            Triplet Loss
                        </h1>
                        <p className="text-white font-normal m-5 sm:text-sm text-base">
                            #Python
                        </p>
                        <p className="text-white h-1/2 m-5 sm:text-base text-lg text-ellipsis overflow-hidden">
                            &bull; Loss function that can be use to determine the similarity of arrays.<br></br>
                            &bull; Widely used at speaker verification.
                        </p>
                        <div className={`bg-gray-500 h-full inset-0 m-auto absolute rounded-lg opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY/TripletLoss-note" className="">
                                <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>
                    </div>
                    <div className={`${skillInfo == skillType.python ? "" : "hidden"} bg-gradient-to-br from-sky-300 to-green-400 h-full inset-0 m-auto absolute -z-10 blur-md delay-200 duration-200 animate-pulse`}>
                    </div>
                </div>
            </div>
            <div id="resume" className="w-5/6 sm:w-4/6 2xl:w-[1000px] h-[500px] relative duration-200 group hover:scale-105">
                <div className="bg-gradient-to-br from-violet-400 to-violet-100  w-full h-full inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                </div>
                <div className="w-full h-full overflow-hidden relative">
                    <div className="bg-black rounded-lg w-full h-full inset-0 m-auto absolute -z-[9]">
                    </div>
                    <img src="/Resume_Wei-Yu Yang_new.png" className="scale-[93%] w-full h-full object-cover object-top rounded-lg duration-200 group-hover:blur-sm" />
                    <div className={`bg-gray-500 h-full inset-0 m-auto absolute rounded-lg opacity-0 group-hover:opacity-30 duration-200`}>
                    </div>
                    <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1brKOfYYoySbvWGH32lcXB7X54RLNPkks/view?usp=share_link" className="">
                            <FaGoogleDrive className="text-4xl hover:scale-110 duration-150 text-white font-bold" />
                        </a>
                    </div>
                    <div className="h-1/3 flex justify-center items-center z-10 absolute -top-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:translate-y-[200%] duration-200">
                        <h1 className="text-white font-bold text-4xl">
                            Resume
                        </h1>
                    </div>
                </div>
            </div>
            <div id="contact" className="w-5/6 sm:w-4/6 2xl:w-[1000px] h-[500px] relative group">
                <img src="/icons8-mail-96.png" className="absolute z-10 bottom-7 -right-10 sm:scale-[150%] hidden sm:block" />
                <div className="bg-gradient-to-br from-violet-400 to-violet-100  w-full h-full inset-0 m-auto absolute -z-10 blur-md duration-200 animate-pulse">
                </div>
                <div className="bg-[#03001C] h-full w-full shadow-xl rounded-lg duration-200 relative text-white p-5 pb-20">
                    <h1 className="font-bold text-4xl">
                        Contact Me
                    </h1>
                    <p className="mt-3 text-lg">
                        Leave your contact information below
                    </p>
                    <span className="block bg-white absolute w-4/6 h-[1px] top-14 m-0"></span>
                    <form target="_blank" rel="noreferrer" action="https://formsubmit.co/williamYY@altmails.com" method="POST">
                        <div className="flex flex-col justify-between pt-5 space-y-5 text-black">
                            <input name="name" placeholder="Name" className=" w-5/6 rounded-md p-1" required />
                            <input name="email" type="email" placeholder="E-mail" className=" w-5/6 rounded-md p-1" required />
                            <textarea name="message" placeholder="Content" rows="8" className="p-1 rounded-md w-5/6" required></textarea>
                            <button type="submit" className="bg-white w-14 rounded-md">Send</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}