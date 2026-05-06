import Image from "next/image";
import PrimaryButtons from "./components/buttons/PrimaryButtons";

export default function Home() {
  return (
    <div className="">
      <main className="">
        Hej Kia, vi tester nightclub
        <div>
          <PrimaryButtons textInput="click me" />
        </div>
      </main>
    </div>
  );
}
