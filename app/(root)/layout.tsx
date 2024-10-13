import LeftSlide from "@/components/LeftSlide";
import MobNav from "@/components/MobNav";
import RightSlide from "@/components/RightSlide";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex flex-col">
            <main className="relative flex dark:bg-black-3 bg-white-4">
                <LeftSlide />
                <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
                    <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                        <div className="flex h-16 items-center justify-between md:hidden">
                            <Image
                                alt="Logo"
                                src="/logo.png"
                                className="object-contain"
                                width={30}
                                height={30}
                            />
                            <MobNav />
                        </div>
                        <div className="flex flex-col md:pb-14">
                            Toster
                            {children}
                        </div>
                    </div>
                </section>
                <RightSlide />
            </main>
        </div>
    );
}
