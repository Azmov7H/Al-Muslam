import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image

                src="/logo.png"
                className=" rounded-4xl"
                alt="Al Muslam Logo"
                width={40}
                height={40}
                priority
            />
            <span className="text-2xl font-bold text-yellow-500">
                Al Muslam
            </span>
        </Link>
    );
}