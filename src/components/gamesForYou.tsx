import Image from "next/image";
import Link from "next/link";

type GamesForYouProps = {
  src: string,
  alt: string
}

const GamesForYou = ({ src, alt }: GamesForYouProps) => {
  return (
    <div className="w-[226px] h-[155px] bg-white rounded-2xl">
      <Link href="/">
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="rounded-xl object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default GamesForYou;
