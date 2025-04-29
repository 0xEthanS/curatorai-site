import Link from 'next/link';




export default function Overview() {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-[0.02]" 
					 style={{
						 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
						 backgroundSize: '20px 20px'
					 }}>
			</div>
			
			{/* Decorative elements */}
			<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
			<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#48A9A6]/10 to-transparent rounded-full blur-3xl"></div>
			
			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">OUR SERVICES</h4>
					<h2 className="font-serif text-4xl text-[#254E70] mb-6">Transformative Solutions for Cultural Institutions</h2>
					<p className="text-[#254E70]/80">
						We empower museums and cultural institutions with technology that enhances accessibility, 
						engagement, and the preservation of cultural heritage.
					</p>
				</div>
				
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
					{/* RAG Implementation Service */}
					<div className="relative group">
						<div className="absolute inset-0 rounded-sm bg-gradient-to-r from-[#48A9A6]/50 to-[#48A9A6]/5 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<div className="relative bg-[#F2EEE4] rounded-sm shadow-md overflow-hidden border border-[#254E70]/10 h-full hover:border-[#48A9A6]/50 transition-colors duration-300">
							{/* Service header */}
							<div className="h-16 bg-[#48A9A6]/10 border-b border-[#48A9A6]/20 px-8 flex items-center">
								<div className="flex items-center">
									<div className="w-8 h-8 rounded-sm bg-[#48A9A6]/20 flex items-center justify-center">
										<svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</div>
									<h3 className="font-serif text-xl text-[#254E70] ml-3">RAG Implementation</h3>
								</div>
							</div>
							
							{/* Content area */}
							<div className="p-8">
								<div className="mb-6">
									<div className="relative aspect-video rounded-sm overflow-hidden bg-[#254E70]/5 border border-[#48A9A6]/10 mb-6">
										{/* Visual representation of RAG */}
										<div className="absolute inset-0 flex flex-col">
											{/* Data representation */}
											<div className="h-1/3 border-b border-dashed border-[#48A9A6]/30 flex items-center justify-center relative">
												<div className="absolute inset-x-0 grid grid-cols-12 gap-2 px-8">
													<div className="col-span-2 h-3 bg-[#254E70]/20 rounded-sm"></div>
													<div className="col-span-4 h-3 bg-[#254E70]/10 rounded-sm"></div>
													<div className="col-span-3 h-3 bg-[#254E70]/20 rounded-sm"></div>
													<div className="col-span-3 h-3 bg-[#254E70]/10 rounded-sm"></div>
												</div>
												<div className="absolute inset-x-0 top-6 grid grid-cols-12 gap-2 px-8">
													<div className="col-span-3 h-3 bg-[#254E70]/10 rounded-sm"></div>
													<div className="col-span-5 h-3 bg-[#254E70]/20 rounded-sm"></div>
													<div className="col-span-2 h-3 bg-[#254E70]/10 rounded-sm"></div>
													<div className="col-span-2 h-3 bg-[#254E70]/20 rounded-sm"></div>
												</div>
											</div>
											
											{/* Retrieval layer */}
											<div className="h-1/3 border-b border-dashed border-[#48A9A6]/30 flex items-center justify-center relative">
												<div className="absolute right-10 w-1/3 h-12 bg-[#48A9A6]/20 rounded-sm flex items-center justify-center">
													<span className="text-xs font-mono text-[#48A9A6]">RETRIEVAL</span>
												</div>
												<div className="absolute left-10 top-4 w-1/3 h-3 bg-[#254E70]/10 rounded-sm"></div>
												<div className="absolute left-10 bottom-4 w-1/3 h-3 bg-[#254E70]/20 rounded-sm"></div>
												
												{/* Connection lines */}
												<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100" fill="none">
													<path d="M100 20 L300 50" stroke="rgba(72, 169, 166, 0.3)" strokeWidth="1" strokeDasharray="4 2" />
													<path d="M100 80 L300 50" stroke="rgba(72, 169, 166, 0.3)" strokeWidth="1" strokeDasharray="4 2" />
												</svg>
											</div>
											
											{/* Generation layer */}
											<div className="h-1/3 flex items-center justify-center relative">
												<div className="w-2/3 h-8 bg-[#48A9A6]/10 rounded-sm mx-auto relative">
													<div className="absolute inset-0 flex items-center justify-center">
														<div className="w-full h-2 mx-4">
															<div className="w-full h-full bg-[#48A9A6]/30 rounded-full overflow-hidden">
																<div className="w-2/3 h-full bg-[#48A9A6] rounded-full"></div>
															</div>
														</div>
														<div className="absolute right-2 text-[9px] font-mono text-[#48A9A6]">
															67%
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<p className="text-[#254E70]/80 mb-6">
										Retrieval Augmented Generation (RAG) connects your visitors with your institution's knowledge through intelligent AI technology. Our implementation makes collections searchable, engaging, and accessible through natural language.
									</p>
									
									<div className="space-y-3 mb-8">
										<div className="flex items-start">
											<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
												<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<p className="text-[#254E70]/80">
												<span className="text-[#254E70] font-medium">Enhanced Accessibility</span> — Make your collections searchable through natural conversational queries
											</p>
										</div>
										
										<div className="flex items-start">
											<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
												<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<p className="text-[#254E70]/80">
												<span className="text-[#254E70] font-medium">Knowledge Preservation</span> — Transform archives and institutional expertise into living resources
											</p>
										</div>
										
										<div className="flex items-start">
											<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
												<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<p className="text-[#254E70]/80">
												<span className="text-[#254E70] font-medium">Visitor Engagement</span> — Enable deeper interactions with collections through AI-powered assistance
											</p>
										</div>
									</div>
								</div>
								
								<div className="pt-4 border-t border-[#254E70]/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
									<div className="text-sm text-[#254E70]/60 font-mono">
										PERFECT FOR: MUSEUMS • ARCHIVES • LIBRARIES
									</div>
									<Link 
										href="/services/rag" 
										className="px-5 py-2 bg-[#48A9A6] text-white rounded-sm hover:bg-[#48A9A6]/90 transition-colors font-medium text-sm inline-flex items-center whitespace-nowrap"
									>
										Learn More
										<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
					
					{/* Headless WordPress Service */}
					<div className="relative group">
						<div className="absolute inset-0 rounded-sm bg-gradient-to-r from-[#D97C4E]/50 to-[#D97C4E]/5 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
						<div className="relative bg-[#F2EEE4] rounded-sm shadow-md overflow-hidden border border-[#254E70]/10 h-full hover:border-[#D97C4E]/50 transition-colors duration-300">
							{/* Service header */}
							<div className="h-16 bg-[#D97C4E]/10 border-b border-[#D97C4E]/20 px-8 flex items-center">
								<div className="flex items-center">
									<div className="w-8 h-8 rounded-sm bg-[#D97C4E]/20 flex items-center justify-center">
										<svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
										</svg>
									</div>
									<h3 className="font-serif text-xl text-[#254E70] ml-3">Headless WordPress</h3>
								</div>
							</div>
							
							{/* Content area */}
							<div className="p-8">
								<div className="mb-6">
									<div className="relative aspect-video rounded-sm overflow-hidden bg-[#254E70]/5 border border-[#D97C4E]/10 mb-6">
										{/* Visual representation of Headless WordPress */}
										<div className="absolute inset-0 flex items-center">
											{/* WordPress Backend box */}
											<div className="w-2/5 h-3/4 bg-white/50 ml-6 shadow-sm rounded-sm p-3 relative">
												<div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#D97C4E]/20 flex items-center justify-center text-[#D97C4E] text-xs">W</div>
												<div className="mt-7 space-y-2">
													<div className="h-3 bg-[#254E70]/10 rounded-sm w-5/6"></div>
													<div className="h-3 bg-[#254E70]/20 rounded-sm w-3/4"></div>
													<div className="h-3 bg-[#254E70]/10 rounded-sm w-full"></div>
												</div>
												<div className="absolute bottom-2 left-2 right-2 h-4 bg-[#D97C4E]/20 rounded-sm flex items-center justify-center">
													<span className="text-[8px] font-mono text-[#D97C4E]">WP ADMIN</span>
												</div>
											</div>
											
											{/* API Connection */}
											<div className="w-1/5 h-1/2 flex items-center justify-center relative">
												<svg className="w-full h-8" viewBox="0 0 100 24" fill="none">
													<path d="M10 12 L90 12" stroke="rgba(217, 124, 78, 0.5)" strokeWidth="2" strokeDasharray="4 2" />
													<circle cx="50" cy="12" r="8" fill="white" stroke="rgba(217, 124, 78, 0.3)" strokeWidth="1" />
													<path d="M46 12 L54 12" stroke="rgba(217, 124, 78, 0.5)" strokeWidth="1" />
													<path d="M50 8 L50 16" stroke="rgba(217, 124, 78, 0.5)" strokeWidth="1" />
												</svg>
												<div className="absolute top-20 left-1/2 transform -translate-x-1/2 rounded-sm bg-white/80 py-1 px-2">
													<span className="text-[8px] font-mono text-[#D97C4E]">API</span>
												</div>
											</div>
											
											{/* Frontend box */}
											<div className="w-2/5 h-3/4 bg-white/50 mr-6 shadow-sm rounded-sm p-3 relative">
												<div className="mt-2 space-y-3">
													<div className="h-2 bg-[#254E70]/5 rounded-sm w-full flex items-center">
														<div className="w-1/2 h-full bg-[#D97C4E]/20 rounded-sm"></div>
													</div>
													<div className="h-10 bg-[#254E70]/10 rounded-sm w-full"></div>
													<div className="h-6 bg-[#254E70]/5 rounded-sm w-full"></div>
												</div>
												<div className="absolute bottom-2 left-2 right-2 h-4 bg-[#D97C4E]/20 rounded-sm flex items-center justify-center">
													<span className="text-[8px] font-mono text-[#D97C4E]">REACT FRONTEND</span>
												</div>
											</div>
										</div>
									</div>
									
									<p className="text-[#254E70]/80 mb-6">
										Our headless WordPress implementation separates your content management system from your visitor-facing website, creating a lightning-fast, flexible digital presence while maintaining the familiar WordPress editing experience.
									</p>
									
									<div className="space-y-3 mb-8">
										<div className="flex items-start">
											<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
												<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<p className="text-[#254E70]/80">
												<span className="text-[#254E70] font-medium">Lightning-Fast Performance</span> — 2-5x faster page loads with optimized static generation
											</p>
										</div>
										
										<div className="flex items-start">
											<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
												<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<p className="text-[#254E70]/80">
												<span className="text-[#254E70] font-medium">Familiar Content Management</span> — Your team continues using the WordPress interface they know
											</p>
										</div>
										
										<div className="flex items-start">
											<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
												<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<p className="text-[#254E70]/80">
												<span className="text-[#254E70] font-medium">Future-Ready Architecture</span> — Easily integrate with AI and other modern technologies
											</p>
										</div>
									</div>
								</div>
								
								<div className="pt-4 border-t border-[#254E70]/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
									<div className="text-sm text-[#254E70]/60 font-mono">
										PERFECT FOR: MUSEUMS • GALLERIES • CULTURAL CENTERS
									</div>
									<Link 
										href="/services/headless-wordpress" 
										className="px-5 py-2 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium text-sm inline-flex items-center whitespace-nowrap"
									>
										Learn More
										<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* Additional Services teaser */}
				<div className="mt-16 max-w-3xl mx-auto text-center">
					<h3 className="font-serif text-2xl text-[#254E70] mb-4">Complete Digital Transformation</h3>
					<p className="text-[#254E70]/80 mb-8">
						Our core services can be combined with additional solutions for a comprehensive 
						approach to your institution's digital needs.
					</p>
					
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
						<div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-[#254E70]/10">
							<div className="w-12 h-12 mx-auto rounded-sm bg-[#946B4A]/10 flex items-center justify-center mb-3">
								<svg className="w-6 h-6 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
							<h4 className="font-medium text-[#254E70] mb-1">Analytics Integration</h4>
							<p className="text-sm text-[#254E70]/70">Visitor insights and behavior tracking</p>
						</div>
						
						<div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-[#254E70]/10">
							<div className="w-12 h-12 mx-auto rounded-sm bg-[#254E70]/10 flex items-center justify-center mb-3">
								<svg className="w-6 h-6 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
								</svg>
							</div>
							<h4 className="font-medium text-[#254E70] mb-1">Digital Ticketing</h4>
							<p className="text-sm text-[#254E70]/70">Seamless online reservation systems</p>
						</div>
						
						<div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-[#254E70]/10">
							<div className="w-12 h-12 mx-auto rounded-sm bg-[#48A9A6]/10 flex items-center justify-center mb-3">
								<svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<h4 className="font-medium text-[#254E70] mb-1">Virtual Tours</h4>
							<p className="text-sm text-[#254E70]/70">Immersive digital exhibition experiences</p>
						</div>
						
						<div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-[#254E70]/10">
							<div className="w-12 h-12 mx-auto rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mb-3">
								<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
							<h4 className="font-medium text-[#254E70] mb-1">Membership Portals</h4>
							<p className="text-sm text-[#254E70]/70">Exclusive digital content for members</p>
						</div>
					</div>
					
					<div className="mt-8">
						<Link 
							href="/services" 
							className="px-6 py-3 bg-[#254E70] text-white rounded-sm hover:bg-[#254E70]/90 transition-colors font-medium inline-flex items-center"
						>
							Explore All Services
							<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}