// "use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLink = [
  { navName: "Home", href: "#home" },
  { navName: "About", href: "#about" },
  { navName: "Services", href: "#services" },
  { navName: "Portfolio", href: "#portfolio" },
  { navName: "Contact", href: "#contact" },
  { navName: "Blog", href: "#blog" },
];

export function ActiveLink() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const threshold = 100;

      for (const link of navLink) {
        if (link.href === "#home") {
          if (scrollY < threshold) {
            setActiveLink(link.href);
            break;
          }
        } else {
          const section = document.querySelector(link.href);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= threshold) {
              setActiveLink(link.href);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {navLink.map((link) => (
        <Link
          className={`${
            activeLink === link.href ? "text-[#5b5d74]" : "text-white"
          } group flex items-center rounded-lg p-2 text-gray-900 hover:text-gray-700`}
          href={link.href}
          key={link.navName}
        >
          {link.navName}
        </Link>
      ))}
    </>
  );
}
