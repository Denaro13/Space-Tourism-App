"use client";
import logo from "../public/shared/logo.svg";
import iconHamburger from "../public/shared/icon-hamburger.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import links from "./api/links";
import { useContext } from "react";
import { DataContext } from "./dataProvider";

const Navbar = () => {
  const currentRoute = usePathname();
  const { isOpen, setIsOpen } = useContext(DataContext);
  return (
    <nav>
      <div className="px-8 md:pr-0 pt-4 flex items-center justify-between">
        <div className="w-full flex items-center justify-between ">
          <Image src={logo} alt="logo" className="w-16 h-16" />
          {!isOpen && (
            <button
              type="button"
              className="cursor-pointer md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Image src={iconHamburger} alt="icon hamburger" />
            </button>
          )}
        </div>
        <ul className="hidden md:inline md:bg-slate-400 p-8">
          {links.map((page, index) => {
            const { name, path } = page;
            return (
              <li
                key={index}
                className="hidden md:inline ml-5  md:text-base lg:text-xl"
              >
                <Link
                  href={path}
                  className={
                    currentRoute == path
                      ? "text-gray-300 uppercase md:hover:border-b-4 md:hover:pb-8 md:border-b-4 md:pb-8"
                      : "text-gray-300 uppercase md:hover:border-b-4 md:hover:pb-8"
                  }
                >
                  <span className="hidden mr-2 lg:inline text-white">
                    0{index}
                  </span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
