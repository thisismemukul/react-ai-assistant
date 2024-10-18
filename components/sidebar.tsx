"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { CodeSquare, ImageIcon, LayoutDashboard, LucideVideo, MessageSquareMoreIcon, Music2, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
    weight: "400",
    subsets: ["vietnamese"]
});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-orange-1",
    },
    {
        label: "Chat",
        icon: MessageSquareMoreIcon,
        href: "/chat",
        color: "text-purple-500",
    },
    {
        label: "Code Generation",
        icon: CodeSquare,
        href: "/code",
        color: "text-sky-500",
    },
    {
        label: "Generate Music",
        icon: Music2,
        href: "/music",
        color: "text-green-400",
    },
    {
        label: "Generate Image",
        icon: ImageIcon,
        href: "/image",
        color: "text-rose-500",
    },
    {
        label: "Generate Video",
        icon: LucideVideo,
        href: "/video",
        color: "text-yellow-500",
    },
    {
        label: "Garage",
        icon: Settings,
        href: "/garage",
        color: "text-gray-1",
    },
]

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col py-4 h-full space-y-4 text-white-1 bg-black-7">
            <div className="flex-1 px-3 py-2">
                <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
                    {/* Logo Container  */}
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50px"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-semibold", montserrat.className)}>
                        Jarvis
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("justify-start font-medium cursor-pointer flex p-3 w-full text-sm hover:text-white-2 hover:bg-white-1/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}>
                            <div className="items-center flex flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
