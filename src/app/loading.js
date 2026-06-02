import Image from "next/image";

export default function Loading() {
  return (
    <section className="flex justify-center m-auto my-5 w-full h-auto">
      <Image
        src="/assets/loader/madbars.gif"
        width={100}
        height={100}
        alt="loading bars playing"
        loading="lazy"
      />
    </section>
  );
}
