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
        <section className="bg-[#050505] px-4 py-16">
            <div className="max-w-7xl mx-auto">

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {content.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card
                                key={item.id}
                                className="bg-white/5 border-white/10 backdrop-blur-xl hover:scale-[1.02] transition duration-300"
                            >
                                <CardHeader className="items-center text-center space-y-4">

                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                                        <Icon className="w-6 h-6 text-yellow-300" />
                                    </div>

                                    {/* Title */}
                                    <CardTitle className="text-white text-lg">
                                        {item.title}
                                    </CardTitle>

                                </CardHeader>

                                <CardContent className="text-center text-sm text-slate-400 leading-7">
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