import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhoneMockup from "../out/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-12 sm:px-6 lg:px-8">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,105,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,214,105,0.1),transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

 {/* Mockup */}
 <PhoneMockup />

        {/* Content */}
        <div dir="rtl" className="flex flex-col justify-center gap-6 text-right text-white">

          <Badge className="w-fit bg-white/5 text-yellow-200 border-white/10 px-4 py-2">
            تطبيق إسلامي فاخر
          </Badge>

          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            رفيق المسلم في كل مكان
          </h1>

          <p className="text-slate-300 max-w-xl">
            تجربة تجمع بين روحانية العبادة وعصرية التصميم
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <Button size="lg" className="bg-[#d0b345] text-black hover:bg-[#e3c55d]">
              حمل التطبيق
            </Button>

            <Button size="lg" variant="outline">
              استكشف
            </Button>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-3">
            {["أوقات الصلاة", "القرآن", "الأذكار"].map((item) => (
              <Card key={item} className="bg-white/5 border-white/10">
                <CardContent className="p-4 text-sm">
                  <p className="font-semibold text-white">{item}</p>
                  <p className="text-slate-400 mt-2">
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