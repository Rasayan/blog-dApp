import { MdAdd } from "react-icons/md";

export default function Livefeed() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-10/12 h-11/12 flex flex-col justify-center items-start gap-6">
        <div className=" w-full backdrop:mb-10">
          <h2 className="font-sans font-extrabold text-3xl border-b-4 border-violet-400">
            Live feed
          </h2>
        </div>

        <div className="flex flex-col justify-center items-start gap-4">
          <div className="w-full felx flex-row justify-normal items-center gap-4">
            <p className="text-md font-extrabold text-white inline">
              Blockchain news
            </p>

            <p className="text-md font-medium text-zinc-300 inline ml-4">
              12 mins ago.
            </p>
          </div>

          <h1 className="font-sans font-extrabold text-8xl text-violet-400 m-0">
            How to Invest with Little Money in 2024: A Step-by-Step Guide for
            Beginners
          </h1>

          <div
            className="text-zinc-300 flex justify-normal 
            items-center gap-4 mt-3"
          >
            <p className="hover:text-white cursor-pointer">#Ethereum</p>
            <p className="hover:text-white cursor-pointer">#Crypto</p>
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
    </div>
  );
}
