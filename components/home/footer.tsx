"use client"

import Link from "next/link"

export default function Footer() {
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "الميزات", href: "/features" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "تواصل معنا", href: "/contact" },
  ]

  return (
    <footer className="bg-[#030303] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-[#d4af37]">المسلم</h2>
          <p className="text-sm text-white/50 leading-relaxed">
            منصة تساعدك على تنظيم عبادتك اليومية وتبقيك قريبًا من القرآن والذكر.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[#d4af37]">روابط</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 hover:text-[#d4af37] transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[#d4af37]">معلومات</h3>
          <p className="text-sm text-white/50">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
          <p className="text-xs text-white/30">
            تم تطوير المنصة لتكون مجانية بالكامل لخدمة المسلمين حول العالم
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 text-center py-4 text-xs text-white/30">
        صُنع بحب لخدمة المسلمين
      </div>
    </footer>
  )
}