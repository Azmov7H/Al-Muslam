import { CableCar, Usb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar() {
    const Links = [
        {
            id: 1,
            title: "صلاة",
            icon: <Usb />,
            link: "/dashboard/prayer"
        },
        {
            id: 2,
            title: "زكاء",
            icon: <CableCar />,
            link: "/dashboard/prayer"
        },
        {
            id: 3,
            title: "القبلة",
            icon: <Usb />,
            link: "/dashboard/prayer"
        },
    ]
    return (
        <div className="sidebar ">

            <div className="links flex items-center gap-2 p-2">
                {Links.map((obg) => (
                    <Link key={obg.id} href={obg.link}>

                        {
                            obg.title}

                    </Link>
                ))}
            </div>

        </div>
    )
}