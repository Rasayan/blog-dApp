import Topblog from "../../../components/topblog";
import Relatedtotop from "../../../components/relatedtotop";

export default function use() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-around items-center overflow-none
      mt-10"
      id="homediv"
    >
      <div className="h-screen w-screen overflow-x-auto flex flex-col justify-center items-center py-10">
        <Topblog />

        <Relatedtotop />
      </div>
    </div>
  );
}
