import Link from "next/link";

export default function Relatedtotop() {
  return (
    <div className="w-full h-1/6 flex flex-wrap justify-around items-center gap-2 rounded-lg mt-10">
      <div
        className="w-2/5 h-full px-2 py-2 border-4 border-transparent border-l-violet-400 rounded-lg flex 
            flex-col justify-center items-start gap-3"
      >
        <div className="flex justify-normal items-cenetr gap-4">
          <Link href="#" className="text-white text-md font-bold">
            Blockchain News
          </Link>

          <p className="text-zinc-100">4 hours ago</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold font-sans">
            Top new cryptocurrencies to buy in 2024
          </h2>
        </div>
      </div>

      <div
        className="w-2/5 h-full px-2 py-2 border-l-4 border-violet-400 rounded-lg flex 
            flex-col justify-center items-start gap-3"
      >
        <div className="flex justify-normal items-cenetr gap-4">
          <Link href="#" className="text-white text-md font-bold">
            Blockchain News
          </Link>

          <p className="text-zinc-100">4 hours ago</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold font-sans">
            Top new cryptocurrencies to buy in 2024
          </h2>
        </div>
      </div>

      <div
        className="w-2/5 h-full px-2 py-2 border-l-4 border-violet-400 rounded-lg flex 
            flex-col justify-center items-start gap-3"
      >
        <div className="flex justify-normal items-cenetr gap-4">
          <Link href="#" className="text-white text-md font-bold">
            Blockchain News
          </Link>

          <p className="text-zinc-100">4 hours ago</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold font-sans">
            Top new cryptocurrencies to buy in 2024
          </h2>
        </div>
      </div>

      <div
        className="w-2/5 h-full px-2 py-2 border-l-4 border-violet-400 rounded-lg flex 
            flex-col justify-center items-start gap-3"
      >
        <div className="flex justify-normal items-cenetr gap-4">
          <Link href="#" className="text-white text-md font-bold">
            Blockchain News
          </Link>

          <p className="text-zinc-100">4 hours ago</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold font-sans">
            Top new cryptocurrencies to buy in 2024
          </h2>
        </div>
      </div>
    </div>
  );
}
