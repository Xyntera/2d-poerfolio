
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Linux Mint themed colors
				retro: {
					purple: '#6B4984',
					cyan: '#00BBAA',
					green: '#87B158',     // Mint's primary green
					yellow: '#FFCC00',
					blue: '#3776A9',      // Mint's blue
					darkBlue: '#404552',  // Mint's dark blue/gray
					red: '#DB3A34',
					pink: '#FF00AA',
					black: '#333333',     // Darker black for contrast
					white: '#F6F6F6',     // Off-white for better readability
					gray: '#808080',
					lightGray: '#D3D3D3', // Mint's light gray
					darkGray: '#404040',
					mintGreen: '#8ED53F', // Mint's bright accent green
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pixel-pulse': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'92%': { opacity: '0.95' },
					'94%': { opacity: '0.9' },
					'96%': { opacity: '0.95' },
					'98%': { opacity: '0.9' }
				},
				'rgb-shift': {
					'0%, 100%': { 
						textShadow: '0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75)' 
					},
					'33%': { 
						textShadow: '0.05em 0 0 rgba(255,0,0,0.75), -0.025em -0.05em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75)' 
					},
					'66%': { 
						textShadow: '0.05em 0.025em 0 rgba(255,0,0,0.75), 0 -0.05em 0 rgba(0,255,0,0.75), -0.05em -0.025em 0 rgba(0,0,255,0.75)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-pulse': 'pixel-pulse 1s ease-in-out infinite',
				'scanline': 'scanline 8s linear infinite',
				'cursor-blink': 'blink 1s step-end infinite',
				'typing': 'typing 2s steps(30, end)',
				'flicker': 'flicker 0.15s infinite',
				'rgb-shift': 'rgb-shift 2s infinite linear alternate'
			},
			fontFamily: {
				'pixel': ['"Press Start 2P"', 'cursive'],
				'terminal': ['"VT323"', 'monospace'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
