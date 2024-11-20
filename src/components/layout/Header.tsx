"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "../ui/Search";

const Header: React.FC = () => {
  return (
    <header className="relative h-20 p-4">
      <nav className="h-full w-full">
        <ul className="flex items-center">
          <li className="mx-2">
            <Link href="/">
              <Image
                alt="storyloom logo"
                src="/icons/logo.svg"
                className=""
                width={200}
                height={100}
              />
            </Link>
          </li>

          <li className="mx-2 ml-auto">
            <Search />
          </li>

          <li className="mx-2">
            <Link className="nav-link" href="/add-blog">
              Start Writing
            </Link>
          </li>

          <li className="mx-2">
            <Link className="nav-link" href="/login">
              Log in
            </Link>
          </li>

          <li className="mx-2">
            <Link
              href="/sign-up"
              className="rounded-sm bg-blue-500 p-2 text-white transition-colors hover:bg-blue-400"
            >
              Sign up
            </Link>
          </li>

          {/* <li className="mx-2">
          <Link href="/profile">
            <i className="fa-regular fa-user text-xl"></i>
          </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
