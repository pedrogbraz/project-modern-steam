import AllGames from "@/components/allGames";
import GamesForYou from "@/components/gamesForYou";
import Header from "@/components/header";
import Menubar from "@/components/menubar";
import RecentPlay from "@/components/recentPlay";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { IoPlay } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="p-3 space-y-3">
        <Header />
        <div className="md:flex">
          <Menubar />
          <div className="flex flex-col space-y-5 md:ml-[21%]">
            <h1 className="flex font-medium text-[--whiteColor]">
              Atualizações para você
            </h1>
            <div className="flex gap-4">
              <GamesForYou src="/game.png" alt="Euro Truck" />
              <GamesForYou src="/game02.png" alt="Euro Truck" />
            </div>
            <h1 className="flex font-medium text-[--whiteColor]">
              Jogados Recentemente
            </h1>
            <div className="flex gap-3">
              <RecentPlay src="/game02.png" alt="Killing Floor" />
              <RecentPlay src="/game02.png" alt="Killing Floor" />
              <RecentPlay src="/game02.png" alt="Killing Floor" />
              <RecentPlay src="/game02.png" alt="Killing Floor" />
              <RecentPlay src="/game02.png" alt="Killing Floor" />
              <RecentPlay src="/game02.png" alt="Killing Floor" />
            </div>
            <h1 className="flex font-medium text-[--whiteColor]">
              Todos os Jogos
            </h1>
            <div className="flex gap-3">
              <AllGames src="/game03.png" />
              <AllGames src="/game03.png" />
              <AllGames src="/game03.png" />
              <AllGames src="/game03.png" />
            </div>
            <div className="flex gap-3">
              <AllGames src="/game04.png" />
              <AllGames src="/game04.png" />
              <AllGames src="/game04.png" />
              <AllGames src="/game04.png" />
            </div>
            <div className="flex gap-3">
              <AllGames src="/game05.png" />
              <AllGames src="/game05.png" />
              <AllGames src="/game05.png" />
              <AllGames src="/game05.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
