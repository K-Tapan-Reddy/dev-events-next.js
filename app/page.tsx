import Image from "next/image";
import ExploreBtn from "@/components/ExploreBtn"

export default function Home() {
  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev Event <br/> You Cannot Miss </h1>
      <p className="text-center mt-2">Hachathon, Meetup, Conferences all in one place</p>

      <ExploreBtn />
    </section>
  );
}
