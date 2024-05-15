import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="w-full h-[36.6rem]">
      <Image
        className="object-fill size-full"
        src={"/layouts/team/team.png"}
        alt="team"
        width={1600}
        height={500}
      />
    </section>
  );
}
