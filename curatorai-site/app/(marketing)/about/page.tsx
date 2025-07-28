import Link from 'next/link';
import SmallForm from '@/components/forms/small-form';




export default function Page() {
	return (
		<div className="min-h-screen bg-[#F2EEE4]">







			
			{/* Hero Section */}
			<section className="relative bg-[#254E70] text-white overflow-hidden">
				{/* Background grid pattern */}
				<div className="absolute inset-0 opacity-[0.05]" 
						 style={{
							 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23FFFFFF\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
							 backgroundSize: '20px 20px'
						 }}>
				</div>
				
				{/* Decorative elements */}
				<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-[#D97C4E]/20 to-transparent opacity-50"></div>
				<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-[#48A9A6]/30 to-transparent rounded-full blur-3xl"></div>
				
				<div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3 animate-fade-in-up">OUR STORY</h4>
						<h1 className="font-serif text-5xl md:text-6xl text-white mb-6 animate-fade-in-up animation-delay-150">
							Where Technology Meets Cultural Heritage
						</h1>
						<p className="text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-300">
							CuratorAI bridges the gap between cutting-edge technology and the rich legacy 
							of museums and cultural institutions.
						</p>
					</div>
				</div>
				
				{/* Decorative separator */}
				<div className="absolute bottom-0 left-0 right-0 h-6 bg-[#F2EEE4] clip-diagonal-up"></div>
			</section>
			







			{/* Our Mission */}
			<section className="py-20 relative overflow-hidden">
				{/* Decorative elements */}
				<div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-bl from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
				
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div className="relative order-2 md:order-1">
							<div className="aspect-square max-w-lg mx-auto relative">
								{/* Abstract museum visualization */}
								<div className="absolute inset-8 border-2 border-dashed border-[#254E70]/30 rounded-sm"></div>
								<div className="absolute inset-16 bg-[#254E70]/5 rounded-sm shadow-inner"></div>
								
								{/* Technology elements */}
								<div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-sm shadow-md flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 rotate-12">
									<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
									</svg>
								</div>
								
								<div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-sm shadow-md flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 -rotate-6">
									<svg className="w-8 h-8 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
									</svg>
								</div>
								
								<div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-white rounded-sm shadow-md flex items-center justify-center transform -translate-x-1/2 translate-y-1/2 rotate-3">
									<svg className="w-7 h-7 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
								</div>
								
								<div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white rounded-sm shadow-md flex items-center justify-center transform translate-x-1/2 translate-y-1/2 -rotate-12">
									<svg className="w-6 h-6 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
									</svg>
								</div>
								
								{/* Central element */}
								<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-sm shadow-lg flex items-center justify-center z-20">
									<div className="font-serif text-xl text-[#D97C4E]">curator</div>
									<div className="font-serif text-xl text-[#254E70] font-light">AI</div>
								</div>
								
								{/* Connection lines */}
								<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
									<path d="M110 100 L200 200" stroke="rgba(72, 169, 166, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
									<path d="M300 120 L200 200" stroke="rgba(217, 124, 78, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
									<path d="M100 300 L200 200" stroke="rgba(148, 107, 74, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
									<path d="M290 300 L200 200" stroke="rgba(37, 78, 112, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
								</svg>
							</div>
						</div>
						
						<div className="order-1 md:order-2">
							<h4 className="font-mono text-[#D97C4E] text-sm tracking-wider mb-3">OUR MISSION</h4>
							<h2 className="font-serif text-4xl text-[#254E70] mb-6">Preserving the Past, Embracing the Future</h2>
							
							<div className="space-y-6 text-[#254E70]/80">
								<p>
									CuratorAI was founded with a singular purpose: to help museums and cultural 
									institutions embrace cutting-edge technology without compromising their curatorial 
									expertise or institutional identity.
								</p>
								
								<p>
									We believe that the world's cultural knowledge belongs to everyone, and that 
									technology can make this heritage more accessible, engaging, and relevant to 
									modern audiences while respecting its historical significance.
								</p>
								
								<p>
									Our mission is to bridge the gap between traditional curatorial practices and 
									modern digital experiences, creating solutions that enhance institutions' ability 
									to preserve, interpret, and share cultural heritage.
								</p>
								
								<div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="bg-white p-4 rounded-sm shadow-sm border border-[#254E70]/10">
										<div className="flex items-center mb-2">
											<div className="w-8 h-8 rounded-sm bg-[#48A9A6]/10 flex items-center justify-center mr-3">
												<svg className="w-4 h-4 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<span className="text-[#254E70] font-medium">Knowledge Access</span>
										</div>
										<p className="text-[#254E70]/70 text-sm pl-11">
											Making collections and cultural knowledge accessible to all
										</p>
									</div>
									
									<div className="bg-white p-4 rounded-sm shadow-sm border border-[#254E70]/10">
										<div className="flex items-center mb-2">
											<div className="w-8 h-8 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mr-3">
												<svg className="w-4 h-4 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<span className="text-[#254E70] font-medium">Digital Transformation</span>
										</div>
										<p className="text-[#254E70]/70 text-sm pl-11">
											Guiding institutions through technological evolution
										</p>
									</div>
									
									<div className="bg-white p-4 rounded-sm shadow-sm border border-[#254E70]/10">
										<div className="flex items-center mb-2">
											<div className="w-8 h-8 rounded-sm bg-[#946B4A]/10 flex items-center justify-center mr-3">
												<svg className="w-4 h-4 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<span className="text-[#254E70] font-medium">Audience Engagement</span>
										</div>
										<p className="text-[#254E70]/70 text-sm pl-11">
											Creating meaningful connections between collections and visitors
										</p>
									</div>
									
									<div className="bg-white p-4 rounded-sm shadow-sm border border-[#254E70]/10">
										<div className="flex items-center mb-2">
											<div className="w-8 h-8 rounded-sm bg-[#254E70]/10 flex items-center justify-center mr-3">
												<svg className="w-4 h-4 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<span className="text-[#254E70] font-medium">Institutional Identity</span>
										</div>
										<p className="text-[#254E70]/70 text-sm pl-11">
											Preserving and enhancing each institution's unique voice and expertise
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			







			{/* Our Story 
			<section className="py-20 bg-white relative overflow-hidden">
			
				<div className="absolute inset-0 opacity-[0.02]" 
						 style={{
							 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
							 backgroundSize: '20px 20px'
						 }}>
				</div>
				
				<div className="container mx-auto px-6">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">OUR STORY</h4>
						<h2 className="font-serif text-4xl text-[#254E70] mb-6">The Journey of CuratorAI</h2>
						<p className="text-[#254E70]/80">
							Our path from a collaborative research project to a specialized technology 
							partner for cultural institutions worldwide.
						</p>
					</div>
					
					<div className="max-w-5xl mx-auto">
					
						<div className="relative">
						
							<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#254E70]/10"></div>
							
						
							<div className="relative mb-16">
								<div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#D97C4E] flex items-center justify-center text-white font-mono text-xs">
									1
								</div>
								
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div className="md:text-right order-2 md:order-1">
										<h3 className="font-serif text-2xl text-[#254E70] mb-2">Foundation</h3>
										<p className="text-[#254E70]/70">
											CuratorAI began as a research collaboration between technologists and museum 
											professionals seeking better ways to make collections searchable and accessible.
										</p>
									</div>
									
									<div className="bg-[#F2EEE4] p-6 rounded-sm shadow-sm order-1 md:order-2 max-w-sm ml-auto mr-auto md:ml-0">
										<div className="text-[#D97C4E] font-mono text-sm mb-2">2019</div>
										<p className="text-[#254E70]/80 text-sm italic">
											"Our first prototype was built for a small natural history museum that needed 
											to make their vast collection of specimen data accessible to researchers worldwide."
										</p>
										<div className="mt-2 text-right text-[#254E70]/60 text-xs">― Dr. Julia Liang, Co-founder</div>
									</div>
								</div>
							</div>
							
					
							<div className="relative mb-16">
								<div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#48A9A6] flex items-center justify-center text-white font-mono text-xs">
									2
								</div>
								
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div className="bg-[#F2EEE4] p-6 rounded-sm shadow-sm max-w-sm ml-auto mr-auto md:mr-0">
										<div className="text-[#48A9A6] font-mono text-sm mb-2">2020</div>
										<p className="text-[#254E70]/80 text-sm italic">
											"When the pandemic hit, museums suddenly needed digital solutions more than ever. 
											We pivoted to focus on helping institutions maintain their connection with audiences."
										</p>
										<div className="mt-2 text-right text-[#254E70]/60 text-xs">― Marcus Rivera, Co-founder</div>
									</div>
									
									<div>
										<h3 className="font-serif text-2xl text-[#254E70] mb-2">Development</h3>
										<p className="text-[#254E70]/70">
											As cultural institutions faced unprecedented challenges during global lockdowns, 
											we expanded our focus to include comprehensive digital transformation solutions.
										</p>
									</div>
								</div>
							</div>
							
		
							<div className="relative mb-16">
								<div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#946B4A] flex items-center justify-center text-white font-mono text-xs">
									3
								</div>
								
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div className="md:text-right order-2 md:order-1">
										<h3 className="font-serif text-2xl text-[#254E70] mb-2">Expansion</h3>
										<p className="text-[#254E70]/70">
											With a proven track record of successful implementations, we expanded our 
											team and services to meet growing demand from institutions of all sizes.
										</p>
									</div>
									
									<div className="bg-[#F2EEE4] p-6 rounded-sm shadow-sm order-1 md:order-2 max-w-sm ml-auto mr-auto md:ml-0">
										<div className="text-[#946B4A] font-mono text-sm mb-2">2022</div>
										<p className="text-[#254E70]/80 text-sm italic">
											"As we worked with more diverse institutions, we recognized the need for 
											solutions that preserved their unique character while embracing modern technology."
										</p>
										<div className="mt-2 text-right text-[#254E70]/60 text-xs">― Dr. Elena Johansson, Experience Director</div>
									</div>
								</div>
							</div>
							
						
							<div className="relative">
								<div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#254E70] flex items-center justify-center text-white font-mono text-xs">
									4
								</div>
								
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
									<div className="bg-[#F2EEE4] p-6 rounded-sm shadow-sm max-w-sm ml-auto mr-auto md:mr-0">
										<div className="text-[#254E70] font-mono text-sm mb-2">TODAY</div>
										<p className="text-[#254E70]/80 text-sm italic">
											"Our focus today is on building technology that disappears into the background, 
											allowing the cultural artifacts and stories to take center stage."
										</p>
										<div className="mt-2 text-right text-[#254E70]/60 text-xs">― Kwame Patel, Implementation Lead</div>
									</div>
									
									<div>
										<h3 className="font-serif text-2xl text-[#254E70] mb-2">Present Day</h3>
										<p className="text-[#254E70]/70">
											Today, CuratorAI is the leading technology partner for museums, archives, and cultural 
											centers seeking to enhance their digital presence while honoring their institutional legacy.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			*/}







			{/* Our Team
			<section className="py-20 relative overflow-hidden">
			
				<div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tl from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#48A9A6]/10 to-transparent rounded-full blur-3xl"></div>
				
				<div className="container mx-auto px-6">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h4 className="font-mono text-[#D97C4E] text-sm tracking-wider mb-3">OUR TEAM</h4>
						<h2 className="font-serif text-4xl text-[#254E70] mb-6">The Minds Behind CuratorAI</h2>
						<p className="text-[#254E70]/80">
							Our interdisciplinary team combines expertise in technology, 
							museology, art history, and user experience design.
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						
						<div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden group">
							<div className="aspect-square bg-[#48A9A6]/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-32 h-32 rounded-sm bg-white shadow-md flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
										<div className="text-[#48A9A6] font-serif text-4xl">JL</div>
									</div>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-serif text-xl text-[#254E70] mb-1">Dr. Julia Liang</h3>
								<div className="text-[#48A9A6] text-sm font-mono mb-3">CO-FOUNDER & AI ARCHITECT</div>
								<p className="text-[#254E70]/70 text-sm">
									Former museum curator with a Ph.D. in Computational Linguistics. 
									Leads our RAG implementation and knowledge systems.
								</p>
							</div>
						</div>
						
						
						<div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden group">
							<div className="aspect-square bg-[#D97C4E]/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-32 h-32 rounded-sm bg-white shadow-md flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
										<div className="text-[#D97C4E] font-serif text-4xl">MR</div>
									</div>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-serif text-xl text-[#254E70] mb-1">Marcus Rivera</h3>
								<div className="text-[#D97C4E] text-sm font-mono mb-3">CO-FOUNDER & CTO</div>
								<p className="text-[#254E70]/70 text-sm">
									Full-stack developer with 15+ years of experience creating 
									digital solutions for cultural institutions.
								</p>
							</div>
						</div>
						
						
						<div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden group">
							<div className="aspect-square bg-[#946B4A]/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-32 h-32 rounded-sm bg-white shadow-md flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
										<div className="text-[#946B4A] font-serif text-4xl">EJ</div>
									</div>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-serif text-xl text-[#254E70] mb-1">Dr. Elena Johansson</h3>
								<div className="text-[#946B4A] text-sm font-mono mb-3">EXPERIENCE DIRECTOR</div>
								<p className="text-[#254E70]/70 text-sm">
									Museum experience designer with a doctorate in Digital Humanities.
									Shapes our visitor-centered implementation approach.
								</p>
							</div>
						</div>
						
						
						<div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden group">
							<div className="aspect-square bg-[#254E70]/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-32 h-32 rounded-sm bg-white shadow-md flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
										<div className="text-[#254E70] font-serif text-4xl">KP</div>
									</div>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-serif text-xl text-[#254E70] mb-1">Kwame Patel</h3>
								<div className="text-[#254E70] text-sm font-mono mb-3">IMPLEMENTATION LEAD</div>
								<p className="text-[#254E70]/70 text-sm">
									Specialized in ethical AI implementation and inclusive design.
									Ensures our solutions serve diverse audiences.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			*/}







			{/* Our Approach */}
			<section className="py-20 bg-[#254E70] text-white relative overflow-hidden">




				{/* Background pattern */}
				<div className="absolute inset-0 opacity-[0.05]" 
						 style={{
							 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23FFFFFF\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
							 backgroundSize: '20px 20px'
						 }}>
				</div>



				
				{/* Decorative elements */}
				<div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-[#D97C4E]/20 to-transparent opacity-30"></div>
				<div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#48A9A6]/20 to-transparent opacity-30"></div>
				




				<div className="container mx-auto px-6 relative z-10">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">OUR APPROACH</h4>
						<h2 className="font-serif text-4xl text-white mb-6">How We Work</h2>
						<p className="text-white/80">
							Our collaborative methodology centers on understanding each institution's 
							unique mission and audience before implementing technical solutions.
						</p>
					</div>
					

					{/*}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/10">
							<div className="w-12 h-12 rounded-sm bg-[#D97C4E]/20 flex items-center justify-center mb-6">
								<div className="text-[#D97C4E] font-mono text-xl">01</div>
							</div>
							<h3 className="font-serif text-xl text-white mb-4">Discovery</h3>
							<p className="text-white/70">
								We begin by understanding your institution's mission, collection, 
								audience, and the unique challenges you face in the digital space.
							</p>
							<div className="mt-6 pt-6 border-t border-white/10">
								<div className="flex items-center text-white/60 text-sm">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Staff Interviews</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Audience Analysis</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Collection Assessment</span>
								</div>
							</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/10">
							<div className="w-12 h-12 rounded-sm bg-[#48A9A6]/20 flex items-center justify-center mb-6">
								<div className="text-[#48A9A6] font-mono text-xl">02</div>
							</div>
							<h3 className="font-serif text-xl text-white mb-4">Strategy</h3>
							<p className="text-white/70">
								We develop a comprehensive digital strategy that aligns with your 
								institutional goals, addressing immediate needs and future growth.
							</p>
							<div className="mt-6 pt-6 border-t border-white/10">
								<div className="flex items-center text-white/60 text-sm">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Technology Roadmap</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Solution Architecture</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>ROI Analysis</span>
								</div>
							</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/10">
							<div className="w-12 h-12 rounded-sm bg-[#946B4A]/20 flex items-center justify-center mb-6">
								<div className="text-[#946B4A] font-mono text-xl">03</div>
							</div>
							<h3 className="font-serif text-xl text-white mb-4">Implementation</h3>
							<p className="text-white/70">
								Our expert team builds and deploys tailored solutions, working 
								closely with your staff to ensure a smooth transition.
							</p>
							<div className="mt-6 pt-6 border-t border-white/10">
								<div className="flex items-center text-white/60 text-sm">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Agile Development</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Staff Training</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Iterative Testing</span>
								</div>
							</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/10">
							<div className="w-12 h-12 rounded-sm bg-white/20 flex items-center justify-center mb-6">
								<div className="text-white font-mono text-xl">04</div>
							</div>
							<h3 className="font-serif text-xl text-white mb-4">Evolution</h3>
							<p className="text-white/70">
								We provide ongoing support, optimization, and strategic guidance 
								to help your digital presence grow with your institution.
							</p>
							<div className="mt-6 pt-6 border-t border-white/10">
								<div className="flex items-center text-white/60 text-sm">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Performance Analytics</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Continuous Improvement</span>
								</div>
								<div className="flex items-center text-white/60 text-sm mt-2">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span>Technology Updates</span>
								</div>
							</div>
						</div>
					</div>
					*/}
					




					{/* Call to Action */}
					<div className="mt-20 max-w-3xl mx-auto text-center">




						<h3 className="font-serif text-2xl text-white mb-6">Ready to transform your institution's digital experience?</h3>
						<p className="text-white/80 mb-8">
							Schedule a consultation with our team to discuss how CuratorAI 
							can help your institution embrace the future while honoring its past.
						</p>




						<div className="flex flex-col sm:flex-row gap-4 justify-center">


							<Link 
								href="https://calendar.app.google/5ULp3UXgzcZ1kxzVA" 
								target='blank'
								className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center justify-center"
							>
								Schedule a Consultation
								<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</Link>

							{/*
							<Link 
								href="/about/values" 
								className="px-8 py-3 border border-white/30 text-white rounded-sm hover:bg-white/5 transition-colors font-medium inline-flex items-center justify-center"
							>
								Explore Our Values
								<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</Link>
							*/}


						</div>




					</div>




				</div>
			</section>
			







			{/* Contact Section */}
			<section className="py-20 bg-white relative overflow-hidden">
				{/* Background pattern - Ensure it's below the content */}
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
						backgroundSize: '20px 20px',
						// Add a lower z-index to ensure it's behind the content
						zIndex: 0, // Default z-index for positioned elements is auto, which can vary. Explicitly set lower.
					}}
				></div>

				{/* Main Content - Ensure it's above the background */}
				<div className="container mx-auto px-6 relative z-10"> {/* Add relative and z-10 */}
					<div className="max-w-6xl mx-auto">


						<div className='pb-16'>
							<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">
								GET IN TOUCH
							</h4>

							<h2 className="font-serif text-4xl text-[#254E70] mb-6">
								Connect With Us
							</h2>
						</div>




						<div className="
								grid 
								grid-cols-1 
								lg:grid-cols-2 
								gap-16
							"
						>


							<div className='
									order-2 lg:order-1
								'
							>
								<div className="space-y-6 text-[#254E70]/80">
									<p>
										We'd love to learn about your institution and discuss how we can help
										enhance your digital presence while honoring your cultural heritage.
									</p>

									<div className="space-y-4 mt-8">


										<div className="flex items-start">
											<div className="w-10 h-10 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-4">
												<svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
												</svg>
											</div>
											<div>
												<h3 className="font-medium text-[#254E70]">
													Email
												</h3>
												<a
													href="mailto:hello@curatorai.dev"
													className="text-[#D97C4E] hover:underline"
												>
													hello@curatorai.dev
												</a>
											</div>
										</div>


										<div className="flex items-start">
											<div className="w-10 h-10 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-4">
												<svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
												</svg>
											</div>
											<div>
												<h3 className="font-medium text-[#254E70]">
													Phone
												</h3>
												<a href="tel:+15551234567" className="text-[#48A9A6] hover:underline">
													(502) 407-7849
												</a>
											</div>
										</div>

										{/*
										<div className="flex items-start">
											<div className="w-10 h-10 rounded-sm bg-[#946B4A]/10 flex-shrink-0 flex items-center justify-center mr-4">
												<svg className="w-5 h-5 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>
											</div>
											<div>
												<h3 className="font-medium text-[#254E70]">
													Office
												</h3>
												<p className="text-[#254E70]/70 not-italic">
													123 Heritage Avenue, Suite 400<br />
													San Francisco, CA 94105
												</p>
											</div>
										</div>
										*/}


									</div>


									{/*
									<div className="pt-6 mt-8 border-t border-[#254E70]/10">
										<h3 className="font-medium text-[#254E70] mb-4">Follow Us</h3>
										<div className="flex space-x-4">
											<a href="#" className="w-10 h-10 rounded-sm bg-[#254E70]/5 flex items-center justify-center text-[#254E70] hover:bg-[#254E70]/10 transition-colors">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
													<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
												</svg>
											</a>

											<a href="#" className="w-10 h-10 rounded-sm bg-[#254E70]/5 flex items-center justify-center text-[#254E70] hover:bg-[#254E70]/10 transition-colors">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
													<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
												</svg>
											</a>

											<a href="#" className="w-10 h-10 rounded-sm bg-[#254E70]/5 flex items-center justify-center text-[#254E70] hover:bg-[#254E70]/10 transition-colors">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
													<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
												</svg>
											</a>

											<a href="#" className="w-10 h-10 rounded-sm bg-[#254E70]/5 flex items-center justify-center text-[#254E70] hover:bg-[#254E70]/10 transition-colors">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
												</svg>
											</a>
										</div>
									</div>
									*/}


								</div>
							</div>


							<div className="bg-[#F2EEE4] rounded-sm p-8 shadow-sm border border-[#254E70]/10
									order-1 lg:order-2
								"
							>

								<h3 className="font-serif text-2xl text-[#254E70] mb-6">
									Send Us a Message
								</h3>

								<SmallForm />

							</div>


						</div>




					</div>
				</div>
			</section>








		</div>
	);
}

