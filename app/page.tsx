import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-screen bg-black">Navbar</div>
      <div className="h-screen grid grid-rows-4">
        <div className="bg-blue-500 row-span-3"></div>
        <div className="bg-green-500"></div>
      </div>
    </>
  );
}
