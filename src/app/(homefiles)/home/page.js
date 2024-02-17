import "../../../../styles/home.css"

export default function Home() {
  return (
    <div className="h-screen w-full overflow-scroll" id="homediv">
      <div className="h-screen w-full flex justify-center items-center backdrop-blur">
        <div className="flex justify-center item-center flex-col gap-4">
          <h1 className="text-center text-8xl font-bold font-sans mb-10">
            <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-violet-400 text-transparent bg-clip-text tracking-tighter inline-block">
              Express your ideas with anonymity
            </span>
          </h1>

          <div className="w-full flex justify-center px-2">
            <p className="text-zinc-300 text-center text-lg font-medium font-sans w-1/2 ">
              <a className="underline decoration-violet-500 font-bold text-white">Photon</a> allows you to write blogs, create articles, talk with people, and share your ideas with the world while staying anonymous.
              Have a new idea? <a class="underline decoration-violet-500 font-bold text-white">Photon</a> is always up for you
            </p>
          </div>

          <div className="w-full flex justify-center mt-10 gap-4">
            <button className="bg-zinc-200 duration-300 hover:bg-violet-600 text-gray-800 hover:text-white
            font-semibold py-3 px-6 border-2 border-gray-400 hover:border-violet-800 rounded-lg shadow">
              Get Started
            </button>

            <button className="bg-transparent duration-300 hover:bg-gray-100 text-white-800 hover:text-fuchsia-950  font-bold 
            py-3 px-6 border-2 border-white hover:border-violet-800 rounded-lg shadow">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
