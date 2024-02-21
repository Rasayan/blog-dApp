import Addblog from "../../../components/addblog";

export default function use() {
  return (
    <div
      className="h-screen w-full flex justify-around items-center"
      id="homediv"
    >
        <Addblog />
    </div>
  );
}
