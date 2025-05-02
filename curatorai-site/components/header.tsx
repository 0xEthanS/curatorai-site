import Link from 'next/link';




export default function Header() {
	return (
		<header className="bg-[#F2EEE4] text-[#254E70] border-b border-[#254E70]/10">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">

					
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-8 h-8 rounded-sm bg-[#D97C4E] flex items-center justify-center overflow-hidden relative">
							<div className="absolute inset-0 bg-gradient-to-br from-[#D97C4E] to-[#946B4A]"></div>
							<span className="relative text-white font-serif text-lg">c</span>
						</div>
						<div className="font-serif text-xl leading-none tracking-tight">
							<span className="font-semibold">curator</span>
							<span className="font-light">AI</span>
						</div>
					</Link>
					

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link href="/chat" className="text-[#254E70] hover:text-[#D97C4E] transition-colors py-2">
							Custom Chatbots
						</Link>
						<Link href="/wordpress" className="text-[#254E70] hover:text-[#D97C4E] transition-colors py-2">
							Headless Wordpress
						</Link>
						<Link href="/about" className="text-[#254E70] hover:text-[#D97C4E] transition-colors py-2">
							About
						</Link>
						<Link href="/contact" className="text-[#254E70] hover:text-[#D97C4E] transition-colors py-2">
							Contact
						</Link>
					</nav>
					

					{/* CTA Button */}
					<div className="hidden md:block">
						<Link 
							href="/contact" 
							className="px-5 py-2 bg-[#48A9A6] text-white rounded-sm hover:bg-[#48A9A6]/90 transition-colors font-medium text-sm inline-flex items-center"
						>
							Request Demo
							<svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</Link>
					</div>
					

					{/* Mobile Menu Button */}
					<div className="block md:hidden">
						<button className="mobile-menu-button p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6]">
							<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>


				</div>
				



				{/* Mobile menu (hidden by default) */}
				<div className="mobile-menu hidden md:hidden">
					<div className="pt-4 pb-2 space-y-1">
						<Link href="/chat" className="block py-2 px-4 rounded-sm hover:bg-[#254E70]/5">
							Custom Retrieval System
						</Link>
						<Link href="/wordpress" className="block py-2 px-4 rounded-sm hover:bg-[#254E70]/5">
							Headless Wordpress
						</Link>
						<Link href="/contact" className="block py-2 px-4 rounded-sm hover:bg-[#254E70]/5">
							Contact
						</Link>
						<Link 
							href="/contact" 
							className="block py-2 px-4 rounded-sm bg-[#48A9A6]/10 text-[#48A9A6] hover:bg-[#48A9A6]/20 mt-4"
						>
							Request Demo
						</Link>
					</div>
				</div>




			</div>
			
			{/* Subtle decorative element */}
			<div className="hidden lg:block absolute top-0 right-0 w-64 h-1 bg-gradient-to-r from-transparent via-[#D97C4E]/50 to-transparent"></div>
		</header>
	);
}