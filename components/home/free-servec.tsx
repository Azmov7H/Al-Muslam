"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Gift } from "lucide-react"

export default function FreeServiceCard() {
  return (
    <div className="flex w-full justify-center p-4 sm:p-6 lg:p-10 bg-[#030303]">
      <Card className=" bg-gradient-to-br from-[#0a0a0a] to-[#141414] text-white border-[#d4af37]/20 shadow-2xl shadow-[#d4af37]/5 rounded-3xl">
        <CardContent className="p-8 flex items-start gap-6">

          {/* Icon */}
          <div className="bg-gradient-to-br from-[#d4af37]/15 to-[#c9a227]/10 p-4 rounded-2xl">
            <Gift className="w-7 h-7 text-[#d4af37]" />
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[#d4af37]">
              الخدمة مجانية بالكامل
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              يمكنك استخدام جميع ميزات المنصة بدون أي رسوم أو اشتراكات.
              هدفنا هو توفير تجربة إيمانية متكاملة ومتاحة للجميع.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}