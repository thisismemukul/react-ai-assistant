"use client"
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight, CodeSquare, ImageIcon, LucideVideo, MessageSquareMoreIcon, Music2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const tools = [
    {
        label: "Chat",
        icon: MessageSquareMoreIcon,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        href: "/chat"
    },
    {
        label: "Code Generation",
        icon: CodeSquare,
        color: "text-sky-500",
        bgColor: "bg-sky-500/10",
        href: "/code",
    },
    {
        label: "Generate Music",
        icon: Music2,
        color: "text-green-400",
        bgColor: "bg-sky-500/10",
        href: "/music",
    },
    {
        label: "Generate Image",
        icon: ImageIcon,
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
        href: "/image",
    },
    {
        label: "Generate Video",
        icon: LucideVideo,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        href: "/video",
    }
]


const DashboardPage = () => {
    const router = useRouter();
    return (
        <div>
            <div className="space-y-4 mb-8">
                <h2 className='font-bold text-center md:text-4xl text-2xl'>Your Personal Gym trainer</h2>
                <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>Chat with your trainer</p>
            </div>
            <div className="space-y-4 px-4 md:px-20 lg:px-32">
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className='cursor-pointer flex items-center justify-between border-black/5 p-4 hover:shadow-md transition'
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className='w-5 w-5' />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default DashboardPage
