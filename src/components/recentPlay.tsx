import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoPlay } from "react-icons/io5";

type RecentPlayProps = {
  src: string,
  alt: string
};

const RecentPlay = ({ src, alt }: RecentPlayProps) => {
  return (
    <div className="w-[69px] h-[155px] bg-white rounded-2xl hover:w-[225px] hover:h-[155px] duration-300">
      <Link href="/">
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="rounded-xl object-cover"
          />
          <Button
            className="absolute bg-[--themeColor] rounded-[6px] bottom-2 right-2 hover:bg-[--themeColor] w-8 h-8"
            size="icon"
          >
            <IoPlay className="text-[--whiteColor]" size={18} />
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default RecentPlay;
