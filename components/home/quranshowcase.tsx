"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, BookOpen, Sparkles } from "lucide-react";

export default function QuranShowcase() {
  const features = [
    {
      icon: Moon,
      title: "وضع ليلي مريح",
      desc: "تصميم داكن يقلل إجهاد العين أثناء القراءة الليلية",
    },
    {
      icon: BookOpen,
      title: "قراءة واضحة",
      desc: "نصوص واضحة مع تجربة قراءة سلسة وخالية من التشويش",
    },
    {
      icon: Sparkles,
      title: "تجربة روحانية",
      desc: "واجهة هادئة تساعدك على التركيز والتدبر",
    },
  ];

  return (
    <section className="bg-[#030303] py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Quran Image */}
        <div className="flex justify-center">
          <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-br from-[#c9a227] via-[#d4af37] to-[#b8962e] shadow-[0_0_50px_rgba(212,175,55,0.15)]">

            {/* Frame */}
            <div className="bg-[#0a0a0d] rounded-[2rem] p-5">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-[#d4af37]/5 blur-3xl" />

              <Image
                src="/logo.png"
                alt="القرآن الكريم"
                width={320}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div dir="rtl" className="text-right space-y-8">

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              تجربة قراءة القرآن بأسلوب عصري
            </h2>
            <p className="text-white/40 leading-7 text-lg">
              تصميم يجمع بين الفخامة والبساطة ليمنحك تجربة روحانية هادئة ومريحة في أي وقت.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <Card
                  key={i}
                  className="bg-white/[0.03] border-white/8 backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/12 transition-all duration-300"
                >
                  <CardContent className="flex items-start gap-4 p-4">

                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#d4af37]/8 border border-[#d4af37]/15">
                      <Icon className="w-5 h-5 text-[#d4af37]" />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-white font-medium">
                        {item.title}
                      </p>
                      <p className="text-sm text-white/45 mt-1">
                        {item.desc}
                      </p>
                    </div>

                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}