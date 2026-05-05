import Image from "next/image";
import PrimaryButton from "./components/buttons/PrimaryButton";

export default function Home() {
  return (
    <div className="">
      <main className="">
        Hej Kia, vi tester nightclub
        <div>
          {" "}
          <PrimaryButton />
        </div>
      </main>
    </div>
  );
}
