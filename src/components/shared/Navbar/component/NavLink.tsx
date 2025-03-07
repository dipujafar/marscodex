"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function Navlink({
  children,
  route,
  setHideMobileMenu,
}: {
  children: ReactNode;
  // @typescript-eslint/no-explicit-any
  route: any;
  // @typescript-eslint/no-explicit-any
  setHideMobileMenu: any;
}) {
  const pathname = usePathname();

  // hide mobile menu on link click
  const hideMobileMenu = () => {
    setHideMobileMenu(true);
  };

  return (
    <Link
      href={route}
      passHref
      className={`navbar-link font-medium uppercase truncate ${
        pathname === route ? "text-primary-blue" : "text-black"
      }`}
      onClick={hideMobileMenu}
    >
      {children}
    </Link>
  );
}
