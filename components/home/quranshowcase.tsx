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
    <section className="bg-[#050505] py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Quran Image */}
        <div className="flex justify-center">
          <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-br from-[#d4af37] via-[#f5d76e] to-[#b8962e] shadow-[0_0_40px_rgba(212,175,55,0.25)]">

            {/* Frame */}
            <div className="bg-[#0a0a0d] rounded-[2rem] p-4">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-yellow-400/10 blur-2xl" />

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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              تجربة قراءة القرآن بأسلوب عصري
            </h2>
            <p className="text-slate-400 leading-7">
              تصميم يجمع بين الفخامة والبساطة ليمنحك تجربة روحانية هادئة ومريحة في أي وقت.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <Card
                  key={i}
                  className="bg-white/5 border-white/10 backdrop-blur-xl"
                >
                  <CardContent className="flex items-start gap-4 p-4">

                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
                      <Icon className="w-5 h-5 text-[#f5d76e]" />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-white font-medium">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-400 mt-1">
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