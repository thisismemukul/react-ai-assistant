import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	lightMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				light: {
					primary: "#A594F9",
					secondary: "#CDC1FF",
					tertiary: "#F5EFFF",
					quaternary: "#E5D9F2",
					backgroundPrimary:"#ffffff",
					backgroundSecondary:"rgba(255, 255, 255, 0.4)"
				},
				dark: {
					primary: "#D6C5F0",
					secondary: "#9153F4",
					tertiary: "#5727A3",
					quaternary: "#1B0044",
					backgroundPrimary:"#101114",
					backgroundSecondary:"#15171C"
				},
				white: {
					DEFAULT: "#FFFFFF",
					BG: "#F5EFFF",
					1: "#FFFFFF",
					2: "rgba(255, 255, 255, 0.72)",
					3: "rgba(255, 255, 255, 0.4)",
					4: "rgba(255, 255, 255, 0.64)",
					5: "rgba(255, 255, 255, 0.80)",
				},
				black: {
					DEFAULT: "#000000",
					BG: "#1B0044",
					1: "#15171C",
					2: "#222429",
					3: "#101114",
					4: "#252525",
					5: "#2E3036",
					6: "#24272C",
					7: "#111827"
				},
				orange: {
					DEFAULT: "#F97535",
					1: "#F97535",
				},
				gray: {
					DEFAULT: "#71788B",
					1: "#71788B",
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;