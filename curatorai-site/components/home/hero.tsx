import Link from "next/link";




export default function Hero() {
		return (
			<section className="relative overflow-hidden bg-[#F2EEE4] text-[#254E70]">
				{/* Background gradient effect */}
				<div className="absolute inset-0 bg-gradient-to-br from-[#F2EEE4] via-[#F2EEE4] to-[#8B9D83]/20 opacity-70"></div>
				
				{/* Subtle grid pattern */}
				<div className="absolute inset-0 opacity-[0.03]" 
					style={{
						backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
						backgroundSize: '40px 40px'
					}}>
				</div>
				
				<div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						



						{/* Text content */}
						<div className="space-y-8">
							<div>
								<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3 uppercase">
									INTRODUCING
								</h4>
								<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-[#254E70]">
									<span className="font-semibold">
										curator
									</span>
									<span className="font-light">
										AI
									</span>
								</h1>
								<p className="mt-3 text-lg md:text-xl font-light text-[#946B4A]">
									Bringing Collections to Digital Life
								</p>
							</div>
							
							<p className="text-lg max-w-lg leading-relaxed">
								Transform how visitors experience your collections with elegant digital tools 
								designed specifically for cultural institutions.
							</p>
							
							<div className="flex flex-col sm:flex-row gap-4 pt-4">


								<Link 
									href="/contact" 
									className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center"
								>
									Request a Demo
									<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>


								<Link 
									href="https://calendar.app.google/DMrojMRUHasQUKuK8" 
									target="_blank"
									className="px-8 py-3 border border-[#254E70] text-[#254E70] rounded-sm hover:bg-[#254E70]/5 transition-colors font-medium"
								>
									Schedule a Consultation
								</Link>


							</div>
						</div>
						



						{/* Visual element - RAG Implementation Visualization */}
						<div className="relative">
						{/* Main visual - RAG Technology Visualization */}
						<div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white shadow-md border border-[#254E70]/10">
							{/* Background with subtle pattern */}
							<div className="absolute inset-0 bg-[#F2EEE4]/70"></div>
							
							{/* Main container */}
							<div className="absolute inset-0 flex items-center justify-center p-6">
							<div className="w-full h-full flex flex-col">
								{/* Title */}
								<div className="text-center mb-6">
								<div className="inline-block px-3 py-1 bg-[#254E70]/5 rounded-sm">
									<span className="font-serif text-lg text-[#254E70]">Retrieval Augmented Generation</span>
								</div>
								</div>
								
								{/* RAG Flow Visualization */}
								<div className="flex-grow flex">
								{/* Left side: Knowledge Repository */}
								<div className="w-1/3 pr-4 flex flex-col">
									<div className="text-center mb-2">
									<div className="inline-block px-3 py-1 bg-[#48A9A6]/10 rounded-sm">
										<span className="font-mono text-xs text-[#48A9A6]">RETRIEVAL</span>
									</div>
									</div>
									
									{/* Collection visualization */}
									<div className="flex-grow bg-white rounded-sm border border-[#48A9A6]/20 shadow-sm p-3 flex flex-col">
									{/* Document representations */}
									<div className="flex-grow flex flex-col space-y-2">
										<div className="h-8 bg-[#48A9A6]/10 rounded-sm flex items-center px-2">
										<div className="w-4 h-4 bg-[#48A9A6]/30 rounded-sm mr-2"></div>
										<div className="h-2 w-3/4 bg-[#48A9A6]/20 rounded-full"></div>
										</div>
										
										<div className="h-8 bg-[#48A9A6]/10 rounded-sm flex items-center px-2">
										<div className="w-4 h-4 bg-[#48A9A6]/30 rounded-sm mr-2"></div>
										<div className="h-2 w-2/3 bg-[#48A9A6]/20 rounded-full"></div>
										</div>
										
										<div className="h-8 bg-[#48A9A6]/10 rounded-sm flex items-center px-2">
										<div className="w-4 h-4 bg-[#48A9A6]/30 rounded-sm mr-2"></div>
										<div className="h-2 w-3/4 bg-[#48A9A6]/20 rounded-full"></div>
										</div>
									</div>
									
									{/* Label */}
									<div className="text-center mt-2">
										<div className="text-[#254E70]/60 text-xs">Institutional Knowledge</div>
									</div>
									</div>
								</div>
								
								{/* Middle: Processing */}
								<div className="w-1/3 px-2 flex flex-col">
									<div className="text-center mb-2">
									<div className="inline-block px-3 py-1 bg-[#946B4A]/10 rounded-sm">
										<span className="font-mono text-xs text-[#946B4A]">PROCESSING</span>
									</div>
									</div>
									
									{/* AI Processing visualization */}
									<div className="flex-grow bg-white rounded-sm border border-[#946B4A]/20 shadow-sm p-3 flex flex-col justify-between">
									{/* User query */}
									<div className="bg-[#F2EEE4] rounded-sm p-2 flex items-center">
										<div className="w-6 h-6 bg-[#254E70]/20 rounded-full flex-shrink-0 mr-2"></div>
										<div className="h-2 w-full bg-[#254E70]/30 rounded-full"></div>
									</div>
									
									{/* Processing visualization */}
									<div className="flex-grow py-3">
										<div className="h-full flex flex-col justify-center items-center space-y-2">
										<div className="h-1 w-3/4 bg-[#946B4A]/30 rounded-full"></div>
										<div className="h-1 w-2/3 bg-[#946B4A]/30 rounded-full"></div>
										<div className="h-1 w-3/4 bg-[#946B4A]/30 rounded-full"></div>
										<div className="w-12 h-12 rounded-sm bg-[#946B4A]/20 flex items-center justify-center">
											<svg className="w-6 h-6 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<div className="h-1 w-2/3 bg-[#946B4A]/30 rounded-full"></div>
										<div className="h-1 w-3/4 bg-[#946B4A]/30 rounded-full"></div>
										<div className="h-1 w-1/2 bg-[#946B4A]/30 rounded-full"></div>
										</div>
									</div>
									
									{/* Label */}
									<div className="text-center">
										<div className="text-[#254E70]/60 text-xs">AI Understanding</div>
									</div>
									</div>
								</div>
								
								{/* Right side: Generation */}
								<div className="w-1/3 pl-4 flex flex-col">
									<div className="text-center mb-2">
									<div className="inline-block px-3 py-1 bg-[#D97C4E]/10 rounded-sm">
										<span className="font-mono text-xs text-[#D97C4E]">GENERATION</span>
									</div>
									</div>
									
									{/* Response visualization */}
									<div className="flex-grow bg-white rounded-sm border border-[#D97C4E]/20 shadow-sm p-3 flex flex-col">
									{/* AI response visualization */}
									<div className="flex items-start mb-3">
										<div className="w-8 h-8 rounded-sm bg-[#D97C4E]/20 flex-shrink-0 flex items-center justify-center mr-2">
										<span className="text-[#D97C4E] font-serif text-sm">AI</span>
										</div>
										<div className="flex-grow space-y-1.5">
										<div className="h-2 w-full bg-[#D97C4E]/20 rounded-full"></div>
										<div className="h-2 w-5/6 bg-[#D97C4E]/20 rounded-full"></div>
										<div className="h-2 w-full bg-[#D97C4E]/20 rounded-full"></div>
										</div>
									</div>
									
									{/* Citation visualization */}
									<div className="bg-[#F2EEE4] rounded-sm p-2 mb-2">
										<div className="flex items-center">
										<div className="w-4 h-4 rounded-sm bg-[#48A9A6]/20 mr-2"></div>
										<div className="h-2 w-3/4 bg-[#48A9A6]/30 rounded-full"></div>
										</div>
									</div>
									
									{/* Citation visualization */}
									<div className="bg-[#F2EEE4] rounded-sm p-2">
										<div className="flex items-center">
										<div className="w-4 h-4 rounded-sm bg-[#48A9A6]/20 mr-2"></div>
										<div className="h-2 w-2/3 bg-[#48A9A6]/30 rounded-full"></div>
										</div>
									</div>
									
									{/* Label */}
									<div className="text-center mt-2">
										<div className="text-[#254E70]/60 text-xs">Precise, Cited Answers</div>
									</div>
									</div>
								</div>
								</div>
								
								{/* Bottom: Benefits */}
								<div className="mt-6 flex justify-between">
								<div className="w-1/3 px-1">
									<div className="text-center">
									<div className="w-8 h-8 rounded-sm bg-[#254E70]/10 mx-auto flex items-center justify-center mb-1">
										<svg className="w-4 h-4 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
									</div>
									<div className="text-[#254E70] text-xs font-medium">Accuracy</div>
									</div>
								</div>
								
								<div className="w-1/3 px-1">
									<div className="text-center">
									<div className="w-8 h-8 rounded-sm bg-[#254E70]/10 mx-auto flex items-center justify-center mb-1">
										<svg className="w-4 h-4 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									</div>
									<div className="text-[#254E70] text-xs font-medium">Speed</div>
									</div>
								</div>
								
								<div className="w-1/3 px-1">
									<div className="text-center">
									<div className="w-8 h-8 rounded-sm bg-[#254E70]/10 mx-auto flex items-center justify-center mb-1">
										<svg className="w-4 h-4 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
										</svg>
									</div>
									<div className="text-[#254E70] text-xs font-medium">Accessibility</div>
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						
						{/* Decorative elements */}
						<div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#D97C4E]/20 to-[#D97C4E]/5 blur-xl"></div>
							<div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-[#48A9A6]/20 to-[#48A9A6]/5 blur-xl"></div>
						</div>	




					</div>
	


	
					{/* Features section */}
					<div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-6 border border-[#254E70]/10 rounded-sm bg-white/30 backdrop-blur-sm">
							<div className="w-10 h-10 rounded-sm bg-[#48A9A6]/10 flex items-center justify-center mb-4">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 8V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V16M21 12H9M17 8L13 12L17 16" stroke="#48A9A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</div>
							<h3 className="font-serif text-xl mb-2">
								RAG Implementation
							</h3>
							<p className="text-[#254E70]/80">
								Advanced retrieval for museum collections, making knowledge searchable, discoverable, 
								and accessible.
							</p>
						</div>
						
						<div className="p-6 border border-[#254E70]/10 rounded-sm bg-white/30 backdrop-blur-sm">
							<div className="w-10 h-10 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mb-4">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#D97C4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</div>
							<h3 className="font-serif text-xl mb-2">
								Headless WordPress
							</h3>
							<p className="text-[#254E70]/80">
								Lightning-fast websites with improved UX, all while maintaining familiar content management.
							</p>
						</div>
						
						<div className="p-6 border border-[#254E70]/10 rounded-sm bg-white/30 backdrop-blur-sm">
							<div className="w-10 h-10 rounded-sm bg-[#254E70]/10 flex items-center justify-center mb-4">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9M9 3L3 9M8 17H16M12 13V21" stroke="#254E70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</div>
							<h3 className="font-serif text-xl mb-2">
								AI Integration
							</h3>
							<p className="text-[#254E70]/80">
								Seamless incorporation of AI tools that enhance visitor engagement without compromising authenticity.
							</p>
						</div>
					</div>




				</div>
			</section>
		);
	}