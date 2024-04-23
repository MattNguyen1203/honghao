import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[6.19rem] fixed z-50 top-0 left-0">
      <nav className="size-full">
        <Image
          className="object-fill size-full"
          src={"/layouts/header/header.png"}
          alt="header"
          width={1600}
          height={100}
        />
      </nav>
    </header>
  );
}
