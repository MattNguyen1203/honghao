import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[600px]">
      <Image
        className="object-fill size-full"
        src={"/layouts/footer/footer.jpg"}
        alt="footer"
        width={1600}
        height={600}
      />
    </footer>
  );
}
