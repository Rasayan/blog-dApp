import Image from "next/image";

export default function Myfeed() {
  return (
    <div
      className="h-2/3 w-1/5 border-2 border-violet-400 rounded-lg flex flex-col
        justify-between items-center"
    >
      <Image
        className="rounded-lg"
        src="/mainbg.png"
        width={500}
        height={500}
        alt="gg"
      />

      <div
        className="w-full h-full px-4 py-2 flex flex-col justify-start
           items-start gap-2"
      >
        <div
          className="flex flex-col w-full h-full justify-start items-start
            gap-4"
        >
          <div
            className="w-full h-fit flex justify-start items-center gap-2
                font-medium font-sans text-zinc-300"
          >
            <p>#just</p>
            <p>#hopes</p>
          </div>
          <h2 className="font-extrabold font-sans text-3xl">Stakes are high</h2>
        </div>

        <div className="w-full h-full flex justify-normal items-center gap-4">
          <button
            className="px-4 py-1 duration-300 border-2 border-violet-400 rounded-lg bg-violet-400 font-sans
                 text-white font-bold hover:bg-violet-500 hover:border-violet-900"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
}
