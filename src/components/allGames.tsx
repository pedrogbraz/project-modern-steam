import Image from "next/image";
import Link from "next/link";

type AllGamesProps = {
  src: string
}

const AllGames = ({ src }: AllGamesProps) => {
  return (
    <div className="w-[25%] h-[155px] rounded-2xl hover:rotate-1 hover:scale-[1.03] duration-300">
      <Link href="/">
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt="Op"
            fill
            sizes="100%"
            className="rounded-xl object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default AllGames;
