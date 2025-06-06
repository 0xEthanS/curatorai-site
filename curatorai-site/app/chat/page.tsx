import Link from 'next/link';




export default function Page() {
	return(
		<div>
			<ChatHeroSection />
			<RAGCaseStudiesSection />
			<RAGAboutSection />
		</div>
	);
}




function ChatHeroSection() {
	return (
		<section className="relative bg-[#254E70] text-white overflow-hidden">




			{/* Decorative gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#254E70] via-[#254E70] to-[#1A3550] opacity-100"></div>
			

			{/* Decorative grid pattern */}
			<div className="absolute inset-0 opacity-[0.05]" 
					 style={{
						 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23FFFFFF\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
						 backgroundSize: '20px 20px'
					 }}>
			</div>
			

			{/* Sunset circle graphic */}
			<div className="absolute right-0 top-0 w-full h-full">
				<div className="absolute right-0 top-0 bottom-0 w-3/5 overflow-hidden">
					<div className="absolute right-0 top-0 w-full h-full">
						<div className="absolute right-0 -top-20 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-[#D97C4E] to-[#946B4A] opacity-30"></div>
						<div className="absolute right-0 -top-40 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-[#D97C4E] to-[#946B4A] opacity-20"></div>
						<div className="absolute right-0 -top-60 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#F2EEE4] to-[#D97C4E] opacity-20"></div>
					</div>
				</div>
			</div>


			{/* Bookshelf silhouette */}
			<div className="absolute top-0 right-0 bottom-0 w-2/5 overflow-hidden">
				<div className="absolute top-0 right-0 bottom-0 w-full bg-[#1A3550]/70">
					<div className="absolute inset-0 flex flex-col justify-between py-8">
						{/* Top shelf */}
						<div className="h-1/4 w-full relative">
							<div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D97C4E]/20"></div>
							<div className="absolute inset-x-0 bottom-[2px] h-8 flex space-x-1 px-4 overflow-hidden">
								{
									Array(15).fill(null).map((_, i) => (
										<div key={`top-${i}`} className="w-6 h-full bg-[#946B4A]/20 rounded-sm"></div>
									))
								}
							</div>
						</div>
						
						{/* Middle shelves */}
						{
							Array(2).fill(null).map((_, index) => (
								<div key={`mid-${index}`} className="h-1/4 w-full relative">
									<div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D97C4E]/20"></div>
									<div className="absolute inset-x-0 bottom-[2px] h-8 flex space-x-1 px-4 overflow-hidden">
										{
											Array(15).fill(null).map((_, i) => (
												<div 
													key={`mid-${index}-${i}`} 
													className="w-6 h-full bg-[#946B4A]/20 rounded-sm"
												></div>
											))
										}
									</div>
								</div>
							))
						}
						
						{/* Bottom shelf */}
						<div className="h-1/4 w-full relative">
							<div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D97C4E]/20"></div>
							<div className="absolute inset-x-0 bottom-[2px] h-8 flex space-x-1 px-4 overflow-hidden">
								{
									Array(15).fill(null).map((_, i) => (
										<div 
											key={`bottom-${i}`} 
											className="w-6 h-full bg-[#946B4A]/20 rounded-sm"
										></div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>


			{/* Mountains silhouette */}
			<div className="absolute bottom-0 left-0 right-0 h-64">
				<svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
					<path 
						fill="#192C43" 
						fillOpacity="0.8" 
						d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,218.7C840,224,960,192,1080,186.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
					</path>
				</svg>
			</div>
			

			{/* Small figures silhouette */}
			<div className="absolute bottom-12 left-0 right-0 h-16">
				<div className="container mx-auto px-6 relative">
					<div className="absolute left-1/4 bottom-0 h-6 w-4 bg-[#192C43] rounded-t-full"></div>
					<div className="absolute left-1/4 translate-x-10 bottom-0 h-8 w-5 bg-[#192C43] rounded-t-full"></div>
					<div className="absolute left-1/4 translate-x-20 bottom-0 h-7 w-4 bg-[#192C43] rounded-t-full"></div>
					<div className="absolute left-1/4 translate-x-28 bottom-0 h-9 w-5 bg-[#192C43] rounded-t-full"></div>
					<div className="absolute left-1/4 translate-x-40 bottom-0 h-7 w-4 bg-[#192C43] rounded-t-full"></div>
					<div className="absolute left-2/3 bottom-0 h-8 w-5 bg-[#192C43] rounded-t-full"></div>
				</div>
			</div>
			



			{/* Main content */}
			<div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
					{/* Text content */}
					<div className="lg:col-span-2 space-y-8">
						<div>
							<h4 className="font-mono text-[#FE5F55] text-sm tracking-wider mb-3 uppercase">
								Your entire collection, instantly accessible
							</h4>
							<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-white">
								<span className="font-semibold">
									curator
								</span>
								<span className="font-light">
									Chat
								</span>
							</h1>
							<p className="mt-3 text-lg md:text-xl font-light text-[#F2EEE4]">
								Unlock hidden treasures in your archives through simple conversation
							</p>
						</div>
						
						<p className="text-lg max-w-lg leading-relaxed text-[#F2EEE4]/90">
							Your institution holds thousands of documents, photographs, and artifacts—most 
							visitors only experience a fraction. curatorChat acts as a digital guide, 
							connecting visitors directly to your complete collection through natural 
							conversation, while freeing your staff for specialized interactions.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Link 
								href="/contact" 
								className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center"
							>
								Request Demo
								<svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</Link>


							{/*
							<Link 
								href="/chat/learn-more" 
								className="px-8 py-3 border border-[#F2EEE4]/30 text-white rounded-sm hover:bg-white/5 transition-colors font-medium"
							>
								Learn More
							</Link>
							*/}


						</div>
					</div>
					
					{/* Chat interface preview */}
					<div className="lg:col-span-3 relative">
						<div className="bg-[#F2EEE4] rounded-sm shadow-lg overflow-hidden">
							{/* Chat header */}
							<div className="bg-[#254E70] px-6 py-3 flex items-center justify-between">
								<div className="flex items-center">
									<div className="w-8 h-8 rounded-sm bg-[#D97C4E] flex items-center justify-center overflow-hidden mr-3">
										<span className="text-white font-serif text-lg">
											c
										</span>
									</div>
									<h3 className="text-white font-medium">
										Collection Assistant
									</h3>
								</div>
								<div className="flex space-x-2">
									<div className="w-2 h-2 rounded-full bg-[#F2EEE4]/30"></div>
									<div className="w-2 h-2 rounded-full bg-[#F2EEE4]/30"></div>
									<div className="w-2 h-2 rounded-full bg-[#F2EEE4]/30"></div>
								</div>
							</div>
							
							{/* Chat messages */}
							<div className="px-6 py-4 h-80 overflow-y-auto bg-[#F2EEE4] text-[#254E70]">
								{/* User message */}
								<div className="flex justify-end mb-4">
									<div className="bg-[#254E70]/10 rounded-sm px-4 py-2 max-w-xs">
										<p className="text-[#254E70]">
											I'm researching the impact of the 1906 earthquake on local 
											architecture. What materials do you have?
										</p>
									</div>
								</div>
								
								{/* Assistant response */}
								<div className="flex mb-4">
									<div className="w-8 h-8 rounded-sm bg-[#D97C4E] flex-shrink-0 flex items-center justify-center overflow-hidden mr-2">
										<span className="text-white font-serif text-lg">c</span>
									</div>
									<div className="bg-white rounded-sm px-4 py-3 max-w-md shadow-sm">
										<p className="text-[#254E70] mb-2">
											We have several resources on the 1906 earthquake's architectural impact:
										</p>
										<ul className="space-y-2 text-[#254E70]/80 text-sm">
											<li className="flex items-start">
												<svg className="h-5 w-5 mr-1 text-[#48A9A6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
												</svg>
												<span>
													The Henderson Collection (32 photographs of damaged structures)
												</span>
											</li>
											<li className="flex items-start">
												<svg className="h-5 w-5 mr-1 text-[#48A9A6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
												</svg>
												<span>
													"Rebuilding a City" (1908 report on architectural reforms)
												</span>
											</li>
											<li className="flex items-start">
												<svg className="h-5 w-5 mr-1 text-[#48A9A6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
												</svg>
												<span>
													The Burnham Plan archives (pre-earthquake city planning)
												</span>
											</li>
										</ul>
										<p className="text-[#254E70] mt-3">
											Would you like me to provide more details on any of these?
										</p>
									</div>
								</div>
								
								{/* Loading indicator */}
								<div className="flex mb-4 opacity-0">
									<div className="w-8 h-8 rounded-sm bg-[#D97C4E] flex-shrink-0 flex items-center justify-center overflow-hidden mr-2">
										<span className="text-white font-serif text-lg">
											c
										</span>
									</div>
									<div className="bg-white rounded-sm px-4 py-3 flex items-center">
										<div className="flex space-x-1">
											<div className="w-2 h-2 rounded-full bg-[#D97C4E] animate-bounce"></div>
											<div className="w-2 h-2 rounded-full bg-[#D97C4E] animate-bounce delay-100"></div>
											<div className="w-2 h-2 rounded-full bg-[#D97C4E] animate-bounce delay-200"></div>
										</div>
									</div>
								</div>
							</div>
							
							{/* Chat input */}
							<div className="border-t border-[#254E70]/10 px-4 py-3 bg-white">
								<div className="flex items-center bg-[#F2EEE4] rounded-sm px-3 py-2">
									<input 
										type="text" 
										placeholder="Ask about your collections..." 
										className="flex-grow bg-transparent border-0 focus:outline-none text-[#254E70] placeholder-[#254E70]/50"
										disabled
									/>
									<button className="ml-2 text-[#48A9A6] hover:text-[#48A9A6]/80 transition-colors" disabled>
										<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
										</svg>
									</button>
								</div>
							</div>
						</div>
						
						{/* Floating decorative elements */}
						<div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#48A9A6]/30 to-[#48A9A6]/10 blur-md"></div>
						<div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-[#D97C4E]/30 to-[#D97C4E]/10 blur-md"></div>
					</div>
				</div>
			</div>
			



			{/* Key features */}
			<div className="container mx-auto px-6 pb-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">



					
					<div className="bg-white/10 backdrop-blur-sm rounded-sm p-6">
						<div className="w-10 h-10 rounded-sm bg-[#48A9A6] bg-opacity-20 flex items-center justify-center mb-4">
							<svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-white mb-2">
							Natural Conversations
						</h3>
						<p className="text-[#F2EEE4]/80">
							Like Having Your Expert Guide Available 24/7 Visitors ask questions naturally 
							and receive knowledgeable responses drawing from your entire collection—no 
							complicated search terms needed.
						</p>
					</div>
					



					<div className="bg-white/10 backdrop-blur-sm rounded-sm p-6">
						<div className="w-10 h-10 rounded-sm bg-[#D97C4E] bg-opacity-20 flex items-center justify-center mb-4">
							<svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-white mb-2">
							Source Attribution - Option
						</h3>
						<p className="text-[#F2EEE4]/80">
							Academic Credibility Built In Every answer cites your original materials, 
							enabling visitors to explore deeper while maintaining the scholarly standards 
							your institution values.
						</p>
					</div>
					


					
					<div className="bg-white/10 backdrop-blur-sm rounded-sm p-6">
						<div className="w-10 h-10 rounded-sm bg-[#F2EEE4] bg-opacity-20 flex items-center justify-center mb-4">
							<svg className="w-5 h-5 text-[#F2EEE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h3 className="font-serif text-xl text-white mb-2">
							Visitor Engagement
						</h3>
						<p className="text-[#F2EEE4]/80">
							Bring Overlooked Collections to Light Visitors discover relevant materials they 
							would have missed through traditional browsing, increasing engagement with 
							underutilized archives by up to 70%.
						</p>
					</div>



					
				</div>
			</div>




		</section>
	);
}




function RAGCaseStudiesSection() {
	return (
		<section className="py-20 bg-[#F2EEE4] relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-[0.02]" 
				style={{
					backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
					backgroundSize: '20px 20px'
				}}>
			</div>

			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-b from-[#D97C4E]/10 to-transparent opacity-50"></div>
			<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-[#48A9A6]/20 to-transparent rounded-full blur-3xl"></div>
			



			<div className="container mx-auto px-6 relative z-10">



				
				{/* Section heading */}
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3 uppercase">
						PROVEN RESULTS
					</h4>
					<h2 className="font-serif text-4xl text-[#254E70] mb-6">
						Bringing Collections to Life
					</h2>
					<p className="text-[#254E70]/80 text-lg">
						See how museums and historical centers are connecting visitors with previously 
						hidden treasures and measuring real impact.
					</p>
				</div>
				



				{/* Case studies */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


					{/* Case Study 1: Metropolitan Art Museum */}
					<div className="bg-white rounded-sm overflow-hidden border border-[#254E70]/10 hover:border-[#D97C4E]/30 transition-all duration-300 shadow-sm group hover:shadow-md">
						<div className="p-6">
							<div className="flex items-center justify-between mb-6">
								<div className="font-serif text-2xl text-[#254E70]">
									Metropolitan Art Museum
								</div>
								<div className="w-12 h-12 rounded-sm bg-[#D97C4E]/20 flex items-center justify-center">
									<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
									</svg>
								</div>
							</div>

							<div className="mb-6">
								<div className="text-sm text-[#254E70]/60 mb-1">
									Challenge
								</div>
								<p className="text-[#254E70]/90">
									Making a collection of over 200,000 artworks accessible to visitors with varying 
									levels of art knowledge, while providing depth for scholars and researchers.
								</p>
							</div>

							<div className="mb-6">
								<div className="text-sm text-[#254E70]/60 mb-1">Solution</div>
								<p className="text-[#254E70]/90">
									Introduced a Digital Guide (RAG System) that instantly searches through their entire collection, 
									scholarly publications, and visitor guide content so visitors can now have natural conversations 
									about any artwork, just as they would with an expert guide.
								</p>
							</div>

							<div className="space-y-3 mb-8">
								<div className="text-sm text-[#254E70]/60 mb-1">
									Results
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>79% increase</span> in digital engagement with collection items
									</p>
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>93% visitor satisfaction</span> with AI-powered guide responses
									</p>
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>42% reduction</span> in basic inquiries to staff, freeing them for specialized assistance
									</p>
								</div>
							</div>
							

							{/*
							<div className="pt-4 border-t border-[#254E70]/10">
								<Link 
									href="/case-studies/metropolitan-museum" 
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
					

					{/* Case Study 2: National Historical Archive */}
					<div className="bg-white rounded-sm overflow-hidden border border-[#254E70]/10 hover:border-[#48A9A6]/30 transition-all duration-300 shadow-sm group hover:shadow-md">
						<div className="p-6">
							<div className="flex items-center justify-between mb-6">
								<div className="font-serif text-2xl text-[#254E70]">
									National Historical Archive
								</div>
								<div className="w-12 h-12 rounded-sm bg-[#48A9A6]/20 flex items-center justify-center">
									<svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
									</svg>
								</div>
							</div>

							<div className="mb-6">
								<div className="text-sm text-[#254E70]/60 mb-1">
									Challenge
								</div>
								<p className="text-[#254E70]/90">
									Unlocking insights from millions of historical documents spanning centuries, in multiple 
									languages and formats, many with handwritten entries and specialized terminology.
								</p>
							</div>

							<div className="mb-6">
								<div className="text-sm text-[#254E70]/60 mb-1">Solution</div>
								<p className="text-[#254E70]/90">
									Created an intelligent archive navigator (RAG System) that can read and understand historical 
									documents in any language or format, including handwritten records and specialized historical 
									terminology. Now both researchers and the public can search the archives through simple 
									conversation.
								</p>
							</div>

							<div className="space-y-3 mb-8">
								<div className="text-sm text-[#254E70]/60 mb-1">
									Results
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>3.5x faster research</span> for academic and genealogical projects
									</p>
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>95% accuracy</span> in retrieving contextually relevant historical documents
									</p>
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#48A9A6]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>156% increase</span> in public engagement with historical archives
									</p>
								</div>
							</div>
							

							{/*
							<div className="pt-4 border-t border-[#254E70]/10">
								<Link 
									href="/case-studies/national-historical-archive" 
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

					
					{/* Case Study 3: Museum of Tomorrow */}
					<div className="bg-white rounded-sm overflow-hidden border border-[#254E70]/10 hover:border-[#946B4A]/30 transition-all duration-300 shadow-sm group hover:shadow-md">
						<div className="p-6">
							<div className="flex items-center justify-between mb-6">
								<div className="font-serif text-2xl text-[#254E70]">
									Museum of Tomorrow
								</div>
								<div className="w-12 h-12 rounded-sm bg-[#946B4A]/20 flex items-center justify-center">
									<svg className="w-6 h-6 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
									</svg>
								</div>
							</div>

							<div className="mb-6">
								<div className="text-sm text-[#254E70]/60 mb-1">Challenge</div>
								<p className="text-[#254E70]/90">
									Creating an accessible, inclusive experience for all visitors by providing personalized 
									information on complex scientific and technological exhibits with advanced accessibility 
									features.
								</p>
							</div>

							<div className="mb-6">
								<div className="text-sm text-[#254E70]/60 mb-1">
									Solution
								</div>
								<p className="text-[#254E70]/90">
									Upgraded their visitor guide chatbot to become a smart personal museum assistant. Now it 
									instantly accesses all exhibit information and scientific resources, while adapting 
									answers for visitors with different abilities and learning styles.
								</p>
							</div>

							<div className="space-y-3 mb-8">
								<div className="text-sm text-[#254E70]/60 mb-1">
									Results
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#946B4A]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>98% accuracy</span> in scientific information retrieval
									</p>
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#946B4A]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>64% increase</span> in exhibit engagement from visitors with disabilities
									</p>
								</div>
								<div className="flex items-start">
									<div className="w-6 h-6 rounded-sm bg-[#946B4A]/20 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
										<svg className="w-4 h-4 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-[#254E70]/80">
										<span className="text-[#254E70] font-medium"
										>87% of visitors</span> reported learning more through AI assistance
									</p>
								</div>
							</div>
							

							{/*
							<div className="pt-4 border-t border-[#254E70]/10">
								<Link 
									href="/case-studies/museum-of-tomorrow" 
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
				



				{/* RAG Technology Diagram */}
				<div className="mt-24 bg-white rounded-sm p-8 shadow-sm border border-[#254E70]/10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="font-serif text-2xl text-[#254E70] mb-6">
								From Archive to Answer: How Your Collection Becomes Conversational (Implementing a RAG System)
							</h3>
							<p className="text-[#254E70]/80 mb-6">
								curatorChat works like a knowledgeable curator who has memorized every item in your collection. 
								When visitors ask questions, it instantly finds the perfect resources and explains them in a 
								way that makes sense.
							</p>
							
							<div className="space-y-6">
								<div className="flex items-start">
									<div className="w-8 h-8 rounded-sm bg-[#D97C4E]/20 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
										<div className="font-mono text-[#D97C4E] text-sm">
											01
										</div>
									</div>
									<div>
										<h4 className="font-medium text-[#254E70] mb-1">
											Collection Understanding (Knowledge Processing)
										</h4>
										<p className="text-[#254E70]/70 text-sm">
											We help organize and understand your entire collection—from exhibit labels to archival 
											documents—creating a comprehensive digital memory of your institution.
										</p>
									</div>
								</div>
								
								<div className="flex items-start">
									<div className="w-8 h-8 rounded-sm bg-[#48A9A6]/20 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
										<div className="font-mono text-[#48A9A6] text-sm">
											02
										</div>
									</div>
									<div>
										<h4 className="font-medium text-[#254E70] mb-1">
											Conversation Intelligence (Semantic Understanding)
										</h4>
										<p className="text-[#254E70]/70 text-sm">
											Just like an experienced docent understands what visitors really want to know, our system 
											interprets questions naturally. When someone asks 'What art came before impressionism?' 
											it knows they want to understand artistic movements, not just keywords.
										</p>
									</div>
								</div>
								
								<div className="flex items-start">
									<div className="w-8 h-8 rounded-sm bg-[#946B4A]/20 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
										<div className="font-mono text-[#946B4A] text-sm">
											03
										</div>
									</div>
									<div>
										<h4 className="font-medium text-[#254E70] mb-1">
											Smart Resource Finding (Contextual Retrieval)
										</h4>
										<p className="text-[#254E70]/70 text-sm">
											The system searches through your materials like a researcher who knows exactly where to 
											look. It connects related items across your collection to provide complete answers.
										</p>
									</div>
								</div>
								
								<div className="flex items-start">
									<div className="w-8 h-8 rounded-sm bg-[#254E70]/20 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
										<div className="font-mono text-[#254E70] text-sm">
											04
										</div>
									</div>
									<div>
										<h4 className="font-medium text-[#254E70] mb-1">
											Human-Like Response Generation (Natural Language Generation)
										</h4>
										<p className="text-[#254E70]/70 text-sm">
											We craft responses that sound like they're coming from your staff—knowledgeable, 
											friendly, and aligned with your institution's voice. Every answer maintains 
											academic integrity while being accessible.
										</p>
									</div>
								</div>
							</div>
						</div>
						
						{/* Visual Diagram */}
						<div className="relative h-[400px] flex items-center justify-center">
							<div className="absolute inset-0 flex items-center justify-center">
								{/* Background circular elements */}
								<div className="absolute w-80 h-80 rounded-full border border-[#254E70]/10 opacity-60"></div>
								<div className="absolute w-64 h-64 rounded-full border border-[#254E70]/10 opacity-60"></div>
								<div className="absolute w-48 h-48 rounded-full border border-[#254E70]/10 opacity-60"></div>
								
								{/* Central element */}
								<div className="absolute w-32 h-32 rounded-full bg-[#F2EEE4] flex items-center justify-center z-20 border border-[#254E70]/10 shadow-sm">
									<div className="text-[#254E70] font-serif text-xl">
										RAG
									</div>
								</div>
								
								{/* Connection lines */}
								<svg className="absolute w-full h-full" viewBox="0 0 400 400" fill="none">
									{/* Lines connecting to external nodes */}
									<path d="M200 120 L140 40" stroke="rgba(217, 124, 78, 0.5)" strokeWidth="1" />
									<path d="M200 120 L260 40" stroke="rgba(72, 169, 166, 0.5)" strokeWidth="1" />
									<path d="M200 280 L140 360" stroke="rgba(148, 107, 74, 0.5)" strokeWidth="1" />
									<path d="M200 280 L260 360" stroke="rgba(37, 78, 112, 0.5)" strokeWidth="1" />
									
									{/* Connecting central circle with outer circle */}
									<path d="M200 120 L200 184" stroke="rgba(37, 78, 112, 0.2)" strokeWidth="1" />
									<path d="M200 280 L200 216" stroke="rgba(37, 78, 112, 0.2)" strokeWidth="1" />
								</svg>
								
								{/* Node elements */}
								<div className="absolute top-10 left-1/4 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10 border border-[#D97C4E]/30 shadow-sm">
									<svg className="w-8 h-8 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
									</svg>
								</div>
								
								<div className="absolute top-10 right-1/4 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10 border border-[#48A9A6]/30 shadow-sm">
									<svg className="w-8 h-8 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</div>
								
								<div className="absolute bottom-10 left-1/4 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10 border border-[#946B4A]/30 shadow-sm">
									<svg className="w-8 h-8 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
									</svg>
								</div>
								
								<div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10 border border-[#254E70]/20 shadow-sm">
									<svg className="w-8 h-8 text-[#254E70]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				



				{/* Testimonial 
				<div className="mt-20 max-w-3xl mx-auto">
					<div className="relative">
						<div className="absolute -top-6 -left-6 text-[#D97C4E] font-serif text-8xl opacity-20">"</div>
						<div className="relative bg-white rounded-sm p-6 border border-[#D97C4E]/10 shadow-sm z-10">
							<blockquote className="text-[#254E70] text-lg italic mb-6">
								Our implementation of CuratorAI's RAG system has transformed how researchers and visitors interact with our collection. Questions that once required hours of specialized staff time are now answered instantly with precise citations to our archives. The system continues to improve as our collection grows.
							</blockquote>
							<div className="flex items-center">
								<div className="w-12 h-12 rounded-sm bg-[#D97C4E]/20 flex items-center justify-center text-[#D97C4E] font-medium text-sm">
									DR
								</div>
								<div className="ml-4">
									<div className="text-[#254E70] font-medium">
										Dr. Rachel Martinez
									</div>
									<div className="text-[#254E70]/60 text-sm">
										Director of Digital Experience, National Historical Archive
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				*/}
				



				{/* CTA Section */}
				<div className="mt-20 text-center">
					<h3 className="font-serif text-2xl text-[#254E70] mb-6">
						Ready to unlock your institution's knowledge?
					</h3>
					<p className="text-[#254E70]/70 max-w-2xl mx-auto mb-8">
						Join leading museums and cultural institutions in creating intelligent, accessible experiences 
						that connect visitors with your collections in meaningful new ways.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						
						
						<Link 
							href="https://calendar.app.google/DMrojMRUHasQUKuK8"
							target='_blank' 
							className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center justify-center"
						>
							Schedule a Consultation
							<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</Link>


						{/*
						<Link 
							href="/resources/rag-whitepaper" 
							className="px-8 py-3 border border-[#254E70] text-[#254E70] rounded-sm hover:bg-[#254E70]/5 transition-colors font-medium inline-flex items-center justify-center"
						>
							Download RAG Whitepaper
							<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
							</svg>
						</Link>
						*/} 

					</div>
				</div>




			</div>
			



			{/* Decorative wave transition */}
			<div className="relative w-full h-24 mt-16 overflow-hidden">
				<svg className="absolute w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
					<path 
						d="M0 50C233.957 50 233.957 0 467.914 0C701.871 0 701.871 50 935.829 50C1169.79 50 1169.79 0 1403.74 0C1637.7 0 1637.7 50 1871.66 50L1871.66 100L0 100L0 50Z" 
						fill="#254E70" 
						fillOpacity="0.2"
					/>
					<path 
						d="M0 50C233.957 50 233.957 25 467.914 25C701.871 25 701.871 75 935.829 75C1169.79 75 1169.79 25 1403.74 25C1637.7 25 1637.7 75 1871.66 75L1871.66 100L0 100L0 50Z" 
						fill="#3A6F95" 
						fillOpacity="0.25"
					/>
					<path 
						d="M0 75C233.957 75 233.957 50 467.914 50C701.871 50 701.871 100 935.829 100C1169.79 100 1169.79 50 1403.74 50C1637.7 50 1637.7 100 1871.66 100L1871.66 100L0 100L0 75Z" 
						fill="#1A3550" 
						fillOpacity="0.3"
					/>
				</svg>
			</div>




		</section>
	);
}




function RAGAboutSection() {
	return (
		<section className="bg-[#F2EEE4] py-20 relative overflow-hidden">
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



				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


					{/* RAG Explanation Visual */}
					<div className="relative order-2 lg:order-1">
						<div className="aspect-square relative">
							{/* Outer ring */}
							<div className="absolute inset-0 rounded-full border-2 border-dashed border-[#254E70]/20 animate-slow-spin"></div>
							
							{/* Middle ring with nodes */}
							<div className="absolute inset-8 rounded-full border border-[#254E70]/30 flex items-center justify-center">
								{/* Node 1 - Documents */}
								<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-sm bg-white shadow-md flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
									<div className="text-[#D97C4E]">
										<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</div>
								</div>
								
								{/* Node 2 - Database */}
								<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-sm bg-white shadow-md flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
									<div className="text-[#48A9A6]">
										<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
										</svg>
									</div>
								</div>
								
								{/* Node 3 - AI */}
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-sm bg-white shadow-md flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
									<div className="text-[#946B4A]">
										<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
								</div>
								
								{/* Node 4 - User */}
								<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-sm bg-white shadow-md flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
									<div className="text-[#254E70]">
										<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
									</div>
								</div>
							</div>
							
							{/* Central circle */}
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#254E70]/10">
								<div className="text-center">
									<div className="font-serif text-2xl text-[#254E70]">
										RAG
									</div>
									<div className="text-[#254E70]/60 text-xs font-mono mt-1">
										TECHNOLOGY
									</div>
								</div>
							</div>
							
							{/* Connection lines */}
							<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
								<path d="M200 76 L200 136" stroke="#D97C4E" strokeWidth="2" strokeDasharray="4 4" />
								<path d="M324 200 L264 200" stroke="#48A9A6" strokeWidth="2" strokeDasharray="4 4" />
								<path d="M200 324 L200 264" stroke="#946B4A" strokeWidth="2" strokeDasharray="4 4" />
								<path d="M76 200 L136 200" stroke="#254E70" strokeWidth="2" strokeDasharray="4 4" />
							</svg>
							
							{/* Background blobs */}
							<div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#D97C4E]/5 blur-xl"></div>
							<div className="absolute -z-10 top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#48A9A6]/5 blur-xl"></div>
						</div>
					</div>


					{/* Text content */}
					<div className="order-1 lg:order-2">
						<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">
							HOW IT WORKS (RAG System at a Glance)
						</h4>
						<h2 className="font-serif text-4xl md:text-5xl text-[#254E70] mb-6">
							Your Collection, Conversational
						</h2>
						
						<div className="space-y-6 text-[#254E70]/80">
							<p>
								curatorChat works like having your most knowledgeable curator available 24/7. 
								When visitors ask questions, the system searches through your entire collection 
								- from exhibit catalogs to archival documents - finding exactly what they need 
								and explaining it in a way they'll understand.
							</p>
							
							<p>
								Instead of rigid search terms, visitors can ask natural questions like "What 
								happened to local architecture after the 1906 earthquake?" The system understands 
								what they're really asking for and pulls relevant information from across 
								your collection to create helpful, detailed answers.
							</p>
							
							<div className="py-4 border-t border-b border-[#254E70]/10 my-8">
								<h3 className="font-serif text-xl text-[#254E70] mb-4">
									Four Ways Conversational Collections Change Everything
								</h3>
								
								<div className="space-y-4">
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Make Your Entire Collection Discoverable </span> 
											— Visitors can now explore your vast archives through simple conversation. A 10-year-old 
											asking about dinosaurs gets answers tailored for them, while a PhD researcher gets 
											scholarly depth from the same system.
										</p>
									</div>
									
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Give Your Staff Their Time Back </span> 
											— Free your experts from answering 'Where is the gift shop?' and 'When was this built?' so 
											they can focus on creating exhibitions, conducting research, and having meaningful 
											conversations with visitors.
										</p>
									</div>
									
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Knowledge Preservation</span> — Transform archives, catalogs, and institutional 
											expertise into living, accessible resources
										</p>
									</div>
									
									<div className="flex items-start">
										<div className="w-6 h-6 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
											<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
										</div>
										<p className="text-[#254E70]/80">
											<span className="text-[#254E70] font-medium"
											>Unlock Hidden Collections </span> 
											— Those dusty archives and forgotten documents now become instantly searchable treasures. 
											Your institutional memory becomes accessible to everyone, not just the staff who 
											remembers where things are stored.
										</p>
									</div>
								</div>
							</div>
							
							<h3 className="font-serif text-xl text-[#254E70] mb-4">
								Built Specifically for Museums
							</h3>
							<p>
								We understand museums aren't just storage spaces for artifacts—they're living centers of 
								culture and education. Our team combines deep museum experience with technology expertise 
								to create systems that preserve your institution's voice while making your collection
								 accessible to everyone who walks through your doors.
							</p>
							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
								<div className="bg-white rounded-sm p-5 shadow-sm border border-[#254E70]/10">
									<div className="flex items-center mb-3">
										<div className="w-10 h-10 rounded-sm bg-[#48A9A6]/10 flex items-center justify-center">
											<svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
											</svg>
										</div>
										<h4 className="font-serif text-lg text-[#254E70] ml-3">
											Speaks Your Language
										</h4>
									</div>
									<p className="text-[#254E70]/70 text-sm">
										Understands museum terminology, from 'provenance' to 'conservation.' Whether visitors ask about 
										Baroque architecture or Edo period ceramics, the system finds exactly what you have and explains 
										it appropriately.
									</p>
								</div>
								
								<div className="bg-white rounded-sm p-5 shadow-sm border border-[#254E70]/10">
									<div className="flex items-center mb-3">
										<div className="w-10 h-10 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center">
											<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
											</svg>
										</div>
										<h4 className="font-serif text-lg text-[#254E70] ml-3">
											Protects Your Standards
										</h4>
									</div>
									<p className="text-[#254E70]/70 text-sm">
										Every answer cites original sources and maintains academic integrity. Your institutional values 
										and scholarly standards remain intact while reaching a broader audience.
									</p>
								</div>
								
								<div className="bg-white rounded-sm p-5 shadow-sm border border-[#254E70]/10">
									<div className="flex items-center mb-3">
										<div className="w-10 h-10 rounded-sm bg-[#946B4A]/10 flex items-center justify-center">
											<svg className="w-6 h-6 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<h4 className="font-serif text-lg text-[#254E70] ml-3">
											Adapts to Every Visitor
										</h4>
									</div>
									<p className="text-[#254E70]/70 text-sm">
										Provides elementary school-level explanations for children, scholarly depth for researchers, and 
										everything in between. One conversation system, tailored for each visitor's needs.
									</p>
								</div>
								
								<div className="bg-white rounded-sm p-5 shadow-sm border border-[#254E70]/10">
									<div className="flex items-center mb-3">
										<div className="w-10 h-10 rounded-sm bg-[#254E70]/10 flex items-center justify-center">
											<svg className="w-6 h-6 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
											</svg>
										</div>
										<h4 className="font-serif text-lg text-[#254E70] ml-3">
											Learns What Works
										</h4>
									</div>
									<p className="text-[#254E70]/70 text-sm">
										Shows you which exhibits visitors ask about most, what information they need, and how to 
										improve engagement. It's like having a visitor survey running 24/7, helping you understand 
										your audience better.
									</p>
								</div>
							</div>
						</div>
					</div>


				</div>
				



				{/* Team section 
				<div className="mt-24 bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
					<div className="px-8 py-6 border-b border-[#254E70]/10">
						<h3 className="font-serif text-2xl text-[#254E70]">
							Meet Our RAG Technology Team
						</h3>
					</div>
					
					<div className="p-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="w-32 h-32 rounded-sm bg-[#D97C4E]/10 mx-auto flex items-center justify-center mb-4">
									<div className="text-[#D97C4E] font-serif text-4xl">
										JL
									</div>
								</div>
								<h4 className="font-medium text-[#254E70]">
									Dr. Julia Liang
								</h4>
								<p className="text-[#254E70]/60 text-sm">
									Chief AI Architect
								</p>
								<p className="text-[#254E70]/70 text-sm mt-2">
									Former curator and computational linguist specializing in cultural 
									knowledge systems.
								</p>
							</div>
							
							<div className="text-center">
								<div className="w-32 h-32 rounded-sm bg-[#48A9A6]/10 mx-auto flex items-center justify-center mb-4">
									<div className="text-[#48A9A6] font-serif text-4xl">
										MR
									</div>
								</div>
								<h4 className="font-medium text-[#254E70]">
									Marcus Rivera
								</h4>
								<p className="text-[#254E70]/60 text-sm">
									Data Integration Lead
								</p>
								<p className="text-[#254E70]/70 text-sm mt-2">
									Expert in knowledge base construction for museums and archives.
								</p>
							</div>
							
							<div className="text-center">
								<div className="w-32 h-32 rounded-sm bg-[#946B4A]/10 mx-auto flex items-center justify-center mb-4">
									<div className="text-[#946B4A] font-serif text-4xl">
										EJ
									</div>
								</div>
								<h4 className="font-medium text-[#254E70]">
									Dr. Elena Johansson
								</h4>
								<p className="text-[#254E70]/60 text-sm">
									Museum Experience Director
								</p>
								<p className="text-[#254E70]/70 text-sm mt-2">
									Designs visitor-centered AI experiences for cultural institutions.
								</p>
							</div>
							
							<div className="text-center">
								<div className="w-32 h-32 rounded-sm bg-[#254E70]/10 mx-auto flex items-center justify-center mb-4">
									<div className="text-[#254E70] font-serif text-4xl">
										KP
									</div>
								</div>
								<h4 className="font-medium text-[#254E70]">
									Kwame Patel
								</h4>
								<p className="text-[#254E70]/60 text-sm">
									Ethical AI Implementation
								</p>
								<p className="text-[#254E70]/70 text-sm mt-2">
									Ensures inclusive, ethical deployment of AI in cultural contexts.
								</p>
							</div>
						</div>
					</div>
				</div>
				*/}
				



				{/* CTA */}
				<div className="mt-16 bg-[#254E70] rounded-sm p-8 text-white relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-[#D97C4E]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#48A9A6]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
					
					<div className="relative z-10 max-w-3xl mx-auto text-center">
						<h3 className="font-serif text-2xl mb-4">
							Interested in giving visitors instant access to your full collection?
						</h3>
						<p className="text-white/80 mb-8">
							See how curatorChat helps museums answer 3x more visitor questions daily while reducing staff 
							workload by 40%. Your archives and expertise become accessible to everyone through simple 
							conversation.
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
							<Link 
								href="https://calendar.app.google/DMrojMRUHasQUKuK8"
								target='_blank' 
								className="px-8 py-3 border border-white/30 text-white rounded-sm hover:bg-white/5 transition-colors font-medium inline-flex items-center justify-center"
							>
								Book a Consultation
								<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</Link>
						</div>
					</div>
				</div>




			</div>
		</section>
	);
}



