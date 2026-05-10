import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhoneMockup from "../out/PhoneMockup";
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] w-full  sm:px-6 flex items-center">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 items-center">

        {/* Mockup */}
        <PhoneMockup />

        {/* Content */}
        <div dir="rtl" className="flex flex-col justify-center gap-7 text-right text-white">

          <Badge className="w-fit bg-white/[0.03] text-[#d4af37] border-white/8 px-4 py-2 text-sm font-medium">
            تطبيق إسلامي فاخر
          </Badge>

          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl leading-tight">
            رفيق المسلم في كل مكان
          </h1>

          <p className="text-white/50 max-w-xl text-lg leading-relaxed">
            تجربة تجمع بين روحانية العبادة وعصرية التصميم
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end mt-2">
            <Button size="lg" className="bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#e8c547] text-black hover:from-[#d4af37] hover:via-[#e0bc3f] hover:to-[#f0d06a] hover:shadow-[0_4px_24px_rgba(212,175,55,0.4)] transition-all duration-300 font-semibold">
              حمل التطبيق
            </Button>

            <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 hover:border-white/25 transition-all duration-300">
              <Link href={"/dashboard"}>
                استكشف
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid gap-3 sm:grid-cols-3 mt-4">
            {["أوقات الصلاة", "القرآن", "الأذكار"].map((item) => (
              <Card key={item} className="bg-white/[0.03] border-white/8 hover:bg-white/[0.06] hover:border-white/12 transition-all duration-300">
                <CardContent className="p-4 text-sm">
                  <p className="font-medium text-white">{item}</p>
                  <p className="text-white/40 mt-1.5 text-xs">
                    تجربة مصممة بعناية
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}