import type { Metadata } from "next";
import { 
	Geist, 
	Geist_Mono, 
	Bebas_Neue, 
	Oswald, 
	Libre_Baskerville 
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";




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
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/logo.svg', type: 'image/svg+xml' },
		],
		apple: [
			{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
		],
	},
	openGraph: {
		title: "CuratorAI",
		description: "Next Generation Tools",
		url: "https://curatorai.dev",
		siteName: "CuratorAI",
		images: [
			{
				url: "/og-image.png", // Create a 1200×630 PNG image for optimal display
				width: 1200,
				height: 630,
				alt: "CuratorAI",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "CuratorAI",
		description: "Next Generation Tools",
		images: ["/og-image.png"],
	},
};




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
				<Header />
				{children}
				<Footer />
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





