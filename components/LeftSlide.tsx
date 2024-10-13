"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { CodeSquare, Home, ImageIcon, LayoutDashboard, LucideUser2, LucideVideo, Music2, Settings } from "lucide-react";

const montserrat = Montserrat({
    weight: '400',
    subsets: ['vietnamese'],
});


const LeftSlide = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <section className="left-slider">
            <nav className="flex flex-col gap-6">
                {/* Logo Section */}
                <Link href="/dashboard" className="flex items-center cursor-pointer gap-1 pb-10 max-lg:justify-center">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50px"
                        />
                    </div>
                    <h1 className={cn('text-2xlarge font-bold default-text max-lg:hidden', montserrat.className)}>
                        Jarvis
                    </h1>
                </Link>

                {/* Slider Routes */}
                <div className="space-y-1">
                    {SLIDER_ROUTES.map((route) => {
                        const isActive = pathname === route.route || pathname.startsWith(`${route.route}/`);
                        return (<Link
                            href={route.route}
                            key={route.route}
                            className={cn(
                                "justify-start font-medium cursor-pointer flex p-3 w-full text-sm hover:dark:text-white-2 hover:text-dark-tertiary hover:bg-white-1/10  transition",
                                { 'hover:bg-nav-focus hover:border-r-4 hover:border-dark-secondary': true }, "rounded-tl-lg rounded-bl-lg", {
                                'bg-nav-focus border-r-4 border-dark-secondary': isActive
                            }
                            )}
                        >
                            <div className="items-center flex flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>)
                    })}
                    <ModeToggle />
                </div>
            </nav>
        </section>
    );
};

const SLIDER_ROUTES = [
    {
        label: "Profile",
        icon: LucideUser2,
        route: "/profile",
        color: "text-light-green-1",
    },
    {
        label: "Home",
        icon: Home,
        route: "/home",
        color: "text-orange-1",
    },
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        route: "/dashboard",
        color: "text-orange-1",
    },
    {
        label: "Code Generation",
        icon: CodeSquare,
        route: "/chat",
        color: "text-sky-500",
    },
    {
        label: "Generate Music",
        icon: Music2,
        route: "/music",
        color: "text-green-400",
    },
    {
        label: "Generate Image",
        icon: ImageIcon,
        route: "/image",
        color: "text-rose-500",
    },
    {
        label: "Generate Video",
        icon: LucideVideo,
        route: "/video",
        color: "text-yellow-500",
    },
    {
        label: "Garage",
        icon: Settings,
        route: "/garage",
        color: "text-gray-1",
    },
];

export default LeftSlide;
