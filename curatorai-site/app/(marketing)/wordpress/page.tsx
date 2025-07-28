import Link from 'next/link';




export default function Page() {
	return(
		<div>
			<HeadlessWordPressHero />
			<CaseStudiesSection />
			<HeadlessWordPressAboutSection />
		</div>
	);
}




function HeadlessWordPressHero() {
	return (
		<section className="relative bg-[#F2EEE4] text-[#254E70] overflow-hidden py-16 md:py-24 lg:py-32">
			{/* Background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 right-0 w-full h-full">
					<div className="absolute right-0 top-0 w-full h-full overflow-hidden opacity-[0.03]"
							 style={{
								 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
								 backgroundSize: '20px 20px'
							 }}>
					</div>
				</div>
			</div>
			
			{/* Gradient accent */}
			<div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#48A9A6]/10 to-transparent rounded-full blur-3xl"></div>
			<div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tl from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
			
			<div className="container mx-auto px-6 relative z-10">




				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

					{/* Text content */}
					<div className="space-y-8">
						<div>
							<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3 uppercase">
								WEBSITE TRANSFORMATION
							</h4>
							<h1 className="font-serif text-5xl md:text-6xl leading-none tracking-tight text-[#254E70]">
								<span className="font-semibold">
									Headless
								</span>
								<span className="font-light"
								> WordPress</span>
							</h1>
							<p className="mt-3 text-lg md:text-xl font-light text-[#946B4A]">
								Lightning fast, beautifully designed, always evolving
							</p>
						</div>
						
						<p className="text-lg max-w-lg leading-relaxed">
							Transform how visitors experience your museum online. Keep using the WordPress content system 
							your staff already knows, but deliver a modern, fast website that matches the quality of your 
							institution. No need to retrain your team—the backend stays familiar while the front-end 
							becomes extraordinary.
						</p>
						
						<div className="space-y-4">
							<div className="flex items-start">
								<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
									<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<p className="text-[#254E70]/80">
									<span className="font-medium text-[#254E70]"
									>Visitor Experience</span> Pages load 2-5x faster, making every digital visit 
									smooth and engaging. Frustrated visitors become satisfied visitors.
								</p>
							</div>
							
							<div className="flex items-start">
								<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
									<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<p className="text-[#254E70]/80">
									<span className="font-medium text-[#254E70]"
									>Familiar admin experience</span> Your team keeps using the same WordPress dashboard they 
									already know. Update exhibits, post events, add collections—nothing changes on their end.
								</p>
							</div>
							
							<div className="flex items-start">
								<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
									<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<p className="text-[#254E70]/80">
									<span className="font-medium text-[#254E70]"
									>Ready for AI Features</span> Easily integrate our conversational collection tools and 
									other modern features without disrupting your existing workflow.
								</p>
							</div>
						</div>
						


						
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Link 
								href="/contact" 
								className="px-8 py-3 bg-[#254E70] text-white rounded-sm hover:bg-[#254E70]/90 transition-colors font-medium inline-flex items-center"
							>
								{/* Alt Text - View Demo Site */}
								Request Demo
								<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</Link>


							{/*
							<Link 
								href="/headless-wordpress/case-studies" 
								className="px-8 py-3 border border-[#254E70] text-[#254E70] rounded-sm hover:bg-[#254E70]/5 transition-colors font-medium"
							>
								Case Studies
							</Link>
							*/}


						</div>




					</div>
					
					{/* Visual representation */}
					<div className="relative">
						{/* Headless WordPress visual diagram */}
						<div className="relative aspect-[4/3] flex flex-col">
							{/* Traditional WordPress box */}
							<div className="absolute left-0 top-0 w-4/5 h-40 bg-white rounded-sm shadow-md border border-[#254E70]/10 p-5 z-10">
								<div className="flex items-center mb-3">
									<div className="w-6 h-6 mr-2">
										<svg viewBox="0 0 24 24" fill="none" className="text-[#254E70]">
											<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.2 0-9.5-4.3-9.5-9.5S6.8 2.5 12 2.5s9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5z" fill="currentColor" />
											<path d="M12.5 4.5c-3.7 0-6.5 2.8-6.5 6.5 0 3.7 2.8 6.5 6.5 6.5 3.7 0 6.5-2.8 6.5-6.5 0-3.7-2.8-6.5-6.5-6.5zm0 12c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5z" fill="currentColor" />
										</svg>
									</div>
									<h3 className="font-serif text-lg text-[#254E70]">
										Traditional WordPress
									</h3>
								</div>
								<div className="bg-[#254E70]/5 p-3 rounded-sm">
									<div className="flex items-center space-x-1">
										<div className="h-4 w-4 rounded-sm bg-[#254E70]/10"></div>
										<div className="h-4 w-12 rounded-sm bg-[#254E70]/10"></div>
										<div className="h-4 w-8 rounded-sm bg-[#254E70]/10"></div>
										<div className="h-4 w-6 rounded-sm bg-[#254E70]/10"></div>
									</div>
									<div className="mt-1 h-20 rounded-sm bg-[#254E70]/10 flex items-center justify-center">
										<span className="font-mono text-xs text-[#254E70]/40">
											Monolithic Architecture
										</span>
									</div>
								</div>
							</div>
							
							{/* Decoupled Architecture */}
							<div className="absolute left-4 top-[120px] w-full h-64 flex space-x-6 z-20">
								{/* Backend */}
								<div className="w-1/2 bg-white rounded-sm shadow-md border border-[#254E70]/10 p-5">
									<div className="flex items-center mb-3">
										<div className="w-6 h-6 mr-2">
											<svg viewBox="0 0 24 24" fill="none" className="text-[#48A9A6]">
												<path d="M20 3H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" />
												<path d="M12 11v8M8 19h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
											</svg>
										</div>
										<h3 className="font-serif text-lg text-[#48A9A6]">
											WordPress Backend
										</h3>
									</div>
									<div className="bg-[#48A9A6]/5 p-3 rounded-sm h-[120px] flex flex-col justify-between">
										<div className="space-y-2">
											<div className="h-4 rounded-sm bg-[#48A9A6]/10 w-3/4"></div>
											<div className="h-4 rounded-sm bg-[#48A9A6]/10 w-1/2"></div>
										</div>
										<div className="flex justify-end">
											<div className="bg-[#48A9A6] text-white text-xs py-1 px-2 rounded-sm font-mono">
												REST API
											</div>
										</div>
									</div>
									<div className="mt-3 flex justify-center">
										<div className="text-xs text-center text-[#254E70]/60 max-w-[140px]">
											Familiar content management interface
										</div>
									</div>
								</div>
								
								{/* Frontend */}
								<div className="w-1/2 bg-white rounded-sm shadow-md border border-[#254E70]/10 p-5">
									<div className="flex items-center mb-3">
										<div className="w-6 h-6 mr-2">
											<svg viewBox="0 0 24 24" fill="none" className="text-[#D97C4E]">
												<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
											</svg>
										</div>
										<h3 className="font-serif text-lg text-[#D97C4E]">
											Modern Frontend
										</h3>
									</div>
									<div className="bg-[#D97C4E]/5 p-3 rounded-sm h-[120px] flex flex-col justify-between">
										<div className="space-y-2">
											<div className="flex items-center space-x-1">
												<div className="h-4 w-3 rounded-sm bg-[#D97C4E]/20"></div>
												<div className="h-4 w-10 rounded-sm bg-[#D97C4E]/20"></div>
												<div className="h-4 w-6 rounded-sm bg-[#D97C4E]/20"></div>
											</div>
											<div className="h-12 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center">
												<span className="font-mono text-xs text-[#D97C4E]/40">
													React / Next.js
												</span>
											</div>
										</div>
										<div className="flex justify-end">
											<div className="bg-[#D97C4E] text-white text-xs py-1 px-2 rounded-sm font-mono">
												Static Generation
											</div>
										</div>
									</div>
									<div className="mt-3 flex justify-center">
										<div className="text-xs text-center text-[#254E70]/60 max-w-[140px]">
											Fast, responsive, optimized user experience
										</div>
									</div>
								</div>
							</div>
							
							{/* Connection lines */}
							<div className="absolute left-1/2 top-[100px] transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#254E70]/30 to-transparent z-0"></div>
							
							<div className="absolute left-[25%] top-[120px] transform -translate-x-1/2 w-16 h-px bg-[#48A9A6]/30 z-10"></div>
							<div className="absolute left-[75%] top-[120px] transform -translate-x-1/2 w-16 h-px bg-[#D97C4E]/30 z-10"></div>
							
							{/* API connection */}
							<div className="absolute left-1/2 top-[180px] transform -translate-x-1/2 w-10 h-10 flex items-center justify-center z-30">
								<div className="w-8 h-8 rounded-full bg-white shadow-md border border-[#254E70]/20 flex items-center justify-center">
									<svg className="w-4 h-4 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
									</svg>
								</div>
							</div>
							
							{/* Performance metrics */}
							<div className="absolute right-0 bottom-0 w-2/3 bg-white/80 backdrop-blur-sm rounded-sm shadow-md border border-[#254E70]/10 p-4 z-30">
								<h4 className="font-mono text-xs text-[#254E70] uppercase tracking-wider mb-3">
									Performance Metrics
								</h4>
								<div className="space-y-2">
									<div className="flex items-center">
										<div className="w-28 text-xs text-[#254E70]/70">
											Page Load Speed
										</div>
										<div className="flex-grow h-3 bg-[#254E70]/10 rounded-full relative">
											<div className="absolute inset-y-0 left-0 bg-[#D97C4E] rounded-full w-[85%]"></div>
										</div>
										<div className="ml-2 text-xs font-medium text-[#D97C4E]">
											85%
										</div>
									</div>
									
									<div className="flex items-center">
										<div className="w-28 text-xs text-[#254E70]/70">
											Mobile UX
										</div>
										<div className="flex-grow h-3 bg-[#254E70]/10 rounded-full relative">
											<div className="absolute inset-y-0 left-0 bg-[#D97C4E] rounded-full w-[90%]"></div>
										</div>
										<div className="ml-2 text-xs font-medium text-[#D97C4E]">
											90%
										</div>
									</div>
									
									<div className="flex items-center">
										<div className="w-28 text-xs text-[#254E70]/70">
											SEO Score
										</div>
										<div className="flex-grow h-3 bg-[#254E70]/10 rounded-full relative">
											<div className="absolute inset-y-0 left-0 bg-[#D97C4E] rounded-full w-[95%]"></div>
										</div>
										<div className="ml-2 text-xs font-medium text-[#D97C4E]">
											95%
										</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* Decorative elements */}
						<div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#D97C4E]/10 to-transparent blur-xl"></div>
						<div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-[#48A9A6]/10 to-transparent blur-xl"></div>
					</div>

				</div>
				



				{/* Testimonial */}
				<div className="mt-20 max-w-3xl mx-auto">
					<div className="bg-white rounded-sm p-6 shadow-sm border border-[#254E70]/10 relative">
						<div className="absolute -top-3 -left-3 w-6 h-6 bg-[#D97C4E] rounded-sm"></div>
						<blockquote className="text-[#254E70]/80 text-lg italic relative">
							<span className="font-serif text-4xl text-[#D97C4E]/20 absolute -top-3 -left-2">"</span>
								Implementing headless WordPress transformed our digital presence. 
								Page load times decreased by 68%, and our team still uses the familiar 
								WordPress interface they know and love.
							<span className="font-serif text-4xl text-[#D97C4E]/20 absolute -bottom-6 -right-2">"</span>
						</blockquote>
						<div className="mt-4 flex items-center">
							<div className="w-10 h-10 rounded-sm bg-[#254E70]/10 flex items-center justify-center text-[#254E70]">
								MH
							</div>
							<div className="ml-3">
								<div className="font-medium text-[#254E70]">
									Dr. Maria Hernandez
								</div>
								<div className="text-[#254E70]/60 text-sm">
									Digital Director, Pacific Maritime Museum
								</div>
							</div>
						</div>
					</div>
				</div>




			</div>
		</section>
	);
}




