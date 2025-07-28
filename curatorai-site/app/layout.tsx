import type { Metadata } from "next";
import { 
	Geist, 
	Geist_Mono, 
	Bebas_Neue, 
	Oswald, 
	Libre_Baskerville 
} from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from '@/components/tailwind-indicator'




const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});


const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});


const libreBaskerville = Libre_Baskerville({
	variable: "--font-libre-baskerville",
	subsets: ["latin"],
	weight: ['400'],
});


const bebasneue = Bebas_Neue({
	variable: "--font-bebas-neue",
	subsets: ["latin"],
	weight: "400"
});


export const oswald = Oswald({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'], // Include multiple weights
	variable: '--font-oswald',
	display: 'swap',
});




export const metadata: Metadata = {
	title: "CuratorAI",
	description: "Next Generation Tools",
	metadataBase: new URL("https://curatorai.dev"),
	icons: {
	  	icon: 'logo.svg',
	},
	openGraph: {
		title: "CuratorAI",
		description: "Next Generation Tools",
		url: "https://curatorai.dev",
		siteName: "CuratorAI",
		images: [
			{
				url: "/logo.png", // Using your existing logo.svg file
				width: 800,       // Set appropriate dimensions
				height: 600,
				alt: "CuratorAI",
			},
		],
		type: "website",
	},
}




export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`
						${geistSans.variable} 
						${geistMono.variable} 
						${bebasneue.variable} 
						${oswald.variable} 
						${libreBaskerville.variable} 
						antialiased
					`
				}
			>
				{children}
				<TailwindIndicator />
			</body>
		</html>
	);
}





// bookings link: 
// https://calendar.app.google/5ULp3UXgzcZ1kxzVA


// email: 
// hello@curatorai.dev


// phone number: 
// (502) 407-7849





