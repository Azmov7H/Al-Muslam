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
<header className="sticky top-0 z-50 relative overflow-hidden bg-[#030303] backdrop-blur-2xl border-b border-white/5">
  <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">

    <Logo />

    <nav className="hidden md:block">
      <ul className="flex items-center gap-9 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/60 hover:text-[#d4af37] transition-all duration-300 text-[15px] font-medium"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <Button className="bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#e8c547] text-black hover:from-[#d4af37] hover:via-[#e0bc3f] hover:to-[#f0d06a] hover:shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-all duration-300 font-semibold text-sm px-6">
      حمل التطبيق
    </Button>

  </div>
</header>
    );
}