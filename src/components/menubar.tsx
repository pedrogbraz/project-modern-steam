import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

import { IoSettingsOutline, IoHomeOutline, IoExitOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiBooksLight, PiUsers, PiDownloadSimple } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { LiaUserEditSolid } from "react-icons/lia";

const Menubar = () => {
  const isOnline = true;

  return (
    <div
      className="fixed bg-[--navbarColor] flex flex-col justify-between w-[18%] h-[85%] rounded-2xl left-5 p-4 "
      id="ocultNavbar"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-sm text-[--whiteColor]">Your Username</h2>
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
            className="text-[--whiteColor] focus:text-[--themeColor] hover:text-[--themeColor] focus:bg-white/10 rounded-full p-2 duration-200"
          >
            <IoSettingsOutline size={20} />
          </Link>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-col justify-between font-light gap-1 text-[--whiteColor]">
          <Link
            href="/"
            className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-200"
          >
            <IoHomeOutline size={18} />
            <span className="text-sm">Início</span>
          </Link>
          <Link
            href="/"
            className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-300"
          >
            <PiBooksLight size={18} />
            <span className="text-sm">Biblioteca</span>
          </Link>
          <Link
            href="/"
            className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-300"
          >
            <AiOutlineUser size={18} />
            <span className="text-sm">Social</span>
          </Link>
          <Link
            href="/"
            className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-300"
          >
            <PiUsers size={18} />
            <span className="text-sm">Comunidade</span>
          </Link>
          <Link
            href="/"
            className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-300"
          >
            <PiDownloadSimple size={18} />
            <span className="text-sm">Downloads</span>
          </Link>
          <Link
            href="/"
            className="p-2 rounded-full px-3 flex items-center gap-2 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-300"
          >
            <IoIosAddCircleOutline size={18} />
            <span className="text-sm">Adicionar Jogos</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <Link
          href="/"
          className="p-2 rounded-full px-3 flex items-center text-[--whiteColor] gap-1.5 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-300"
        >
          <LiaUserEditSolid size={18} />
          <span className="text-sm">Perfil</span>
        </Link>
        <Link
          href="/"
          className="p-2 rounded-full px-3 flex items-center text-[--whiteColor] gap-1.5 focus:bg-white/10 hover:text-[--textColor] focus:text-[--themeColor] duration-300"
        >
          <IoExitOutline size={18} />
          <span className="text-sm">Sair</span>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
