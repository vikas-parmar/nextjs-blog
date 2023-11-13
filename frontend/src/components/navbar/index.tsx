"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Bars2Icon, UserCircleIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className="relative w-full h-16 flex justify-between items-center p-4">
        {/* _______Logo and Search button________  */}
        <div className="flex items-center gap-4">
          <Link href="/" className="heading-1">
            BlogVoyage
          </Link>
          <div className="hidden md:block relative">
            <input
              type="text"
              className="rounded-full p-2 outline-none pl-4 bg-silver"
            />
            <MagnifyingGlassIcon className="absolute top-2 right-2 icons-small" />
          </div>
        </div>

        <div className="hidden sm:flex-center gap-4">
          <Link href={"/pages/addblog"}>
            <button className="flex-center text-button">
              <PencilSquareIcon className="icons-small" />
              Write
            </button>
          </Link>

          <Link href={"/auth/signup"}>
            <button className="filled-button">Sign Up</button>
          </Link>

          <Link href={"/auth/signin"}>
            <button className="text-button">Sign In</button>
          </Link>

          <Link href="/pages/profile">
            <UserCircleIcon className="w-9 cursor-pointer hover:text-green transition-colors" />
          </Link>
        </div>

        <div className="flex sm:hidden gap-4">
          <Link href="/pages/search">
            <MagnifyingGlassIcon className="icons-small" />
          </Link>

          <button onClick={() => setOpen(!open)}>
            <Bars2Icon className="icons-small" />
          </button>
          {open && (
            <div className="w-40 shadow-lg absolute top-12 right-4 z-40 rounded-md bg-white">
              <ul>
                <li className="flex-center p-1 hover:bg-silver transition-colors">
                  <Link href={"/pages/addblog"}>Write</Link>
                </li>
                <li className="flex-center p-1 hover:bg-silver transition-colors">
                  <Link href={"/auth/signup"}>Sign Up</Link>
                </li>
                <li className="flex-center p-1 hover:bg-silver transition-colors">
                  <Link href={"/auth/signin"}>Sign In</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
