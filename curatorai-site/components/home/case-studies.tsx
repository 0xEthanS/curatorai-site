import Link from 'next/link';
import Image from 'next/image';




export default function CaseStudies() {
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
			<div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
			<div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-tl from-[#48A9A6]/10 to-transparent rounded-full blur-3xl"></div>
			
			<div className="container mx-auto px-6 relative z-10">




				<div className="max-w-3xl mx-auto text-center mb-16">
					<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">
						SUCCESS STORIES
					</h4>
					<h2 className="font-serif text-4xl md:text-5xl text-[#254E70] mb-6">
						Transformations in Action	
					</h2>
					<p className="text-[#254E70]/80">
						See how cultural institutions are using headless wordpress and RAG Solutions to 
						enhance accessibility, engage audiences, and preserve their unique heritage.
					</p>
				</div>
				



				{/* Featured Case Study */}
				<div className="mb-16">
					<div className="bg-[#F2EEE4] rounded-sm shadow-md overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-12">
							{/* Image Section */}
							<div className="lg:col-span-5 relative">
								<div className="aspect-[4/3] relative bg-[#254E70]/5 overflow-hidden">
									{/* This would be a real image in production */}
									<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#254E70]/10 to-[#D97C4E]/10">
										<div className="text-center p-8">
											<div className="w-24 h-24 mx-auto mb-4 rounded-sm bg-white flex items-center justify-center shadow-md">
												<svg className="w-12 h-12 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
												</svg>
											</div>
											<h3 className="font-serif text-2xl text-[#254E70]">
												The Metropolitan Art Museum
											</h3>
											<p className="text-[#254E70]/70 mt-2 font-serif italic">
												"Where Collection Meets Connection"
											</p>
										</div>
									</div>
								</div>
							</div>
							
							{/* Content Section */}
							<div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
								<div className="flex space-x-3 mb-4">
									<span className="px-3 py-1 bg-[#D97C4E]/10 text-[#D97C4E] text-xs font-mono rounded-sm">
										RAG IMPLEMENTATION
									</span>
									<span className="px-3 py-1 bg-[#48A9A6]/10 text-[#48A9A6] text-xs font-mono rounded-sm">
										FEATURED
									</span>
								</div>
								
								<h3 className="font-serif text-2xl text-[#254E70] mb-4">
									Making 200,000 Artifacts Accessible Through Conversation
								</h3>
								
								<p className="text-[#254E70]/80 mb-6">
									The Metropolitan Art Museum needed to make their vast collection more 
									accessible to both casual visitors and serious researchers. With a RAG 
									implementation, they transformed how people discover and engage with art.
								</p>
								
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
									<div className="bg-white p-4 rounded-sm shadow-sm">
										<div className="text-[#D97C4E] font-mono text-xl mb-1">
											79%
										</div>
										<div className="text-[#254E70]/80 text-sm">
											Increase in digital engagement
										</div>
									</div>
									
									<div className="bg-white p-4 rounded-sm shadow-sm">
										<div className="text-[#D97C4E] font-mono text-xl mb-1">
											93%
										</div>
										<div className="text-[#254E70]/80 text-sm">
											Visitor satisfaction rating
										</div>
									</div>
									
									<div className="bg-white p-4 rounded-sm shadow-sm">
										<div className="text-[#D97C4E] font-mono text-xl mb-1">
											42%
										</div>
										<div className="text-[#254E70]/80 text-sm">
											Reduction in basic staff inquiries
										</div>
									</div>
								</div>
								

					 			{/*
								<div className="flex items-center justify-between">
									<Link 
										href="/case-studies/metropolitan-museum" 
										className="text-[#D97C4E] font-medium inline-flex items-center hover:underline"
									>
										Read full case study
										<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
									
									<div className="text-[#254E70]/60 text-sm">
										Completed Q1 2024
									</div>
								</div>
								*/}


							</div>
						</div>
					</div>
				</div>
				



				{/* Additional Case Studies Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Case Study 1 */}
					<div className="bg-white rounded-sm shadow-md border border-[#254E70]/10 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
						<div className="aspect-video relative overflow-hidden bg-[#254E70]/5">
							{/* This would be a real image in production */}
							<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#254E70]/5 to-[#48A9A6]/5 group-hover:scale-105 transition-transform duration-500">
								<div className="w-16 h-16 rounded-sm bg-white flex items-center justify-center shadow-md">
									<svg className="w-8 h-8 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
									</svg>
								</div>
							</div>
							
							<div className="absolute top-4 left-4">
								<span className="px-3 py-1 bg-[#48A9A6]/80 text-white text-xs font-mono rounded-sm">
									HEADLESS WORDPRESS
								</span>
							</div>
						</div>
						
						<div className="p-6">
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#48A9A6] transition-colors duration-300">
								National Historical Archive
							</h3>
							
							<p className="text-[#254E70]/80 mb-6 line-clamp-3">
								Revolutionizing access to millions of historical documents through 
								a lightning-fast website that dramatically improved researcher experience.
							</p>
							
							<div className="flex items-center justify-between">
								<div className="text-[#48A9A6] font-mono text-lg">
									3.5×
								</div>
								<div className="text-[#254E70]/70 text-sm">
									Faster research time
								</div>
							</div>
							

							{/*
							<div className="mt-6 pt-4 border-t border-[#254E70]/10 flex justify-between items-center">
								<Link 
									href="/case-studies/national-archive" 
									className="text-[#48A9A6] font-medium inline-flex items-center hover:underline"
								>
									Read case study
									<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
								
								<div className="text-[#254E70]/60 text-sm">
									Q4 2023
								</div>
							</div>
							*/}


						</div>
					</div>
					
					{/* Case Study 2 */}
					<div className="bg-white rounded-sm shadow-md border border-[#254E70]/10 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
						<div className="aspect-video relative overflow-hidden bg-[#254E70]/5">
							{/* This would be a real image in production */}
							<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#254E70]/5 to-[#946B4A]/5 group-hover:scale-105 transition-transform duration-500">
								<div className="w-16 h-16 rounded-sm bg-white flex items-center justify-center shadow-md">
									<svg className="w-8 h-8 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
									</svg>
								</div>
							</div>
							
							<div className="absolute top-4 left-4">
								<span className="px-3 py-1 bg-[#946B4A]/80 text-white text-xs font-mono rounded-sm">
									RAG IMPLEMENTATION
								</span>
							</div>
						</div>
						
						<div className="p-6">
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#946B4A] transition-colors duration-300">
								Pacific Maritime Museum
							</h3>
							
							<p className="text-[#254E70]/80 mb-6 line-clamp-3">
								Creating an intelligent digital guide that helps visitors explore 
								nautical history through natural conversation.
							</p>
							
							<div className="flex items-center justify-between">
								<div className="text-[#946B4A] font-mono text-lg">
									156%
								</div>
								<div className="text-[#254E70]/70 text-sm">
									Increase in engagement
								</div>
							</div>
							

							{/*
							<div className="mt-6 pt-4 border-t border-[#254E70]/10 flex justify-between items-center">
								<Link 
									href="/case-studies/maritime-museum" 
									className="text-[#946B4A] font-medium inline-flex items-center hover:underline"
								>
									Read case study
									<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
								
								<div className="text-[#254E70]/60 text-sm">
									Q3 2023
								</div>
							</div>
							*/}


						</div>
					</div>
					
					{/* Case Study 3 */}
					<div className="bg-white rounded-sm shadow-md border border-[#254E70]/10 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
						<div className="aspect-video relative overflow-hidden bg-[#254E70]/5">
							{/* This would be a real image in production */}
							<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#254E70]/5 to-[#D97C4E]/5 group-hover:scale-105 transition-transform duration-500">
								<div className="w-16 h-16 rounded-sm bg-white flex items-center justify-center shadow-md">
									<svg className="w-8 h-8 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
									</svg>
								</div>
							</div>
							
							<div className="absolute top-4 left-4">
								<span className="px-3 py-1 bg-[#D97C4E]/80 text-white text-xs font-mono rounded-sm">
									INTEGRATED SOLUTION
								</span>
							</div>
						</div>
						
						<div className="p-6">
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#D97C4E] transition-colors duration-300">
								Museum of Tomorrow
							</h3>
							
							<p className="text-[#254E70]/80 mb-6 line-clamp-3">
								Combining headless WordPress with RAG technology to create an 
								inclusive, accessible experience for visitors of all abilities.
							</p>
							
							<div className="flex items-center justify-between">
								<div className="text-[#D97C4E] font-mono text-lg">
									64%
								</div>
								<div className="text-[#254E70]/70 text-sm">
									More accessible experiences
								</div>
							</div>
							

							{/*
							<div className="mt-6 pt-4 border-t border-[#254E70]/10 flex justify-between items-center">
								<Link 
									href="/case-studies/museum-of-tomorrow" 
									className="text-[#D97C4E] font-medium inline-flex items-center hover:underline"
								>
									Read case study
									<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
								
								<div className="text-[#254E70]/60 text-sm">
									Q2 2023
								</div>
							</div>
							*/}

							
						</div>
					</div>
				</div>
				



				{/* Client Logos 
				<div className="mt-24">
					<div className="text-center mb-12">
						<h3 className="font-serif text-2xl text-[#254E70] mb-4">
							Trusted by Leading Institutions
						</h3>
						<p className="text-[#254E70]/60 max-w-2xl mx-auto">
							We're proud to partner with museums, galleries, archives, and cultural 
							centers of all sizes around the world.
						</p>
					</div>
					
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
						
						<div className="flex items-center justify-center py-4">
							<div className="w-24 h-24 rounded-sm bg-[#254E70]/5 flex items-center justify-center">
								<div className="font-serif text-[#254E70]/40 text-lg">
									Client Logo
								</div>
							</div>
						</div>
						
						<div className="flex items-center justify-center py-4">
							<div className="w-24 h-24 rounded-sm bg-[#254E70]/5 flex items-center justify-center">
								<div className="font-serif text-[#254E70]/40 text-lg">
									Client Logo
								</div>
							</div>
						</div>
						
						<div className="flex items-center justify-center py-4">
							<div className="w-24 h-24 rounded-sm bg-[#254E70]/5 flex items-center justify-center">
								<div className="font-serif text-[#254E70]/40 text-lg">
									Client Logo
								</div>
							</div>
						</div>
						
						<div className="flex items-center justify-center py-4">
							<div className="w-24 h-24 rounded-sm bg-[#254E70]/5 flex items-center justify-center">
								<div className="font-serif text-[#254E70]/40 text-lg">
									Client Logo
								</div>
							</div>
						</div>
						
						<div className="flex items-center justify-center py-4">
							<div className="w-24 h-24 rounded-sm bg-[#254E70]/5 flex items-center justify-center">
								<div className="font-serif text-[#254E70]/40 text-lg">
									Client Logo
								</div>
							</div>
						</div>
						
						<div className="flex items-center justify-center py-4">
							<div className="w-24 h-24 rounded-sm bg-[#254E70]/5 flex items-center justify-center">
								<div className="font-serif text-[#254E70]/40 text-lg">
									Client Logo
								</div>
							</div>
						</div>
					</div>
				</div>
				*/}
				



				{/* CTA 
				<div className="mt-24 text-center">
					<Link 
						href="/case-studies" 
						className="px-8 py-3 bg-[#254E70] text-white rounded-sm hover:bg-[#254E70]/90 transition-colors font-medium inline-flex items-center mx-auto"
					>
						View All Case Studies
						<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</Link>
				</div>
				*/}





			</div>
		</section>
	);
}