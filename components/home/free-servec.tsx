"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Gift } from "lucide-react"

export default function FreeServiceCard() {
  return (
    <div className="flex justify-center  p-4 sm:p-6 lg:p-8  bg-[#050505]">
        <Card className=" bg-gradient-to-br from-black to-zinc-900 text-white border border-yellow-500/30 shadow-lg rounded-2xl w-5xl h-5xl">
      <CardContent className="p-6 flex items-start gap-4">
        
        {/* Icon */}
        <div className="bg-yellow-500/10 p-3 rounded-xl">
          <Gift className="w-6 h-6 text-yellow-400" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">
            الخدمة مجانية بالكامل
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            يمكنك استخدام جميع ميزات المنصة بدون أي رسوم أو اشتراكات.
            هدفنا هو توفير تجربة إيمانية متكاملة ومتاحة للجميع.
          </p>
        </div>

      </CardContent>
    </Card>
    </div>
  )
}