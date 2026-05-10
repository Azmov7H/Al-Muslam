import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Clock, BookOpen, Sparkles} from "lucide-react";

export default function Features() {

    const content = [
        {
            id: 1,
            title: "أوقات الصلاة",
            des: "تنبيهات دقيقة مع تحديد الموقع للحفاظ على صلاتك في وقتها الصحيح",
            icon: Clock
        },
        {
            id: 2,
            title: "القرآن الكريم",
            des: "قراءة واضحة بواجهة مريحة مع حفظ آخر موضع تلقائيًا",
            icon: BookOpen
        },
        {
            id: 3,
            title: "الأذكار والتسبيح",
            des: "سبحة تفاعلية وأذكار يومية بتصميم يقلل التشتت",
            icon: Sparkles
        }
    ];

    return (
        <section className="bg-[#030303] w-full p-20">
            <div className="max-w-7xl mx-auto">

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {content.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card
                                key={item.id}
                                className="bg-white/[0.03] border-white/8 backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/12 hover:scale-[1.02] transition-all duration-300"
                            >
                                <CardHeader className="items-center text-center space-y-4 pt-8">

                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#d4af37]/8 border border-[#d4af37]/15">
                                        <Icon className="w-6 h-6 text-[#d4af37]" />
                                    </div>

                                    {/* Title */}
                                    <CardTitle className="text-white text-lg font-medium">
                                        {item.title}
                                    </CardTitle>

                                </CardHeader>

                                <CardContent className="text-center text-sm text-white/45 leading-7 pb-8">
                                    {item.des}
                                </CardContent>
                            </Card>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}