import Link from 'next/link';




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
						<h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3 animate-fade-in-up">GET IN TOUCH</h4>
						<h1 className="font-serif text-5xl md:text-6xl text-white mb-6 animate-fade-in-up animation-delay-150">
							Let's Connect
						</h1>
						<p className="text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-300">
							We're here to answer your questions and discuss how we can help 
							transform your institution's digital experience.
						</p>
					</div>
				</div>
				
				{/* Decorative separator */}
				<div className="absolute bottom-0 left-0 right-0 h-6 bg-[#F2EEE4] clip-diagonal-up"></div>
			</section>
			
			{/* Main Contact Section */}
			<section className="py-20 relative overflow-hidden">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
						{/* Contact Information */}
						<div className="lg:col-span-4">
							<div className="sticky top-8">
								<h2 className="font-serif text-3xl text-[#254E70] mb-6">Contact Information</h2>
								<p className="text-[#254E70]/80 mb-8">
									Reach out through any of the channels below, and our team 
									will get back to you within one business day.
								</p>
								
								<div className="space-y-6 mb-8">
									<div className="flex items-start">
										<div className="w-12 h-12 rounded-sm bg-[#D97C4E]/10 flex-shrink-0 flex items-center justify-center mr-4">
											<svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
										<div>
											<h3 className="font-medium text-[#254E70] mb-1">Email</h3>
											<a href="mailto:hello@curatorai.com" className="text-[#D97C4E] hover:underline">hello@curatorai.com</a>
											<p className="text-sm text-[#254E70]/60 mt-1">For general inquiries</p>
										</div>
									</div>
									
									<div className="flex items-start">
										<div className="w-12 h-12 rounded-sm bg-[#48A9A6]/10 flex-shrink-0 flex items-center justify-center mr-4">
											<svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div>
											<h3 className="font-medium text-[#254E70] mb-1">Phone</h3>
											<a href="tel:+15551234567" className="text-[#48A9A6] hover:underline">+1 (555) 123-4567</a>
											<p className="text-sm text-[#254E70]/60 mt-1">Mon-Fri, 9am-5pm PT</p>
										</div>
									</div>
									
									<div className="flex items-start">
										<div className="w-12 h-12 rounded-sm bg-[#946B4A]/10 flex-shrink-0 flex items-center justify-center mr-4">
											<svg className="w-6 h-6 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
										<div>
											<h3 className="font-medium text-[#254E70] mb-1">Office</h3>
											<address className="text-[#254E70]/80 not-italic">
												123 Heritage Avenue, Suite 400<br />
												San Francisco, CA 94105
											</address>
											<p className="text-sm text-[#254E70]/60 mt-1">By appointment only</p>
										</div>
									</div>
								</div>
								
								<div className="border-t border-[#254E70]/10 pt-8 mb-8">
									<h3 className="font-medium text-[#254E70] mb-4">Connect With Us</h3>
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
								
								<div className="bg-white rounded-sm p-6 shadow-sm border border-[#254E70]/10">
									<h3 className="font-serif text-xl text-[#254E70] mb-4">Subscribe to Our Newsletter</h3>
									<p className="text-[#254E70]/70 text-sm mb-4">
										Stay updated with the latest in cultural technology, case studies, 
										and invitations to exclusive events.
									</p>
									<form className="flex space-x-2">
										<input
											type="email"
											placeholder="Your email address"
											className="flex-grow px-4 py-2 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
										/>
										<button
											type="submit"
											className="px-4 py-2 bg-[#48A9A6] text-white rounded-sm hover:bg-[#48A9A6]/90 transition-colors flex-shrink-0"
										>
											Subscribe
										</button>
									</form>
								</div>
							</div>
						</div>
						
						{/* Contact Form */}
						<div className="lg:col-span-8">
							<div className="bg-white rounded-sm shadow-md border border-[#254E70]/10 overflow-hidden">
								<div className="px-8 py-6 bg-[#254E70]">
									<h2 className="font-serif text-2xl text-white">Send Us a Message</h2>
									<p className="text-white/70 mt-2">
										Let us know how we can help your institution embrace the digital future.
									</p>
								</div>
								
								<form className="p-8">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
										<div>
											<label htmlFor="firstName" className="block text-[#254E70] text-sm font-medium mb-2">
												First Name <span className="text-[#D97C4E]">*</span>
											</label>
											<input
												type="text"
												id="firstName"
												className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
												placeholder="Jane"
												required
											/>
										</div>
										
										<div>
											<label htmlFor="lastName" className="block text-[#254E70] text-sm font-medium mb-2">
												Last Name <span className="text-[#D97C4E]">*</span>
											</label>
											<input
												type="text"
												id="lastName"
												className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
												placeholder="Smith"
												required
											/>
										</div>
									</div>
									
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
										<div>
											<label htmlFor="email" className="block text-[#254E70] text-sm font-medium mb-2">
												Email Address <span className="text-[#D97C4E]">*</span>
											</label>
											<input
												type="email"
												id="email"
												className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
												placeholder="jane@example.com"
												required
											/>
										</div>
										
										<div>
											<label htmlFor="phone" className="block text-[#254E70] text-sm font-medium mb-2">
												Phone Number
											</label>
											<input
												type="tel"
												id="phone"
												className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
												placeholder="(555) 123-4567"
											/>
										</div>
									</div>
									
									<div className="mb-6">
										<label htmlFor="institution" className="block text-[#254E70] text-sm font-medium mb-2">
											Institution Name <span className="text-[#D97C4E]">*</span>
										</label>
										<input
											type="text"
											id="institution"
											className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
											placeholder="Museum or Organization Name"
											required
										/>
									</div>
									
									<div className="mb-6">
										<label htmlFor="jobTitle" className="block text-[#254E70] text-sm font-medium mb-2">
											Your Role
										</label>
										<input
											type="text"
											id="jobTitle"
											className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
											placeholder="Director, Curator, Digital Manager, etc."
										/>
									</div>
									
									<div className="mb-6">
										<label htmlFor="interest" className="block text-[#254E70] text-sm font-medium mb-2">
											I'm Interested In <span className="text-[#D97C4E]">*</span>
										</label>




										<select
											id="interest"
											className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
											required
										>


											<option 
												value=""  
												selected
												defaultValue={"true"}
											>
												Please select...
											</option>


											<option value="rag">RAG Implementation</option>
											<option value="headless">Headless WordPress</option>
											<option value="both">Both Services</option>
											<option value="consultation">General Consultation</option>
											<option value="other">Other</option>
										</select>




									</div>
									
									<div className="mb-6">
										<label htmlFor="message" className="block text-[#254E70] text-sm font-medium mb-2">
											Message <span className="text-[#D97C4E]">*</span>
										</label>
										<textarea
											id="message"
											className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
											placeholder="Tell us about your project needs, goals, or questions..."
											rows={6}
											required
										></textarea>
									</div>
									
									<div className="mb-6">
										<div className="flex items-start">
											<div className="flex items-center h-5">
												<input
													id="privacy"
													type="checkbox"
													className="h-4 w-4 border-[#254E70]/20 rounded focus:ring-[#48A9A6]"
													required
												/>
											</div>
											<div className="ml-3 text-sm">
												<label htmlFor="privacy" className="text-[#254E70]/70">
													I agree to the <a href="/privacy" className="text-[#48A9A6] hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
												</label>
											</div>
										</div>
									</div>
									
									<div>
										<button
											type="submit"
											className="w-full px-6 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium"
										>
											Send Message
										</button>
									</div>
								</form>
							</div>
							
							{/* Location Map Visualization */}
							<div className="mt-12 bg-white rounded-sm shadow-md border border-[#254E70]/10 overflow-hidden">
								<div className="px-8 py-6 border-b border-[#254E70]/10">
									<h3 className="font-serif text-xl text-[#254E70]">Visit Our Office</h3>
									<p className="text-[#254E70]/70 mt-2">
										Schedule an appointment to meet with our team in person.
									</p>
								</div>
								
								<div className="aspect-video relative overflow-hidden bg-[#F2EEE4]">
									{/* This would be replaced with an actual map integration */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-center">
											<div className="w-16 h-16 rounded-sm bg-[#254E70]/10 mx-auto mb-4 flex items-center justify-center">
												<svg className="w-8 h-8 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
												</svg>
											</div>
											<p className="text-[#254E70]/70">Interactive map would be displayed here</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			{/* FAQ Section */}
			<section className="py-20 bg-white relative overflow-hidden">
				{/* Background pattern */}
				<div className="absolute inset-0 opacity-[0.02]" 
						 style={{
							 backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
							 backgroundSize: '20px 20px'
						 }}>
				</div>
				
				<div className="container mx-auto px-6">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h4 className="font-mono text-[#D97C4E] text-sm tracking-wider mb-3">FREQUENTLY ASKED QUESTIONS</h4>
						<h2 className="font-serif text-4xl text-[#254E70] mb-6">Common Questions</h2>
						<p className="text-[#254E70]/80">
							Answers to questions we frequently receive about our services and process.
						</p>
					</div>
					
					<div className="max-w-4xl mx-auto">
						<div className="space-y-6">
							{/* FAQ Item 1 */}
							<div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
								<div className="px-6 py-4 cursor-pointer flex justify-between items-center">
									<h3 className="font-medium text-[#254E70]">What types of institutions do you work with?</h3>
									<svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
								<div className="px-6 py-4 bg-white border-t border-[#254E70]/10">
									<p className="text-[#254E70]/80">
										We specialize in working with museums, galleries, archives, libraries, historical societies, 
										and other cultural institutions. Our clients range from small local organizations to major 
										national museums, as well as educational institutions with significant collections. We're 
										also expanding to serve law firms and medical practices with specialized knowledge management needs.
									</p>
								</div>
							</div>
							
							{/* FAQ Item 2 */}
							<div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
								<div className="px-6 py-4 cursor-pointer flex justify-between items-center">
									<h3 className="font-medium text-[#254E70]">How long does implementation typically take?</h3>
									<svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
								<div className="px-6 py-4 bg-white border-t border-[#254E70]/10">
									<p className="text-[#254E70]/80">
										Implementation timelines vary based on the complexity of your collections and specific needs. 
										Typically, our RAG implementations take 8-12 weeks from initial consultation to full deployment. 
										Headless WordPress migrations generally take 6-10 weeks. We work closely with your team to establish 
										a realistic timeline and keep you updated throughout the process.
									</p>
								</div>
							</div>
							
							{/* FAQ Item 3 */}
							<div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
								<div className="px-6 py-4 cursor-pointer flex justify-between items-center">
									<h3 className="font-medium text-[#254E70]">Do we need technical staff to maintain these systems?</h3>
									<svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
								<div className="px-6 py-4 bg-white border-t border-[#254E70]/10">
									<p className="text-[#254E70]/80">
										No. We design our systems with ease of use as a priority. For WordPress-based solutions, 
										your team will continue using the familiar WordPress admin interface they already know. 
										For RAG implementations, we provide user-friendly interfaces for content management. 
										Additionally, we offer ongoing support and maintenance packages to ensure your systems 
										remain up-to-date and function optimally without requiring dedicated technical staff.
									</p>
								</div>
							</div>
							
							{/* FAQ Item 4 */}
							<div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
								<div className="px-6 py-4 cursor-pointer flex justify-between items-center">
									<h3 className="font-medium text-[#254E70]">How are your services priced?</h3>
									<svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
								<div className="px-6 py-4 bg-white border-t border-[#254E70]/10">
									<p className="text-[#254E70]/80">
										We offer flexible pricing models based on the size of your institution, the complexity 
										of your collections, and your specific needs. Our standard packages start at $399/month 
										for smaller institutions, while custom enterprise solutions are priced based on project 
										scope. We're committed to working within institutional budgets and can often structure 
										payment plans to accommodate fiscal cycles or grant funding timelines. Contact us for a 
										detailed quote tailored to your requirements.
									</p>
								</div>
							</div>
							
							{/* FAQ Item 5 */}
							<div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
								<div className="px-6 py-4 cursor-pointer flex justify-between items-center">
									<h3 className="font-medium text-[#254E70]">What makes CuratorAI different from other technology providers?</h3>
									<svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
								<div className="px-6 py-4 bg-white border-t border-[#254E70]/10">
									<p className="text-[#254E70]/80">
										CuratorAI was founded specifically to serve cultural institutions, and our team combines 
										deep expertise in both technology and museology. Unlike generic technology providers, we 
										understand the unique challenges of digital preservation, cultural heritage presentation, 
										and institutional workflows. Our solutions respect the curatorial voice and institutional 
										identity while employing cutting-edge technology to enhance accessibility and engagement. 
										We see technology as a means to amplify your mission, not replace the human expertise 
										that makes cultural institutions special.
									</p>
								</div>
							</div>
						</div>
						
						<div className="mt-8 text-center">
							<p className="text-[#254E70]/70">
								Don't see your question answered here?
							</p>
							<a href="mailto:hello@curatorai.com" className="text-[#D97C4E] hover:underline">Contact us directly</a>
						</div>
					</div>
				</div>
			</section>
			
			{/* CTA Section */}
			<section className="py-16 bg-[#254E70] text-white relative overflow-hidden">
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
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="font-serif text-3xl text-white mb-6">Ready to Transform Your Digital Experience?</h2>
						<p className="text-white/80 mb-8">
							Schedule a consultation with our team to explore how CuratorAI 
							can help your institution embrace digital transformation.
						</p>
						<Link 
							href="/demo" 
							className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center"
						>
							Request a Demo
							<svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}





