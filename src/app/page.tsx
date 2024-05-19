import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { IoPlay } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="p-3 space-y-6">
        <Header />
        <div className="md:flex">
          <div className="fixed bg-[--navbarColor] w-[16%] h-20 rounded-2xl left-5" id="ocultNavbar"></div>
          <div className="flex flex-col space-y-5 md:ml-[20%]">
            <h1 className="flex font-medium text-[--whiteColor]">
              Atualizações para você
            </h1>
            <div className="flex gap-4">
              <div className="w-[226px] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game02.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[226px] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <h1 className="flex font-medium text-[--whiteColor]">
              Jogados Recentemente
            </h1>
            <div className="flex gap-3">
              <div className="w-[69px] h-[155px] bg-white rounded-2xl hover:w-[225px] hover:h-[155px] duration-300">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game02.png"
                      alt="Op"
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
              <div className="w-[69px] h-[155px] bg-white rounded-2xl hover:w-[225px] hover:h-[155px] duration-300">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game02.png"
                      alt="Op"
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
              <div className="w-[69px] h-[155px] bg-white rounded-2xl hover:w-[225px] hover:h-[155px] duration-300">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game02.png"
                      alt="Op"
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
              <div className="w-[69px] h-[155px] bg-white rounded-2xl hover:w-[225px] hover:h-[155px] duration-300">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game02.png"
                      alt="Op"
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
              <div className="w-[69px] h-[155px] bg-white rounded-2xl hover:w-[225px] hover:h-[155px] duration-300">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game02.png"
                      alt="Op"
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
              <div className="w-[69px] h-[155px] bg-white rounded-2xl hover:w-[225px] hover:h-[155px] duration-300">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game02.png"
                      alt="Op"
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
            </div>
            <h1 className="flex font-medium text-[--whiteColor]">
              Todos os Jogos
            </h1>
            <div className="flex gap-3">
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game03.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game03.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game03.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game03.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game04.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game04.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game04.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game04.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game05.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game05.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game05.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game05.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[25%] h-[155px] bg-white rounded-2xl">
                <Link href="/">
                  <div className="relative h-full w-full">
                    <Image
                      src="/game.png"
                      alt="Op"
                      fill
                      sizes="100%"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
