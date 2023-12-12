"use client";
import logo from "../public/shared/logo.svg";
import iconClose from "../public/shared/icon-close.svg";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "./dataProvider";
const SideBar = () => {
  const { isOpen, setIsOpen } = useContext(DataContext);

  const pages = ["home", "destination", "crew", "technology"];
  return (
    <div>
      <aside
        className={
          isOpen
            ? "px-4 pt-4 fixed top-0 left-0 w-1/2 h-full bg-gray-400 md:hidden translate-x-0 transition-all"
            : "fixed top-0 left-0 w-full h-full bg-white  -translate-x-full -translate-y-full md:hidden"
        }
      >
        <div className="w-full flex items-center justify-between">
          <Image src={logo} alt="logo" className="w-16 h-16" />
          <button
            type="button"
            className="cursor-pointer md:hidden animate-bounce"
            onClick={() => setIsOpen(false)}
          >
            <Image src={iconClose} alt="icon hamburger" />
          </button>
        </div>
        <ul className="mt-8">
          {pages.map((page, index) => {
            return (
              <li key={index} className=" block mb-4 ">
                <Link
                  href={page === "home" ? "/" : `/${page}`}
                  className="uppercase hover:text-black  hover:transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
