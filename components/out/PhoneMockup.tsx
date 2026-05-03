import { Card } from "@/components/ui/card";

export default function PhoneMockup() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">

        {/* Glow */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-yellow-400/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-yellow-300/20 blur-3xl rounded-full" />

        {/* Phone Body */}
        <div className="relative w-[340px] h-[680px] rounded-[3rem] bg-gradient-to-b from-[#1a1a1f] to-[#0a0a0d] p-[3px] shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

          {/* Screen */}
          <div className="relative w-full h-full rounded-[2.5rem] bg-[#070708] overflow-hidden">

            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20" />

            {/* Status bar */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-6 py-3 text-[10px] text-gray-400 z-10">
              <span>9:41</span>
              <span>📶 🔋</span>
            </div>

            {/* App UI */}
            <div className="pt-12 px-5 pb-6 flex flex-col justify-between h-full text-white">

              {/* Header */}
              <div className="text-center space-y-3">
                <p className="text-xs text-yellow-400 tracking-widest">
                  AL MUSLIM
                </p>

                {/* Orb */}
                <div className="relative mx-auto w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1a1a1f] to-[#0d0d11] border border-yellow-400/20">

                  <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-2xl" />

                  <span className="relative text-3xl text-yellow-300 font-semibold">
                    الله
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-6">
                  تجربة روحانية متكاملة تساعدك على التقرب إلى الله يوميًا
                </p>
              </div>

              {/* Prayer Times */}
              <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-4">

                {[
                  { name: "الفجر", time: "04:12" },
                  { name: "الظهر", time: "12:01" },
                  { name: "العصر", time: "15:30" },
                  { name: "المغرب", time: "18:45" },
                  { name: "العشاء", time: "20:10" },
                ].map((prayer) => (
                  <div key={prayer.name} className="flex justify-between text-sm">
                    <span className="text-gray-300">{prayer.name}</span>
                    <span className="text-white font-medium">{prayer.time}</span>
                  </div>
                ))}

              </div>

              {/* Bottom Actions */}
              <div className="grid grid-cols-3 gap-3 text-xs text-center">

                <div className="bg-white/5 border border-white/10 rounded-xl py-2">
                  📖<p>قرآن</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl py-2">
                  🤲<p>أذكار</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl py-2">
                  🧭<p>قبلة</p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}