function CaseStudiesSection() {
	return (
		<section className="bg-white py-20">
			{/* Background pattern */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]"
					 style={{
						 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
						 backgroundSize: '20px 20px'
					 }}>
			</div>
			
			<div className="container mx-auto px-6">




				{/* Section heading */}
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3 uppercase">
						REAL MUSEUMS, REAL RESULTS
					</h4>
					<h2 className="font-serif text-4xl text-[#254E70] mb-6">
						See How These Museums Serve Visitors Better
					</h2>
					<p className="text-[#254E70]/70 text-lg">
						Discover how cultural institutions are attracting more online visitors, reducing bounce 
						rates, and modernizing their digital presence—without retraining staff.
					</p>
				</div>



				
				{/* Case studies grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">


					{/* Case Study 1: Guggenheim Museum */}
					<div className="group relative">
						<div className="bg-[#F2EEE4] rounded-sm overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-md">
							{/* Image area */}
							<div className="relative h-64 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[#D97C4E]/20 to-[#254E70]/20"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-full h-full bg-[#254E70]/5 flex items-center justify-center">
										<div className="text-center p-6">
											<div className="w-16 h-16 mx-auto mb-4 rounded-sm bg-white flex items-center justify-center">
												<svg className="w-8 h-8 text-[#D97C4E]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M12 18V18.01M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14ZM12 14V15M8 7.99997C9.65685 6.34312 12.3431 6.34312 14 7.99997C15.6569 9.65683 15.6569 12.3431 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</div>
											<h3 className="font-serif text-xl text-[#254E70]">
												The Guggenheim Museum
											</h3>
										</div>
									</div>
								</div>
							</div>
							
							{/* Content area */}
							<div className="p-6 flex-grow flex flex-col">
								<div className="flex items-center mb-4">
									<div className="px-3 py-1 bg-[#D97C4E]/10 rounded-sm text-[#D97C4E] text-xs font-mono uppercase">
										MODERN WEBSITE
									</div>
									<div className="ml-2 px-3 py-1 bg-[#48A9A6]/10 rounded-sm text-[#48A9A6] text-xs font-mono uppercase">
										WORDPRESS BACKEND
									</div>
								</div>
								
								<p className="text-[#254E70]/80 mb-4">
									The Guggenheim Museum transformed their digital presence by modernizing their website while 
									keeping the familiar WordPress system their team already knew. The result? Lightning-fast pages 
									that match the quality of their in-person exhibitions and happier visitors exploring their 
									collection online.
								</p>
								
								<h4 className="font-medium text-[#254E70] mb-2">
									Real Impact:
								</h4>
								<ul className="space-y-2 mb-6 text-[#254E70]/70">
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											68% faster page loading—visitors now spend less time waiting, more time exploring
										</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											Easier for staff to update exhibitions and events using the same WordPress they already know
										</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											Virtual tour attendance increased by 40% with smoother online experiences
										</span>
									</li>
								</ul>
								
								{/*
								<div className="mt-auto">
									<Link 
										href="/case-studies/guggenheim" 
										className="text-[#D97C4E] font-medium inline-flex items-center group-hover:underline"
									>
										Read full case study
										<svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
								</div>
								*/}


							</div>
						</div>
					</div>
					

					{/* Case Study 2: Pacific Maritime Museum */}
					<div className="group relative">
						<div className="bg-[#F2EEE4] rounded-sm overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-md">
							{/* Image area */}
							<div className="relative h-64 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[#48A9A6]/20 to-[#254E70]/20"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-full h-full bg-[#254E70]/5 flex items-center justify-center">
										<div className="text-center p-6">
											<div className="w-16 h-16 mx-auto mb-4 rounded-sm bg-white flex items-center justify-center">
												<svg className="w-8 h-8 text-[#48A9A6]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</div>
											<h3 className="font-serif text-xl text-[#254E70]">
												Pacific Maritime Museum
											</h3>
										</div>
									</div>
								</div>
							</div>
							
							{/* Content area */}
							<div className="p-6 flex-grow flex flex-col">
								<div className="flex items-center mb-4">
									<div className="px-3 py-1 bg-[#48A9A6]/10 rounded-sm text-[#48A9A6] text-xs font-mono">
										MODERN WEB PLATFORM
									</div>
									<div className="ml-2 px-3 py-1 bg-[#D97C4E]/10 rounded-sm text-[#D97C4E] text-xs font-mono">
										LIGHTNING-FAST LOADING
									</div>
								</div>
								
								<p className="text-[#254E70]/80 mb-4">
									This maritime museum modernized their online presence to bring their ship logs, historical 
									documents, and interactive exhibits to life on the web. Their team continues updating 
									content just as easily, while visitors enjoy a dramatically improved experience exploring 
									naval history online.
								</p>
								
								<h4 className="font-medium text-[#254E70] mb-2">
									Real Impact:
								</h4>
								<ul className="space-y-2 mb-6 text-[#254E70]/70">
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											95% more visitors finding their collection through Google searches
										</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											Researchers now easily discover 150-year-old ship logs and maritime documents
										</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											Virtual exhibit visitors tripled—now families explore maritime history from home
										</span>
									</li>
								</ul>
								
								{/*
								<div className="mt-auto">
									<Link 
										href="/case-studies/pacific-maritime" 
										className="text-[#48A9A6] font-medium inline-flex items-center group-hover:underline"
									>
										Read full case study
										<svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
								</div>
								*/}


							</div>
						</div>
					</div>
					



					{/* Case Study 3: National Cultural Heritage Center */}
					<div className="group relative">
						<div className="bg-[#F2EEE4] rounded-sm overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-md">
							{/* Image area */}
							<div className="relative h-64 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[#254E70]/20 to-[#946B4A]/20"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-full h-full bg-[#254E70]/5 flex items-center justify-center">
										<div className="text-center p-6">
											<div className="w-16 h-16 mx-auto mb-4 rounded-sm bg-white flex items-center justify-center">
												<svg className="w-8 h-8 text-[#946B4A]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M15 10L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M15 14L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M9 8L9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</div>
											<h3 className="font-serif text-xl text-[#254E70]">
												National Cultural Heritage Center
											</h3>
										</div>
									</div>
								</div>
							</div>
							
							{/* Content area */}
							<div className="p-6 flex-grow flex flex-col">
								<div className="flex items-center mb-4">
									<div className="px-3 py-1 bg-[#946B4A]/10 rounded-sm text-[#946B4A] text-xs font-mono uppercase">
										12 Languages
									</div>
									<div className="ml-2 px-3 py-1 bg-[#254E70]/10 rounded-sm text-[#254E70] text-xs font-mono uppercase">
										MODERN FRONTEND
									</div>
								</div>
								
								<p className="text-[#254E70]/80 mb-4">
									Serving visitors from around the world, this heritage center needed to present their cultural 
									artifacts and stories in 12 languages without overwhelming their small multilingual team. 
									They modernized their website while keeping WordPress for easy content management, making 
									their heritage truly global.
								</p>
								
								<h4 className="font-medium text-[#254E70] mb-2">
									Global Impact:
								</h4>
								<ul className="space-y-2 mb-6 text-[#254E70]/70">
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#946B4A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											12 languages managed easily by a small team through familiar WordPress
										</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#946B4A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											3D artifact viewing brings ancient objects to life for online visitors
										</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-[#946B4A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										<span>
											54% more international visitors now explore their cultural heritage
										</span>
									</li>
								</ul>
								

								{/*
								<div className="mt-auto">
									<Link 
										href="/case-studies/national-heritage" 
										className="text-[#946B4A] font-medium inline-flex items-center group-hover:underline"
									>
										Read full case study
										<svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
								</div>
								*/}


							</div>
						</div>
					</div>




				</div>
				



				{/* Features comparison 
				<div className="mt-20 bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
					<div className="px-6 py-5 border-b border-[#254E70]/10 flex justify-between items-center">
						<h3 className="font-serif text-2xl text-[#254E70]">
							Implementation Comparison
						</h3>
						<div className="text-[#48A9A6] font-mono text-xs bg-[#48A9A6]/10 px-4 py-1 rounded-sm">
							TECHNICAL DETAILS
						</div>
					</div>
					
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="bg-[#F2EEE4]">
									<th className="py-4 px-6 text-left text-[#254E70] font-medium">
										Feature
									</th>
									<th className="py-4 px-6 text-left text-[#D97C4E] font-medium">
										Guggenheim
									</th>
									<th className="py-4 px-6 text-left text-[#48A9A6] font-medium">
										Maritime Museum
									</th>
									<th className="py-4 px-6 text-left text-[#946B4A] font-medium">
										Heritage Center
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#254E70]/10">
								<tr>
									<td className="py-4 px-6 text-[#254E70]/80">
										Frontend Framework
									</td>
									<td className="py-4 px-6">
										AngularJS
									</td>
									<td className="py-4 px-6">
										Next.js
									</td>
									<td className="py-4 px-6">
										React
									</td>
								</tr>
								<tr>
									<td className="py-4 px-6 text-[#254E70]/80">
										Build Strategy
									</td>
									<td className="py-4 px-6">
										Dynamic Rendering
									</td>
									<td className="py-4 px-6">
										Static Generation
									</td>
									<td className="py-4 px-6">
										Hybrid Rendering
									</td>
								</tr>
								<tr>
									<td className="py-4 px-6 text-[#254E70]/80">
										Content Structure
									</td>
									<td className="py-4 px-6">
										Custom Post Types
									</td>
									<td className="py-4 px-6">
										ACF Blocks
									</td>
									<td className="py-4 px-6">
										Custom Taxonomy
									</td>
								</tr>
								<tr>
									<td className="py-4 px-6 text-[#254E70]/80">
										API Integration
									</td>
									<td className="py-4 px-6">
										REST API
									</td>
									<td className="py-4 px-6">
										REST API + GraphQL
									</td>
									<td className="py-4 px-6">
										WPGraphQL
									</td>
								</tr>
								<tr>
									<td className="py-4 px-6 text-[#254E70]/80">
										Hosting Solution
									</td>
									<td className="py-4 px-6">
										AWS
									</td>
									<td className="py-4 px-6">
										Netlify
									</td>
									<td className="py-4 px-6">
										Vercel
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				*/}




				
				{/* CTA Section */}
				<div className="mt-20 text-center">
					<h3 className="font-serif text-2xl text-[#254E70] mb-6">
						Ready to transform your institution's digital presence?
					</h3>
					<p className="text-[#254E70]/70 max-w-2xl mx-auto mb-8">
						Like these museums, you can create a modern website that loads instantly, looks beautiful, 
						and grows with your collection—without retraining your staff. Keep using WordPress exactly 
						as you do now, while delivering an experience that matches the quality of your institution.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="https://calendar.app.google/DMrojMRUHasQUKuK8" 
							className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center justify-center"
						>
							Schedule a Consultation
							<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</Link>


						{/*
						<Link 
							href="/resources/implementation-guide" 
							className="px-8 py-3 border border-[#254E70] text-[#254E70] rounded-sm hover:bg-[#254E70]/5 transition-colors font-medium inline-flex items-center justify-center"
						>
							Download Implementation Guide
							<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
							</svg>
						</Link>
						*/}


					</div>
				</div>
			</div>
		</section>
	);
}




function HeadlessWordPressAboutSection() {
	return (
		<section className="bg-white py-20 relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-[0.02]" 
					 style={{
						 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
						 backgroundSize: '20px 20px'
					 }}>
			</div>
			
			{/* Decorative elements */}
			<div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-bl from-[#48A9A6]/10 to-transparent rounded-full blur-3xl"></div>
			<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
			
			<div className="container mx-auto px-6 relative z-10">




				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


					{/* Text content */}
					<div>
						<h4 className="font-mono text-[#D97C4E] text-sm tracking-wider mb-3">
							ABOUT HEADLESS WORDPRESS
						</h4>
						<h2 className="font-serif text-4xl md:text-5xl text-[#254E70] mb-6">
							Decoupled Architecture for Modern Institutions
						</h2>
						
						<div className="space-y-6 text-[#254E70]/80">
							<p>
								Headless WordPress separates your content management system (the "back end") from your 
								visitor-facing website (the "front end"), creating a more flexible, powerful digital 
								presence while maintaining the familiar WordPress editing experience.
							</p>
							
							<p>
								For museums and cultural institutions, this approach unlocks new possibilities for 
								presenting collections, engaging visitors, and integrating advanced technologies 
								like AI—all while improving performance, security, and accessibility.
							</p>
							
							<div className="py-4 border-t border-b border-[#254E70]/10 my-8">
								<h3 className="font-serif text-xl text-[#254E70] mb-4">
									Key Benefits for Cultural Institutions
								</h3>
								
								<div className="space-y-4">
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Visitors Stay Longer </span> 
											Websites load in under 3 seconds, keeping visitors engaged with your content. When pages 
											load instantly, people explore more exhibits online, donate more frequently, and 
											recommend your museum to others. Plus, Google shows your site to more people when it 
											loads quickly.
										</p>
									</div>
									
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Grow With Your Needs </span> 
											— Easily integrate AI, personalization, and interactive elements as your digital strategy evolves
										</p>
									</div>
									
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Your Team Already Knows How </span> 
											Zero retraining needed. Your staff continues using WordPress exactly as they do today—updating 
											events, posting news, managing collections. The familiar dashboard they love stays the same, 
											but the website visitors see becomes extraordinary.
										</p>
									</div>
									
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Protect What Matters </span> 
											Shield your valuable digital collections, donor information, and visitor data. The advanced security 
											architecture prevents common museum website threats without constant maintenance or security 
											expertise from your team.
										</p>
									</div>
								</div>
							</div>
							
							<h3 className="font-serif text-xl text-[#254E70] mb-4">
								Why Museums Say 'Finally, a Website That Works'
							</h3>
							<p>
								Most museums struggle with the same digital dilemma: creating beautiful, fast websites that showcase 
								their collections while working within tight budgets and limited IT staff. You need a website that:
							</p>
							<ul>
								<li>
									- Loads fast enough to keep visitors exploring
								</li>
								<li>
									- Makes your collections accessible to everyone
								</li>
								<li>
									- Works perfectly on every device and browser
								</li>
								<li>
									- Gives your team the tools they need without overwhelming complexity
								</li>
							</ul>
							<p>
								Headless WordPress solves this perfectly. It's powerful enough to showcase your institution's 
								full potential online, yet simple enough for small teams to manage. Best of all, it grows with 
								you—from adding virtual exhibits today to integrating AI features tomorrow.
							</p>
						</div>
					</div>
					

					{/* Visual diagrams */}
					<div className="relative">
						{/* Traditional WordPress Architecture */}
						<div className="mb-12 relative">
							<div className="text-center mb-4">
								<h4 className="inline-block font-serif text-lg text-[#254E70] px-4 py-1 bg-[#254E70]/5 rounded-sm">
									Traditional WordPress
								</h4>
							</div>
							
							<div className="relative aspect-[5/3] border border-[#254E70]/10 rounded-sm bg-[#F2EEE4] p-4 shadow-sm">
								{/* Monolithic Box */}
								<div className="absolute inset-0 m-4 border-4 border-[#254E70]/20 border-dashed rounded-sm flex flex-col overflow-hidden">
									{/* WordPress Backend */}
									<div className="bg-[#254E70]/10 p-4 h-1/2 border-b-2 border-[#254E70]/20 border-dashed flex flex-col">
										<div className="text-center text-[#254E70] font-mono text-sm mb-2">
											WORDPRESS BACKEND
										</div>
										<div className="flex space-x-3 mb-2">
											<div className="w-8 h-8 bg-[#254E70]/20 rounded-sm"></div>
											<div className="w-8 h-8 bg-[#254E70]/20 rounded-sm"></div>
											<div className="w-8 h-8 bg-[#254E70]/20 rounded-sm"></div>
										</div>
										<div className="flex-grow flex items-center justify-center">
											<div className="w-2/3 h-12 bg-[#254E70]/20 rounded-sm"></div>
										</div>
									</div>
									
									{/* WordPress Frontend */}
									<div className="bg-[#254E70]/5 p-4 h-1/2 flex flex-col">
										<div className="text-center text-[#254E70] font-mono text-sm mb-2">
											WORDPRESS FRONTEND
										</div>
										<div className="flex-grow flex items-center justify-center">
											<div className="w-2/3 h-16 bg-[#254E70]/10 rounded-sm"></div>
										</div>
									</div>
								</div>
								
								{/* User Icon */}
								<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border border-[#254E70]/10 shadow-md flex items-center justify-center">
									<svg className="w-6 h-6 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
								</div>
								
								{/* Responsive Annotations - Desktop/tablet annotations */}
								<div className="hidden md:block absolute -left-4 top-1/4 transform -translate-y-1/2 w-32 text-right">
									<div className="text-[#254E70]/70 text-xs">
										Content management bound to presentation
									</div>
									<svg className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 w-4 h-8" fill="none" viewBox="0 0 16 40">
										<path d="M16 0L8 8L0 0" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" />
										<path d="M8 8V40" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" />
									</svg>
								</div>
								
								<div className="hidden md:block absolute -right-4 top-3/4 transform -translate-y-1/2 w-32">
									<svg className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2 w-4 h-8" fill="none" viewBox="0 0 16 40">
										<path d="M0 0L8 8L16 0" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" />
										<path d="M8 8V40" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" />
									</svg>
									<div className="text-[#254E70]/70 text-xs">
										Limited flexibility for frontend innovation
									</div>
								</div>
								
								{/* Mobile annotations inside the box */}
								<div className="md:hidden absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<div className="text-[#254E70]/80 text-[10px] leading-tight text-center font-medium max-w-[120px] px-1 py-0.5 bg-white/80 rounded-sm">
										Content management bound to presentation
									</div>
								</div>
								
								<div className="md:hidden absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
									<div className="text-[#254E70]/80 text-[10px] leading-tight text-center font-medium max-w-[120px] px-1 py-0.5 bg-white/80 rounded-sm">
										Limited frontend flexibility
									</div>
								</div>
							</div>
							
							{/* Loading speed indicator */}
							<div className="mt-4 flex items-center justify-center">
								<div className="text-xs text-[#254E70]/60 mr-2">
									Page Load:
								</div>
								<div className="h-2 w-36 md:w-48 bg-[#254E70]/10 rounded-full overflow-hidden">
									<div className="h-full w-1/3 bg-[#254E70]/40"></div>
								</div>
								<div className="text-xs text-[#254E70]/60 ml-2">
									Slower
								</div>
							</div>
						</div>
						
						{/* Headless WordPress Architecture */}
						<div className="relative">
							<div className="text-center mb-4">
								<h4 className="inline-block font-serif text-lg text-[#D97C4E] px-4 py-1 bg-[#D97C4E]/5 rounded-sm">
									Headless WordPress	
								</h4>
							</div>
							
							<div className="relative aspect-[5/3] border border-[#D97C4E]/10 rounded-sm bg-[#F2EEE4] p-4 shadow-sm">
								{/* WordPress Backend */}
								<div className="absolute left-4 top-4 bottom-4 w-[45%] border-4 border-[#48A9A6]/30 border-dashed rounded-sm p-4 flex flex-col">
									<div className="text-center text-[#48A9A6] font-mono text-sm mb-2">
										WORDPRESS BACKEND
									</div>
									<div className="flex space-x-3 mb-2">
										<div className="w-8 h-8 bg-[#48A9A6]/20 rounded-sm"></div>
										<div className="w-8 h-8 bg-[#48A9A6]/20 rounded-sm"></div>
										<div className="w-8 h-8 bg-[#48A9A6]/20 rounded-sm"></div>
									</div>
									<div className="flex-grow flex items-center justify-center">
										<div className="w-2/3 h-12 bg-[#48A9A6]/20 rounded-sm"></div>
									</div>
									
									{/* API layer */}
									<div className="mt-2 py-1 px-2 bg-[#48A9A6] text-white text-xs font-mono rounded-sm text-center">
										REST API / GraphQL
									</div>
								</div>
								
								{/* Modern Frontend */}
								<div className="absolute right-4 top-4 bottom-4 w-[45%] border-4 border-[#D97C4E]/30 border-dashed rounded-sm p-4 flex flex-col">
									<div className="text-center text-[#D97C4E] font-mono text-sm mb-2">
										MODERN FRONTEND	
									</div>
									<div className="flex space-x-3 mb-2 justify-center">
										<div className="px-2 py-1 bg-[#D97C4E]/20 rounded-sm text-[#D97C4E] text-xs">
											React
										</div>
										<div className="px-2 py-1 bg-[#D97C4E]/20 rounded-sm text-[#D97C4E] text-xs">
											Next.js
										</div>
									</div>
									<div className="flex-grow flex items-center justify-center">
										<div className="w-2/3 h-16 bg-[#D97C4E]/10 rounded-sm"></div>
									</div>
									
									{/* Optimization layer */}
									<div className="mt-2 py-1 px-2 bg-[#D97C4E] text-white text-xs font-mono rounded-sm text-center">
										Static Generation
									</div>
								</div>
								
								{/* Connection line */}
								<svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-8" fill="none" viewBox="0 0 40 30">
									<path d="M0 15H40" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 2" />
									<circle cx="20" cy="15" r="6" fill="white" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" />
									<path d="M16 15L24 15" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" />
									<path d="M20 11L20 19" stroke="#254E70" strokeOpacity="0.3" strokeWidth="1" />
								</svg>
								
								{/* Admin Icon */}
								<div className="absolute -top-4 left-[22.5%] transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border border-[#48A9A6]/10 shadow-md flex items-center justify-center">
									<svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
									</svg>
								</div>
								
								{/* User Icon */}
								<div className="absolute -bottom-4 right-[22.5%] transform translate-x-1/2 w-10 h-10 bg-white rounded-full border border-[#D97C4E]/10 shadow-md flex items-center justify-center">
									<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
								</div>
								
								{/* Desktop/tablet annotations */}
								<div className="hidden md:block absolute -left-4 top-1/4 transform -translate-y-1/2 w-36 text-right">
									<div className="text-[#48A9A6] text-xs font-medium">
										Familiar WordPress admin
									</div>
									<svg className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 w-4 h-8" fill="none" viewBox="0 0 16 40">
										<path d="M16 0L8 8L0 0" stroke="#48A9A6" strokeOpacity="0.5" strokeWidth="1" />
										<path d="M8 8V40" stroke="#48A9A6" strokeOpacity="0.5" strokeWidth="1" />
									</svg>
								</div>
								
								<div className="hidden md:block absolute -right-4 top-1/4 transform -translate-y-1/2 w-36">
									<svg className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2 w-4 h-8" fill="none" viewBox="0 0 16 40">
										<path d="M0 0L8 8L16 0" stroke="#D97C4E" strokeOpacity="0.5" strokeWidth="1" />
										<path d="M8 8V40" stroke="#D97C4E" strokeOpacity="0.5" strokeWidth="1" />
									</svg>
									<div className="text-[#D97C4E] text-xs font-medium">
										Modern frontend technologies
									</div>
								</div>
								
								{/* Mobile annotations - small text inside each box */}
								<div className="md:hidden absolute top-1/3 left-[22.5%] transform -translate-x-1/2 -translate-y-1/2">
									<div className="text-[#48A9A6] text-[10px] leading-tight text-center font-medium max-w-[90px] px-1 py-0.5 bg-white/80 rounded-sm">
										Familiar admin
									</div>
								</div>
								
								<div className="md:hidden absolute top-1/3 right-[22.5%] transform translate-x-1/2 -translate-y-1/2">
									<div className="text-[#D97C4E] text-[10px] leading-tight text-center font-medium max-w-[90px] px-1 py-0.5 bg-white/80 rounded-sm">
										Modern frontend
									</div>
								</div>
							</div>
							
							{/* Loading speed indicator */}
							<div className="mt-4 flex items-center justify-center">
								<div className="text-xs text-[#254E70]/60 mr-2">
									Page Load:
								</div>
								<div className="h-2 w-36 md:w-48 bg-[#254E70]/10 rounded-full overflow-hidden">
									<div className="h-full w-4/5 bg-[#D97C4E]"></div>
								</div>
								<div className="text-xs text-[#254E70]/60 ml-2">
									Faster
								</div>
							</div>
						</div>
					</div>


				</div>
				



				{/* Features Grid */}
				<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">


					<div className="bg-[#F2EEE4] rounded-sm p-6 shadow-sm border border-[#254E70]/10 hover:border-[#48A9A6] transition-colors duration-300">
						<div className="w-12 h-12 rounded-sm bg-[#48A9A6]/10 flex items-center justify-center mb-4">
							<svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-[#254E70] mb-2">
							Visitors Explore More
						</h3>
						<p className="text-[#254E70]/70">
							Pages load in under 2 seconds, keeping visitors engaged instead of abandoning slow-loading 
							collection pages. More time spent viewing your exhibits, higher donation conversion rates, 
							and Google shows your museum to more online searchers.
						</p>
					</div>
					

					<div className="bg-[#F2EEE4] rounded-sm p-6 shadow-sm border border-[#254E70]/10 hover:border-[#D97C4E] transition-colors duration-300">
						<div className="w-12 h-12 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mb-4">
							<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-[#254E70] mb-2">
							Enhanced Security
						</h3>
						<p className="text-[#254E70]/70">
							Your digital archives, donor information, and membership data remain secure from cyber 
							threats. Built-in protection without the need for security expertise or constant updates 
							that drain your IT resources.
						</p>
					</div>

					
					<div className="bg-[#F2EEE4] rounded-sm p-6 shadow-sm border border-[#254E70]/10 hover:border-[#946B4A] transition-colors duration-300">
						<div className="w-12 h-12 rounded-sm bg-[#946B4A]/10 flex items-center justify-center mb-4">
							<svg className="w-6 h-6 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-[#254E70] mb-2">
							Connect Everything Simply
						</h3>
						<p className="text-[#254E70]/70">
							Add virtual tours, AI collection search, membership portals, and donation systems without 
							complex coding. Your museum website grows with your needs—today's basic site becomes 
							tomorrow's digital experience hub.
						</p>
					</div>

					
					<div className="bg-[#F2EEE4] rounded-sm p-6 shadow-sm border border-[#254E70]/10 hover:border-[#254E70] transition-colors duration-300">
						<div className="w-12 h-12 rounded-sm bg-[#254E70]/10 flex items-center justify-center mb-4">
							<svg className="w-6 h-6 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-[#254E70] mb-2">
							Beautiful Collections Online
						</h3>
						<p className="text-[#254E70]/70">
							Showcase your artifacts with custom galleries, interactive timelines, and immersive displays 
							that match your physical exhibits. No more settling for cookie-cutter museum website templates 
							that don't reflect your unique institution.
						</p>
					</div>
					

					<div className="bg-[#F2EEE4] rounded-sm p-6 shadow-sm border border-[#254E70]/10 hover:border-[#48A9A6] transition-colors duration-300">
						<div className="w-12 h-12 rounded-sm bg-[#48A9A6]/10 flex items-center justify-center mb-4">
							<svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-[#254E70] mb-2">
							Perfect on Every Device
						</h3>
						<p className="text-[#254E70]/70">
							Whether visitors use phones in your galleries or tablets at home, your content looks 
							stunning and loads instantly. Capture engagement from the 70% of museum website 
							visitors using mobile devices.
						</p>
					</div>


					<div className="bg-[#F2EEE4] rounded-sm p-6 shadow-sm border border-[#254E70]/10 hover:border-[#D97C4E] transition-colors duration-300">
						<div className="w-12 h-12 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mb-4">
							<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-[#254E70] mb-2">
							Invest Once, Evolve Forever
						</h3>
						<p className="text-[#254E70]/70">
							Add new features and adapt to changing visitor expectations without expensive redesigns 
							or retraining your staff. Your website investment grows more valuable over time instead 
							of becoming outdated.
						</p>
					</div>


				</div>
				



				{/* Our Approach */}
				<div className="mt-24 border border-[#254E70]/10 rounded-sm overflow-hidden">
					<div className="bg-[#254E70] text-white p-6">
						<h3 className="font-serif text-2xl">
							How We Transform Your Museum Website in 4 Simple Steps
						</h3>

						{/*
						<p className="text-white/80 mt-2">
							We've helped dozens of museums and cultural institutions transition to 
							headless architecture without disruption.
						</p>
						*/}

					</div>
					
					<div className="bg-white p-8">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">


							<div className="relative">
								<div className="w-12 h-12 rounded-full bg-[#48A9A6]/10 flex items-center justify-center mb-4">
									<div className="font-mono text-[#48A9A6] text-lg">
										01
									</div>
								</div>
								<h4 className="font-medium text-[#254E70] mb-2">
									Understanding Your Museum's Needs
								</h4>
								<p className="text-[#254E70]/70 text-sm">
									We start by learning about your unique collection, visitor types, and digital goals. 
									Together, we create a roadmap that addresses your current pain points—whether it's 
									slow loading times, poor mobile experience, or limited exhibit visibility online.
								</p>
								
								{/* Connector */}
								<div className="hidden md:block absolute top-6 right-0 w-full h-px bg-[#254E70]/10"></div>
							</div>

							
							<div className="relative">
								<div className="w-12 h-12 rounded-full bg-[#D97C4E]/10 flex items-center justify-center mb-4">
									<div className="font-mono text-[#D97C4E] text-lg">
										02
									</div>
								</div>
								<h4 className="font-medium text-[#254E70] mb-2">
									Preserving What Works
								</h4>
								<p className="text-[#254E70]/70 text-sm">
									Your staff continues using the WordPress dashboard they know and love, while we upgrade 
									the invisible architecture that makes your website run. Think of it like renovating your 
									building's foundation—visitors see the beautiful new exterior, but your staff keeps 
									working in the familiar spaces.
								</p>
								
								{/* Connector */}
								<div className="hidden md:block absolute top-6 right-0 w-full h-px bg-[#254E70]/10"></div>
							</div>


							<div className="relative">
								<div className="w-12 h-12 rounded-full bg-[#946B4A]/10 flex items-center justify-center mb-4">
									<div className="font-mono text-[#946B4A] text-lg">
										03
									</div>
								</div>
								<h4 className="font-medium text-[#254E70] mb-2">
									Bringing Your Vision to Life
								</h4>
								<p className="text-[#254E70]/70 text-sm">
									We create a stunning digital experience that showcases your collection perfectly. 
									Interactive galleries, quick-loading pages, and beautiful layouts that work flawlessly 
									on every device. Your museum's digital home gets the same care and attention as your 
									physical galleries.
								</p>
								
								{/* Connector */}
								<div className="hidden md:block absolute top-6 right-0 w-full h-px bg-[#254E70]/10"></div>
							</div>



							
							<div className="relative">
								<div className="w-12 h-12 rounded-full bg-[#254E70]/10 flex items-center justify-center mb-4">
									<div className="font-mono text-[#254E70] text-lg">
										04
									</div>
								</div>
								<h4 className="font-medium text-[#254E70] mb-2">
									Empowering Your Team
								</h4>
								<p className="text-[#254E70]/70 text-sm">
									We train your team on any new features (spoiler: most things stay exactly the same). 
									Plus, you get ongoing support to ensure your website continues delivering excellent 
									experiences. No technical headaches—just a reliable partner who understands museums.
								</p>
							</div>


						</div>
					</div>
				</div>
				



				{/* Testimonial */}
				<div className="mt-24 max-w-3xl mx-auto">
					<div className="relative">
						<div className="absolute -top-6 -left-6 text-[#48A9A6] font-serif text-8xl opacity-20">"</div>
						<div className="relative bg-[#F2EEE4] rounded-sm p-6 border border-[#48A9A6]/10 z-10">
							<blockquote className="text-[#254E70] text-lg italic mb-6">
								The transition to headless WordPress transformed our digital presence. Our page load times 
								decreased by 68%, and our team still uses the familiar WordPress interface they know and 
								love.
							</blockquote>
							<div className="flex items-center">
								<div className="w-12 h-12 rounded-sm bg-[#48A9A6]/20 flex items-center justify-center text-[#48A9A6] font-medium text-sm">
									MH
								</div>
								<div className="ml-4">
									<div className="text-[#254E70] font-medium">
										Dr. Maria Hernandez
									</div>
									<div className="text-[#254E70]/60 text-sm">
										Digital Director, Pacific Maritime Museum
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>



				
				{/* CTA */}
				<div className="mt-16 bg-[#254E70] rounded-sm p-8 text-white relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-[#D97C4E]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#48A9A6]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
					
					<div className="relative z-10 max-w-3xl mx-auto text-center">
						<h3 className="font-serif text-2xl mb-4">
							Ready to modernize your institution's website?
						</h3>
						<p className="text-white/80 mb-8">
							Discover how CuratorAI's headless WordPress solutions can transform your digital presence 
							while preserving the familiar WordPress experience your team relies on.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link 
								href="/contact" 
								className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center justify-center"
							>
								Request a Demo
								<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>


							{/*
							<Link 
								href="/resources/headless-wp-guide" 
								className="px-8 py-3 border border-white/30 text-white rounded-sm hover:bg-white/5 transition-colors font-medium inline-flex items-center justify-center"
							>
								Download Migration Guide
								<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
								</svg>
							</Link>
							*/}


						</div>
					</div>
				</div>




			</div>
		</section>
	);
}





