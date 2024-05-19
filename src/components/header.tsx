import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaSteam } from "react-icons/fa";
import { IoSearchOutline, IoCartOutline, IoMenu } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center px-4 py-1.5 gap-2">
          <FaSteam className="text-[--themeColor]" size={22} />
          <span className="text-white">Steam</span>
        </div>
      </div>
      <div className="flex items-center text-[--whiteColor]">
        <IoSearchOutline className="absolute mx-3 text-white/20" />
        <input
          type="text"
          className="bg-[--navbarColor] pl-8 text-sm font-light pr-2 py-2 outline-none rounded-full w-48"
        />
      </div>
      <div className="flex gap-2">
        <Button className="shadow-none" size="icon">
          <IoCartOutline className="text-[--whiteColor]" size={20} />
        </Button>
        <Sheet>
          <SheetTrigger>
            <IoMenu size={22} className="text-[--whiteColor]" />
          </SheetTrigger>
          <SheetContent className="bg-[--whiteColor]">
            <SheetHeader>
              <div className="flex gap-3 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h2 className="text-sm">username</h2>
                  <div className="flex">
                    <span className="text-xs text-[--textColor]">Online</span>
                    
                  </div>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
