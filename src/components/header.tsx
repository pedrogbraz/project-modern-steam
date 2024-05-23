import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaSteam } from "react-icons/fa";
import {
  IoSearchOutline,
  IoCartOutline,
  IoMenu,
  IoSettingsOutline,
  IoHomeOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import {
  IoIosNotificationsOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { PiBooksLight, PiUsers, PiDownloadSimple } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Header = () => {
  // TODO: Pegar futuramente do banco de dados e adicionar o modo "Ausente"
  const isOnline = true;

  return (
    <div className="flex justify-between p-2 md:gap-4">
      <div className="flex items-center gap-4 bg-[--navbarColor] px-3 rounded-full md:w-[18%] md:fixed">
        <div className="flex items-center py-1.5 gap-2">
          <FaSteam className="text-[--themeColor]" size={22} />
          <span className="text-white">Steam</span>
        </div>
      </div>
      <div className="flex items-center text-[--whiteColor] md:w-full md:mx-[20%]">
        <div className="flex items-center gap-1 absolute mx-3 text-white/20">
          <IoSearchOutline className="" />
          <span className="font-light text-sm">Buscar</span>
        </div>
        <input
          type="text"
          className="bg-[--navbarColor] pl-8 text-sm font-light pr-2 py-2 outline-none rounded-full md:w-[40%]"
        />
      </div>
      <div className="flex gap-2">
      <Sheet>
          <SheetTrigger className="">
            <IoCartOutline size={22} className="text-[--whiteColor] hover:text-white/80" />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-5 border-0 text-white bg-[--backgroundColor]">
            <SheetHeader>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h2 className="text-sm text-[--whiteColor]">
                      Your Username
                    </h2>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-[--textColor]">Online</span>
                      {isOnline ? (
                        <div className="size-[5px] bg-green-500 rounded-full"></div>
                      ) : (
                        <div className="size-[5px] bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  href="/"
                  className="text-[--textColor] focus:text-[--themeColor] hover:text-white/85 focus:bg-[--navbarColor] rounded-full p-2 duration-300"
                >
                  <IoSettingsOutline size={20} />
                </Link>
              </div>
            </SheetHeader>
            <Separator className=" bg-[--navbarColor]" />
           
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <IoMenu size={22} className="text-[--whiteColor] hover:text-white/80" />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-5 border-0 text-white bg-[--backgroundColor]">
            <SheetHeader>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h2 className="text-sm text-[--whiteColor]">
                      Your Username
                    </h2>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-[--textColor]">Online</span>
                      {isOnline ? (
                        <div className="size-[5px] bg-green-500 rounded-full"></div>
                      ) : (
                        <div className="size-[5px] bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  href="/"
                  className="text-[--textColor] focus:text-[--themeColor] hover:text-white/85 focus:bg-[--navbarColor] rounded-full p-2 duration-300"
                >
                  <IoSettingsOutline size={20} />
                </Link>
              </div>
            </SheetHeader>
            <Separator className=" bg-[--navbarColor]" />
            <div className="flex flex-col justify-between font-light gap-1 text-[--textColor]">
              <Link
                href="/"
                className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-[--navbarColor] hover:text-white/85 focus:text-[--themeColor] duration-300"
              >
                <IoHomeOutline size={18} />
                <span>Início</span>
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-[--navbarColor] hover:text-white/85 focus:text-[--themeColor] duration-300"
              >
                <PiBooksLight size={18} />
                <span>Biblioteca</span>
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-[--navbarColor] hover:text-white/85 focus:text-[--themeColor] duration-300"
              >
                <AiOutlineUser size={18} />
                <span>Social</span>
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-[--navbarColor] hover:text-white/85 focus:text-[--themeColor] duration-300"
              >
                <PiUsers size={18} />
                <span>Comunidade</span>
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-[--navbarColor] hover:text-white/85 focus:text-[--themeColor] duration-300"
              >
                <PiDownloadSimple size={18} />
                <span>Downloads</span>
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-[--navbarColor] hover:text-white/85 focus:text-[--themeColor] duration-300"
              >
                <IoIosAddCircleOutline size={18} />
                <span>Adicionar Jogos</span>
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-[--navbarColor] hover:text-white/85 focus:text-[--themeColor] duration-300"
              >
                <IoGameControllerOutline size={18} />
                <span>Meus Jogos</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
