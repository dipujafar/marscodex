"use client";
import "./Navbar.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navlink from "./component/NavLink";
import { cn } from "@/lib/utils";
import Container from "@/components/shared/Container";
import HoverEffectButton from "@/components/ui/hoverEffectButton";

/**
 * Wishlist - Available to only buyer type user
 * Cart - Available to no-user or buyer
 *
 * SellerProfileDropdown - Shows modal for admin approval (may change in future)
 */

// motion variants
const smallMenuLinkVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "10%",
    opacity: 0,
  },
};

const smallMenuVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  exit: {
    y: "10%",
    opacity: 0,
  },
};

export default function Navbar() {
  const [hideMobileMenu, setHideMobileMenu] = useState(true);
  const [squeezeOnScroll, setSqueezeOnScroll] = useState(false);

  // Squeeze navbar on scroll
  const handleSqueezeOnScroll = () => {
    if (Math.round(window?.pageYOffset) >= 150) {
      setSqueezeOnScroll(true);
      return;
    }

    setSqueezeOnScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSqueezeOnScroll);

    return () => window.addEventListener("scroll", handleSqueezeOnScroll); // Clean up
  }, []);

  return (
    <nav className="relative z-[9999] w-full bg-[#E1EAFF]">
      {/* ------------ Desktop Version ------------- */}
      <div
        className={cn(
          "hidden w-full border-b border-b-gray-300 transition-all duration-300 ease-in-out lg:block",
          squeezeOnScroll ? "px-6 py-2 shadow" : "px-0 py-4"
        )}
      >
        <Container className=" flex items-center justify-between lg:gap-x-10 ">
          {/* Logo -- left */}
          <Link href="/">
            <Image src={logo} alt="logo" className=" w-[180px]" />
          </Link>

          {/* Links & Icons -- right */}
          <div className="flex flex-grow items-center justify-end text-center lg:gap-x-8 xl:gap-x-6 2xl:gap-x-8">
            <Navlink route="/#hero" setHideMobileMenu={setHideMobileMenu}>
              Home
            </Navlink>

            <Navlink route="/#about" setHideMobileMenu={setHideMobileMenu}>
              About Us
            </Navlink>

            <Navlink route="/#service" setHideMobileMenu={setHideMobileMenu}>
              Services
            </Navlink>
            <Navlink
              route="/#whyChoiceUs"
              setHideMobileMenu={setHideMobileMenu}
            >
              Why Choice Us
            </Navlink>
            <Navlink route="/#portfolio" setHideMobileMenu={setHideMobileMenu}>
              Portfolio
            </Navlink>
          </div>

          {/* contact button */}
          <div>
            <HoverEffectButton className="bg-primary-blue py-2 text-base font-medium truncate pt-1 px-6">
              <Link href="/appointment">Appointment</Link>
            </HoverEffectButton>
          </div>
        </Container>
      </div>

      {/* ------------ Mobile Version -------------- */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out lg:hidden ",
          squeezeOnScroll ? "px-2 py-3" : "px-0 py-5"
        )}
      >
        {/* Menu Header */}
        <div className="relative flex items-center justify-between px-4 gap-x-4 ">
          {/* menu icon */}
          <button onClick={() => setHideMobileMenu(!hideMobileMenu)}>
            {hideMobileMenu ? (
              <Menu color="#FE6201" size={24} />
            ) : (
              <X color="#FE6201" size={24} />
            )}
          </button>

          {/* center */}
          <Link href="/" className="max-w-[150px]">
            <Image src={logo} alt="logo" className="mx-auto block" />
          </Link>

          {/* contact button */}
          <div>
            <HoverEffectButton className="bg-primary-blue md:py-2 py-1 text-base font-medium truncate pt-1 md:px-6 px-3 mt-2">
              <Link href="/appointment">Appointment</Link>
            </HoverEffectButton>
          </div>
        </div>

        {/* Mobile  Links  */}
        <div className="absolute left-0 top-[60px] z-[9999] h-auto w-full">
          <AnimatePresence>
            {!hideMobileMenu && (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
              >
                <motion.ul
                  className="flex list-none flex-col items-start gap-y-6 border-b border-b-gray-300 bg-white px-4 py-7"
                  variants={smallMenuVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/#hero"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      Home
                    </Navlink>
                  </motion.li>

                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/#about"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      About Us
                    </Navlink>
                  </motion.li>

                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/#service"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      Services
                    </Navlink>
                  </motion.li>
                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/#whyChoiceUs"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      Why Choice Us
                    </Navlink>
                  </motion.li>
                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/#portfolio"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      Portfolio
                    </Navlink>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
