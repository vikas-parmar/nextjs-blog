import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.jpeg";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-crystalBlue py-1 px-8">
      <div className="flex flex-4 items-center justify-between gap-4">
        <Link href="/pages/profile" className="link">
          <UserIcon className="icon" />
        </Link>
        <Link href="/pages/addblog">
          <PlusIcon className="icon" />
        </Link>
        <Link href="/pages/search">
          <MagnifyingGlassIcon className="icon" />
        </Link>
      </div>
      <div className="flex flex-1 justify-center">
        <Link href="/">
          <Image className="w-24" src={logo} alt="Picture of the company" />
        </Link>
      </div>
      <div className="flex flex-4 items-center justify-between gap-4">
        <Link href="/">Home</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
