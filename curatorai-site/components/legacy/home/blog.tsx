import Link from 'next/link';





export default function Blog() {
	return (
		<section className="py-20 bg-white relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-[0.02]" 
					 style={{
						 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
						 backgroundSize: '20px 20px'
					 }}>
			</div>
			
			{/* Decorative elements */}
			<div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-bl from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
			<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-[#48A9A6]/10 to-transparent rounded-full blur-3xl"></div>
			
			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
					<div>
						<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">KNOWLEDGE RESOURCES</h4>
						<h2 className="font-serif text-4xl text-[#254E70] mb-2">Latest Insights</h2>
						<p className="text-[#254E70]/70 max-w-2xl">
							Explore our latest articles, guides, and case studies on digital transformation 
							for museums and cultural institutions.
						</p>
					</div>
					
					<div className="mt-6 md:mt-0">
						<Link 
							href="/resources" 
							className="inline-flex items-center font-medium text-[#D97C4E] hover:text-[#D97C4E]/80 transition-colors"
						>
							View all resources
							<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</Link>
					</div>
				</div>
				
				{/* Resource filtering tabs */}
				<div className="flex flex-wrap gap-4 mb-10">
					<button className="px-4 py-2 rounded-sm bg-[#254E70] text-white text-sm">
						All
					</button>
					<button className="px-4 py-2 rounded-sm bg-[#F2EEE4] text-[#254E70] hover:bg-[#F2EEE4]/70 transition-colors text-sm">
						Case Studies
					</button>
					<button className="px-4 py-2 rounded-sm bg-[#F2EEE4] text-[#254E70] hover:bg-[#F2EEE4]/70 transition-colors text-sm">
						Guides
					</button>
					<button className="px-4 py-2 rounded-sm bg-[#F2EEE4] text-[#254E70] hover:bg-[#F2EEE4]/70 transition-colors text-sm">
						Articles
					</button>
					<button className="px-4 py-2 rounded-sm bg-[#F2EEE4] text-[#254E70] hover:bg-[#F2EEE4]/70 transition-colors text-sm">
						Webinars
					</button>
				</div>
				
				{/* Resources grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Featured Resource */}
					<div className="lg:col-span-2 bg-[#F2EEE4] rounded-sm overflow-hidden shadow-sm border border-[#254E70]/10 flex flex-col md:flex-row relative group hover:shadow-md transition-shadow">
						<div className="w-full md:w-3/5 aspect-video md:aspect-auto relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-[#254E70]/20 to-[#254E70]/50"></div>
							<div className="absolute inset-0 bg-[#254E70] flex items-center justify-center p-6">
								<div className="w-full h-full border-2 border-dashed border-white/30 rounded-sm flex items-center justify-center">
									<svg className="w-16 h-16 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
									</svg>
								</div>
							</div>
						</div>
						
						<div className="p-6 md:w-2/5 flex flex-col">
							<div className="mb-2">
								<span className="inline-block px-3 py-1 rounded-sm bg-[#D97C4E]/10 text-[#D97C4E] text-xs font-mono">
									WHITEPAPER
								</span>
								<span className="text-[#254E70]/60 text-xs ml-2">April 20, 2025</span>
							</div>
							
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#D97C4E] transition-colors">
								The Future of Cultural Heritage Access: RAG Technology for Museums
							</h3>
							
							<p className="text-[#254E70]/70 text-sm flex-grow mb-4">
								This comprehensive guide explores how Retrieval Augmented Generation is transforming
								the way visitors and researchers interact with museum collections, with practical
								implementation strategies and case examples.
							</p>
							
							<div className="mt-auto flex items-center">
								<div className="w-8 h-8 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3">
									<span className="text-[#D97C4E] font-serif text-sm">JL</span>
								</div>
								<div>
									<div className="text-[#254E70] text-sm font-medium">Dr. Julia Liang</div>
									<div className="text-[#254E70]/60 text-xs">AI Architect</div>
								</div>
							</div>
						</div>
						
						<Link href="/resources/future-cultural-heritage-rag" className="absolute inset-0">
							<span className="sr-only">The Future of Cultural Heritage Access: RAG Technology for Museums</span>
						</Link>
					</div>
					
					{/* Recent Resource 1 */}
					<div className="bg-[#F2EEE4] rounded-sm overflow-hidden shadow-sm border border-[#254E70]/10 flex flex-col relative group hover:shadow-md transition-shadow">
						<div className="aspect-video relative overflow-hidden">
							<div className="absolute inset-0 bg-[#48A9A6] flex items-center justify-center">
								<div className="w-full h-full border-2 border-dashed border-white/30 rounded-sm flex items-center justify-center">
									<svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v10a2 2 0 002 2h5zm-9-3h2m-4-3h6m-6-3h4" />
									</svg>
								</div>
							</div>
						</div>
						
						<div className="p-6 flex flex-col flex-grow">
							<div className="mb-2">
								<span className="inline-block px-3 py-1 rounded-sm bg-[#48A9A6]/10 text-[#48A9A6] text-xs font-mono">
									CASE STUDY
								</span>
								<span className="text-[#254E70]/60 text-xs ml-2">April 15, 2025</span>
							</div>
							
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#48A9A6] transition-colors">
								Metropolitan Museum: 79% Increase in Digital Engagement
							</h3>
							
							<p className="text-[#254E70]/70 text-sm flex-grow mb-4">
								Learn how one of the world's leading art museums transformed their digital experience
								with RAG implementation and saw dramatic increases in visitor engagement.
							</p>
						</div>
						
						<Link href="/resources/case-study-metropolitan" className="absolute inset-0">
							<span className="sr-only">Metropolitan Museum: 79% Increase in Digital Engagement</span>
						</Link>
					</div>
					
					{/* Recent Resource 2 */}
					<div className="bg-[#F2EEE4] rounded-sm overflow-hidden shadow-sm border border-[#254E70]/10 flex flex-col relative group hover:shadow-md transition-shadow">
						<div className="aspect-video relative overflow-hidden">
							<div className="absolute inset-0 bg-[#946B4A] flex items-center justify-center">
								<div className="w-full h-full border-2 border-dashed border-white/30 rounded-sm flex items-center justify-center">
									<svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
									</svg>
								</div>
							</div>
						</div>
						
						<div className="p-6 flex flex-col flex-grow">
							<div className="mb-2">
								<span className="inline-block px-3 py-1 rounded-sm bg-[#946B4A]/10 text-[#946B4A] text-xs font-mono">
									WEBINAR
								</span>
								<span className="text-[#254E70]/60 text-xs ml-2">April 10, 2025</span>
							</div>
							
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#946B4A] transition-colors">
								Headless WordPress for Museums: A Technical Deep Dive
							</h3>
							
							<p className="text-[#254E70]/70 text-sm flex-grow mb-4">
								Join our CTO Marcus Rivera for a technical exploration of implementing headless WordPress
								in museum environments, with real-world examples and implementation tips.
							</p>
						</div>
						
						<Link href="/resources/webinar-headless-wordpress-museums" className="absolute inset-0">
							<span className="sr-only">Headless WordPress for Museums: A Technical Deep Dive</span>
						</Link>
					</div>
					
					{/* Recent Resource 3 */}
					<div className="bg-[#F2EEE4] rounded-sm overflow-hidden shadow-sm border border-[#254E70]/10 flex flex-col relative group hover:shadow-md transition-shadow">
						<div className="aspect-video relative overflow-hidden">
							<div className="absolute inset-0 bg-[#254E70] flex items-center justify-center">
								<div className="w-full h-full border-2 border-dashed border-white/30 rounded-sm flex items-center justify-center">
									<svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
									</svg>
								</div>
							</div>
						</div>
						
						<div className="p-6 flex flex-col flex-grow">
							<div className="mb-2">
								<span className="inline-block px-3 py-1 rounded-sm bg-[#254E70]/10 text-[#254E70] text-xs font-mono">
									ARTICLE
								</span>
								<span className="text-[#254E70]/60 text-xs ml-2">April 5, 2025</span>
							</div>
							
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#D97C4E] transition-colors">
								5 Design Principles for Inclusive Digital Museum Experiences
							</h3>
							
							<p className="text-[#254E70]/70 text-sm flex-grow mb-4">
								Dr. Elena Johansson shares key design considerations for creating digital experiences
								that are accessible, engaging, and meaningful to diverse museum audiences.
							</p>
						</div>
						
						<Link href="/resources/inclusive-digital-museum-design" className="absolute inset-0">
							<span className="sr-only">5 Design Principles for Inclusive Digital Museum Experiences</span>
						</Link>
					</div>
					
					{/* Recent Resource 4 */}
					<div className="bg-[#F2EEE4] rounded-sm overflow-hidden shadow-sm border border-[#254E70]/10 flex flex-col relative group hover:shadow-md transition-shadow">
						<div className="aspect-video relative overflow-hidden">
							<div className="absolute inset-0 bg-[#D97C4E] flex items-center justify-center">
								<div className="w-full h-full border-2 border-dashed border-white/30 rounded-sm flex items-center justify-center">
									<svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
								</div>
							</div>
						</div>
						
						<div className="p-6 flex flex-col flex-grow">
							<div className="mb-2">
								<span className="inline-block px-3 py-1 rounded-sm bg-[#D97C4E]/10 text-[#D97C4E] text-xs font-mono">
									GUIDE
								</span>
								<span className="text-[#254E70]/60 text-xs ml-2">March 28, 2025</span>
							</div>
							
							<h3 className="font-serif text-xl text-[#254E70] mb-2 group-hover:text-[#D97C4E] transition-colors">
								Preparing Your Collections for AI: A Step-by-Step Guide
							</h3>
							
							<p className="text-[#254E70]/70 text-sm flex-grow mb-4">
								A practical guide for museum professionals on preparing collection data, metadata, and
								digital assets for implementation with AI and RAG technologies.
							</p>
						</div>
						
						<Link href="/resources/preparing-collections-for-ai" className="absolute inset-0">
							<span className="sr-only">Preparing Your Collections for AI: A Step-by-Step Guide</span>
						</Link>
					</div>
				</div>
				
				{/* Newsletter Signup */}
				<div className="mt-16 p-8 bg-[#254E70] rounded-sm text-white relative overflow-hidden">
					<div className="absolute inset-0 opacity-[0.05]" 
							 style={{
								 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23FFFFFF\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
								 backgroundSize: '20px 20px'
							 }}>
					</div>
					
					<div className="absolute top-0 right-0 w-32 h-32 bg-[#D97C4E]/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
					<div className="absolute bottom-0 left-0 w-32 h-32 bg-[#48A9A6]/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
					
					<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
						<div className="lg:col-span-2">
							<h3 className="font-serif text-2xl mb-2">Stay Updated</h3>
							<p className="text-white/80">
								Subscribe to our newsletter for the latest insights, guides, and case studies 
								on digital transformation for museums and cultural institutions.
							</p>
						</div>
						
						<div>
							<form className="flex space-x-2">
								<input
									type="email"
									placeholder="Your email address"
									className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D97C4E] focus:border-transparent text-white placeholder-white/50"
								/>
								<button
									type="submit"
									className="px-4 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors flex-shrink-0"
								>
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}