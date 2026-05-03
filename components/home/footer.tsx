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
    <footer className="bg-black text-white border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-yellow-400">المسلم</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            منصة تساعدك على تنظيم عبادتك اليومية وتبقيك قريبًا من القرآن والذكر.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-yellow-400">روابط</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-300 hover:text-yellow-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-yellow-400">معلومات</h3>
          <p className="text-sm text-zinc-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
          <p className="text-xs text-zinc-500">
            تم تطوير المنصة لتكون مجانية بالكامل لخدمة المسلمين حول العالم
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-yellow-500/10 text-center py-4 text-xs text-zinc-500">
        صُنع بحب لخدمة المسلمين
      </div>
    </footer>
  )
}