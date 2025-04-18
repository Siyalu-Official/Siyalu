import Link from "next/link";

export function Navbar() {
  return (
    <div className="text-black flex mt-6 justify-between">
      <div className="text-green-300 text-[33px] font-bold underline">
        S<span className="font-[13]">|</span>Y
        <span className="font-[13]">|</span>L
        <span className="font-[13]">|</span>
      </div>

      <ol className="flex flex-row gap-6 font-[409] ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href="/our-produce">Our-Produce</Link>
        </li>
        <li>
          <Link href="/#where-to-buy">Where To Buy</Link>
        </li>
        <li>
          <Link href="/#gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href={"/#get-in-touch"}>Contact</Link>
        </li>
      </ol>
    </div>
  );
}
