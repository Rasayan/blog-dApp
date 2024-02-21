"use client";

import { CgProfile } from "react-icons/cg";
import { FiPlusSquare } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { PiBroadcastBold } from "react-icons/pi";

import Link from "next/link";

function Usenavbar() {
  return (
    <nav className="w-full bg-zinc-600 rounded-lg bg-opacity-50 fixed top-2 z-10 px-5">
      <div className="flex flex-row items-center justify-between py-3">
        <div className="w-1/2 ml-16">
          <Link href="/">
            <h2 className="text-2xl text-violet-400 font-bold ">Photon</h2>
          </Link>
        </div>

        <div className="w-1/2 mr-7">
          <ul className="h-fit items-center justify-center flex ">
            <li
              className="text-bold text-xl text-white py-0 md:px-6 text-center border-b-2 
                        md:border-b-0  hover:bg-violet-400  border-purple-900  md:hover:text-violet-400 
                        md:hover:bg-transparent"
            >
              <Link href="/">
                <CgProfile className="w-7 h-7 text-violet-400" />
              </Link>
            </li>
            <li
              className="text-bold text-xl text-white py-0 md:px-6 text-center border-b-2 
                        md:border-b-0  hover:bg-violet-400  border-purple-900  md:hover:text-violet-400 
                        md:hover:bg-transparent"
            >
              <Link href="/addblog">
                <FiPlusSquare className="w-7 h-7 text-zinc-400" />
              </Link>
            </li>
            <li
              className="text-bold text-xl text-white py-0 px-6 text-center  border-b-2 
                        md:border-b-0  hover:bg-violet-400  border-purple-900  md:hover:text-violet-400 
                        md:hover:bg-transparent"
            >
              <Link href="/topfeed">
                <BiBarChartAlt2 className="w-7 h-7 text-zinc-400 text-bold" />
              </Link>
            </li>

            <li
              className="text-bold text-xl text-white py-0 px-6 text-center  border-b-2 
                        md:border-b-0  hover:bg-violet-400  border-purple-900  md:hover:text-violet-400 
                        md:hover:bg-transparent"
            >
              <Link href="/myfeed">
                <BiBook className="w-7 h-7 text-zinc-400 text-bold" />
              </Link>
            </li>

            <li
              className="text-bold text-xl text-white py-0 px-6 text-center  border-b-2 
                        md:border-b-0  hover:bg-violet-400  border-purple-900  md:hover:text-violet-400 
                        md:hover:bg-transparent"
            >
              <Link href="/livefeed">
                <PiBroadcastBold className="w-7 h-7 text-zinc-400" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Usenavbar;
