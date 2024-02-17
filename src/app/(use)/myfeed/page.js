import Myfeed from "../../../components/myfeed";
import Myfeedstories from "../../../components/myfeedstories";

export default function use() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-start items-center overflow-none
      pt-16 px-10"
      id="homediv"
    >
      <div className="h-1/6 w-full py-4 overflow-x-auto flex justify-start items-start gap-4">
        <Myfeedstories />
      </div>

      <div
        className="h-5/6 w-full py-4 overflow-x-auto flex justify-evenly items-start gap-4 
        flex-wrap"
      >
        <Myfeed />
      </div>
    </div>
  );
}
