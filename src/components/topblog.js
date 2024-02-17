import { MdAdd } from "react-icons/md";

import Link from "next/link";

export default function Topblog() {
  return (
    <div
      className="w-11/12 h-4/6 flex flex-col justify-center items-start 
          gap-14 border-2 px-8 border-violet-700 rounded-lg bg-gradient-to-r
           from-violet-600 via-violet-500 to-violet-400"
    >
      <div>
        <h2
          className="border-b-4 border-violet-900 font-bold text-white
              text-lg font-sans"
        >
          Top Choices
        </h2>
      </div>

      <div className="flex flex-col justify-center item-center gap-4">
        <div className="flex justify-normal items-cenetr gap-4">
          <Link href="#" className="text-white text-md font-bold">
            Blockchain News
          </Link>

          <p>4 hours ago</p>
        </div>

        <div>
          <h2 className="text-white text-7xl font-bold font-sans">
            How to Invest with Little Money in 2024: A Step-by-Step Guide for
            Beginners
          </h2>
        </div>

        <div
          className="text-zinc-300 flex justify-normal 
            items-center gap-4"
        >
          <p className="hover:text-zinc-900 cursor-pointer">#Ethereum</p>
        </div>

        <div className="mt-7 flex justify-normal items-center gap-4">
          <button
            className="px-5 py-2 duration-300 border-2 border-violet-400 rounded-lg bg-violet-400 font-sans
                 text-white font-bold hover:bg-violet-500 hover:border-violet-900"
          >
            Read Article
          </button>

          <button
            className="px-5 py-2 duration-300 border-2 border-transparent rounded-lg
                 font-sans text-white font-bold hover:border-violet-900 flex items-center gap-1"
          >
            Save for later
            <MdAdd className="font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
