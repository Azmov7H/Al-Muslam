"use client";

import Logo from "./logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    const links = [
        { name: "الرئيسية", href: "/" },
        { name: "الميزات", href: "/features" },
        { name: "الأسئلة الشائعة", href: "/faq" },
        { name: "اتصل بنا", href: "/contact" },
    ];

    return (
<header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-[#d4af37]/10">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

    <Logo />

    <nav className="hidden md:block">
      <ul className="flex items-center gap-8 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/70 hover:text-[#f5d76e] transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <Button className="bg-gradient-to-r from-[#d4af37] to-[#f5d76e] text-black hover:opacity-90 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
      حمل التطبيق
    </Button>

  </div>
</header>
    );
}