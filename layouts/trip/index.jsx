import Image from "next/image";

export default function TripsForYou() {
  return (
    <section className="w-full h-[38.2rem] flex justify-center">
      <Image
        className="object-fill w-[90rem] h-full"
        src={"/layouts/trip/trip.png"}
        alt="trip"
        width={1600}
        height={500}
      />
    </section>
  );
}
