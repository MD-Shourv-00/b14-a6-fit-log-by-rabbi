"use client";

import Image from "next/image";
import Link from "next/link";
import navLogo from "@/app/assets/logo.png";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const activeMenu = usePathname();
  const [smallDevice, setSmallDevice] = useState(false);

  const handleHamburgerMenu = () => {
    setSmallDevice((prev) => !prev);
  };

  const handleMenuClick = () => {
    setSmallDevice(false);
  };

  return (
    <nav className="relative mb-10 border-b border-b-(--secondary-background) py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={navLogo}
            alt="Dumbbell logo"
            width={27}
            height={25}
          />

          <span className="font-(family-name:--primary-font) text-2xl text-(--primary-text-color)">
            FITLOG
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 sm:flex">
          <Link
            href="/"
            className={`hover:text-(--common-color) ${
              activeMenu === "/" ? "manuCurrentState" : ""
            }`}>
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`hover:text-(--common-color) ${
              activeMenu === "/my-plan"
                ? "manuCurrentState"
                : ""
            }`}>
            My plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/"
            className="flex items-center gap-2">
            Plan
            <span className="rounded-full bg-(--common-color) px-3 py-1 text-sm text-(--primary-background)">
              0
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2">
            Saved
            <span className="rounded-full border-2 border-(--secondary-text-color) px-3 py-1 text-sm">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-4 sm:hidden">
          <Link
            href="/"
            className="flex items-center gap-1">
            Plan
            <span className="rounded-full bg-(--common-color) px-2 py-1 text-xs text-(--primary-background)">
              0
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1">
            Saved
            <span className="rounded-full px-2 py-1 text-xs text-(--primary-text-color) border-2 border-(--secondary-text-color)">
              0
            </span>
          </Link>

          <button
            type="button"
            onClick={handleHamburgerMenu}
            aria-label="Toggle navigation menu"
            className="text-xl">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute right-4 top-full z-50 w-48 rounded-bl-2xl bg-(--secondary-background) px-4 py-4 shadow-lg sm:hidden ${
          smallDevice ? "flex" : "hidden"
        } flex-col gap-4 text-center`}>
        <Link
          href="/"
          onClick={handleMenuClick}
          className={`hover:text-(--common-color) ${
            activeMenu === "/" ? "manuCurrentState" : ""
          }`}>
          Workout
        </Link>

        <Link
          href="/my-plan"
          onClick={handleMenuClick}
          className={`hover:text-(--common-color) ${
            activeMenu === "/my-plan"
              ? "manuCurrentState"
              : ""
          }`}>
          My plan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
