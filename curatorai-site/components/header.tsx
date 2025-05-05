// Header.jsx
'use client' // Required for client-side interactivity

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	// Close mobile menu when screen size changes to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isMenuOpen]);

	// Handle mobile menu toggle
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-[#F2EEE4] text-[#254E70] border-b border-[#254E70]/10 relative z-40">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2 z-10">
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
							curatorChat
						</Link>
						<Link href="/wordpress" className="text-[#254E70] hover:text-[#D97C4E] transition-colors py-2">
							Headless WordPress
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
					<div className="flex md:hidden z-10">
						<button 
							className="p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] transition-colors"
							onClick={toggleMenu}
							aria-label="Toggle menu"
							aria-expanded={isMenuOpen}
						>
							{isMenuOpen ? (
								<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
				
				{/* Mobile menu overlay (shown/hidden based on state) */}
				<div 
					className={`fixed inset-0 bg-[#254E70]/95 backdrop-blur-sm transition-all duration-300 md:hidden z-0 ${
						isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
					}`}
					onClick={toggleMenu}
				></div>
				
				{/* Mobile menu content */}
				<div 
					className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#F2EEE4] shadow-xl p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					} z-30 flex flex-col`}
				>
					<div className="flex justify-end mb-8">
						<button 
							className="p-2 text-[#254E70] hover:text-[#D97C4E] focus:outline-none" 
							onClick={toggleMenu}
							aria-label="Close menu"
						>
							<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					

					<nav className="flex flex-col space-y-6 flex-grow">
						<Link 
							href="/chat" 
							className="text-[#254E70] hover:text-[#D97C4E] transition-colors text-lg font-medium"
							onClick={toggleMenu}
						>
							curatorChat
						</Link>
						<Link 
							href="/wordpress" 
							className="text-[#254E70] hover:text-[#D97C4E] transition-colors text-lg font-medium"
							onClick={toggleMenu}
						>
							Headless Wordpress
						</Link>
						<Link 
							href="/about" 
							className="text-[#254E70] hover:text-[#D97C4E] transition-colors text-lg font-medium"
							onClick={toggleMenu}
						>
							About
						</Link>
						<Link 
							href="/contact" 
							className="text-[#254E70] hover:text-[#D97C4E] transition-colors text-lg font-medium"
							onClick={toggleMenu}
						>
							Contact
						</Link>
					</nav>
					

					<div className="mt-auto pt-6 border-t border-[#254E70]/10">
						<Link 
							href="/contact" 
							className="block w-full py-3 px-4 bg-[#48A9A6] text-white rounded-sm hover:bg-[#48A9A6]/90 transition-colors font-medium text-center"
							onClick={toggleMenu}
						>
							Request Demo
						</Link>
					</div>
					

					{/* Mobile menu footer 
					<div className="mt-6 pt-6 border-t border-[#254E70]/10">
						<div className="flex items-center justify-between text-sm text-[#254E70]/70">
							<Link href="/terms" className="hover:text-[#D97C4E]" onClick={toggleMenu}>
								Terms
							</Link>
							<Link href="/privacy" className="hover:text-[#D97C4E]" onClick={toggleMenu}>
								Privacy
							</Link>
							<Link href="/contact" className="hover:text-[#D97C4E]" onClick={toggleMenu}>
								Support
							</Link>
						</div>
					</div>
					*/}


				</div>
			</div>
			
			{/* Subtle decorative element */}
			<div className="hidden lg:block absolute top-0 right-0 w-64 h-1 bg-gradient-to-r from-transparent via-[#D97C4E]/50 to-transparent"></div>
		</header>
	);
}