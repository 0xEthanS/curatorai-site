import Link from 'next/link';
import { useState } from 'react';




export default function FAQPage() {
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
            <h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3 animate-fade-in-up">KNOWLEDGE BASE</h4>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 animate-fade-in-up animation-delay-150">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-300">
              Everything you need to know about our services, implementation process, 
              and how we help cultural institutions embrace digital transformation.
            </p>
          </div>
        </div>
        
        {/* Decorative separator */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#F2EEE4] clip-diagonal-up"></div>
      </section>
      
      {/* FAQ Categories */}
      <section className="py-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-sm shadow-md border border-[#254E70]/10 overflow-hidden transform -translate-y-16">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <a href="#general" className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#254E70]/10 hover:bg-[#F2EEE4] transition-colors group">
                <div className="w-12 h-12 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mb-3 group-hover:bg-[#D97C4E]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium text-[#254E70]">General</span>
              </a>
              
              <a href="#rag" className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#254E70]/10 hover:bg-[#F2EEE4] transition-colors group">
                <div className="w-12 h-12 rounded-sm bg-[#48A9A6]/10 flex items-center justify-center mb-3 group-hover:bg-[#48A9A6]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="font-medium text-[#254E70]">RAG Technology</span>
              </a>
              
              <a href="#wordpress" className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#254E70]/10 hover:bg-[#F2EEE4] transition-colors group">
                <div className="w-12 h-12 rounded-sm bg-[#946B4A]/10 flex items-center justify-center mb-3 group-hover:bg-[#946B4A]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium text-[#254E70]">Headless WordPress</span>
              </a>
              
              <a href="#implementation" className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#254E70]/10 hover:bg-[#F2EEE4] transition-colors group">
                <div className="w-12 h-12 rounded-sm bg-[#254E70]/10 flex items-center justify-center mb-3 group-hover:bg-[#254E70]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-medium text-[#254E70]">Implementation</span>
              </a>
              
              <a href="#support" className="flex flex-col items-center justify-center p-6 hover:bg-[#F2EEE4] transition-colors group">
                <div className="w-12 h-12 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mb-3 group-hover:bg-[#D97C4E]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="font-medium text-[#254E70]">Support</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Bar */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-4 py-3 pl-12 bg-white border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-[#254E70]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* General FAQs */}
      <section id="general" className="py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-bl from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h4 className="font-mono text-[#D97C4E] text-sm tracking-wider mb-2">ABOUT US</h4>
            <h2 className="font-serif text-3xl text-[#254E70] mb-4">General Questions</h2>
            <div className="w-24 h-1 bg-[#D97C4E]/20"></div>
          </div>
          
          <div className="max-w-3xl space-y-6">
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What is CuratorAI?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  CuratorAI is a specialized technology partner for museums, archives, libraries, and other cultural 
                  institutions. We help these organizations leverage advanced technologies like Retrieval Augmented 
                  Generation (RAG) and headless WordPress to improve their digital presence, make their collections 
                  more accessible, and enhance visitor engagement.
                </p>
                <p className="text-[#254E70]/80">
                  Our team combines expertise in both technology and museology, allowing us to create solutions 
                  that respect curatorial expertise and institutional identity while employing cutting-edge 
                  technology to enhance accessibility and engagement.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What types of institutions do you work with?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We primarily serve museums, galleries, archives, libraries, historical societies, and other 
                  cultural heritage organizations. Our clients range from small local institutions to major 
                  national museums and university collections.
                </p>
                <p className="text-[#254E70]/80 mb-4">
                  We're also expanding to serve other knowledge-intensive sectors such as law firms and medical 
                  practices that have similar needs for intelligent information retrieval and presentation.
                </p>
                <p className="text-[#254E70]/80">
                  Whether you're a small historical society with limited IT resources or a major museum with 
                  complex digital needs, we can tailor our solutions to your specific requirements and scale.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How are your services priced?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We offer flexible pricing models based on the size of your institution, the complexity of your 
                  collections, and your specific needs. Our standard packages start at $399/month for smaller 
                  institutions, while custom enterprise solutions are priced based on project scope.
                </p>
                <p className="text-[#254E70]/80 mb-4">
                  We understand that cultural institutions often operate with limited budgets and complex funding 
                  cycles. We're committed to working within institutional budgets and can often structure payment 
                  plans to accommodate fiscal cycles or grant funding timelines.
                </p>
                <p className="text-[#254E70]/80">
                  Contact us for a detailed quote tailored to your specific requirements. We offer free initial 
                  consultations to understand your needs before providing a proposal.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What makes CuratorAI different from other technology providers?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  CuratorAI was founded specifically to serve cultural institutions, and our team combines deep 
                  expertise in both technology and museology. Unlike generic technology providers, we understand 
                  the unique challenges of digital preservation, cultural heritage presentation, and institutional 
                  workflows.
                </p>
                <p className="text-[#254E70]/80 mb-4">
                  Our solutions respect the curatorial voice and institutional identity while employing cutting-edge 
                  technology to enhance accessibility and engagement. We see technology as a means to amplify your 
                  mission, not replace the human expertise that makes cultural institutions special.
                </p>
                <p className="text-[#254E70]/80">
                  Additionally, our team includes former museum professionals who understand the practical challenges 
                  and constraints that cultural institutions face. This allows us to create solutions that are not 
                  just technically sound but also practically implementable within your organizational context.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">Do we need technical staff to maintain these systems?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  No. We design our systems with ease of use as a priority. For WordPress-based solutions, your team 
                  will continue using the familiar WordPress admin interface they already know. For RAG implementations, 
                  we provide user-friendly interfaces for content management.
                </p>
                <p className="text-[#254E70]/80 mb-4">
                  We understand that many cultural institutions have limited IT resources, so we build solutions that 
                  can be maintained by existing staff with minimal technical expertise. Our goal is to empower your 
                  team, not create dependencies.
                </p>
                <p className="text-[#254E70]/80">
                  Additionally, we offer ongoing support and maintenance packages to ensure your systems remain 
                  up-to-date and function optimally without requiring dedicated technical staff on your end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RAG Technology FAQs */}
      <section id="rag" className="py-16 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
               backgroundSize: '20px 20px'
             }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-2">RAG IMPLEMENTATION</h4>
            <h2 className="font-serif text-3xl text-[#254E70] mb-4">RAG Technology</h2>
            <div className="w-24 h-1 bg-[#48A9A6]/20"></div>
          </div>
          
          <div className="max-w-3xl space-y-6">
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What is Retrieval Augmented Generation (RAG)?</h3>
                <svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Retrieval Augmented Generation (RAG) is a technology that combines large language models with a 
                  retrieval system that can access specific information from your institution's knowledge base. 
                  This approach allows AI systems to generate responses that are grounded in your specific collections, 
                  archives, and institutional knowledge.
                </p>
                <p className="text-[#254E70]/80 mb-4">
                  Unlike generic AI systems that rely solely on their training data, RAG-powered solutions can access, 
                  cite, and incorporate your institution's unique content into responses, ensuring accuracy and 
                  relevance specific to your collections.
                </p>
                <p className="text-[#254E70]/80">
                  For cultural institutions, this means visitors can ask natural language questions about your 
                  collections and receive accurate, contextually appropriate responses based on your curatorial 
                  expertise and institutional knowledge.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How does RAG benefit cultural institutions?</h3>
                <svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  RAG technology offers several key benefits for museums, archives, and other cultural institutions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Enhanced Accessibility:</span> Makes your collections searchable through natural language questions, not just keywords</li>
                  <li><span className="font-medium text-[#254E70]">Knowledge Preservation:</span> Captures institutional expertise in a system that can be accessed by visitors even when staff aren't available</li>
                  <li><span className="font-medium text-[#254E70]">Deeper Engagement:</span> Allows visitors to explore collections in more depth through conversational interaction</li>
                  <li><span className="font-medium text-[#254E70]">Staff Amplification:</span> Reduces repetitive inquiries so staff can focus on higher-value interactions</li>
                  <li><span className="font-medium text-[#254E70]">Measurable Insights:</span> Provides data on what aspects of your collections generate the most interest</li>
                </ul>
                <p className="text-[#254E70]/80">
                  Most importantly, RAG ensures that AI responses are grounded in your institution's verified information, 
                  maintaining curatorial accuracy while expanding access to your collections.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What types of content can be included in a RAG implementation?</h3>
                <svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  RAG implementations can incorporate virtually any text-based content from your institution, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li>Collection catalogs and metadata</li>
                  <li>Exhibition catalogs and wall text</li>
                  <li>Research papers and publications</li>
                  <li>Archival documents and finding aids</li>
                  <li>Educational materials and curricula</li>
                  <li>Institutional policies and procedures</li>
                  <li>Conservation reports and documentation</li>
                  <li>Oral histories and interviews</li>
                  <li>Blog posts and web content</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  We can also process and include information from non-text sources such as images, audio, and video 
                  through appropriate metadata and transcription processes.
                </p>
                <p className="text-[#254E70]/80">
                  The system can be continuously updated as your collections and knowledge base grow, ensuring that 
                  the RAG implementation remains current with your latest acquisitions, research, and institutional knowledge.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How does the implementation process work?</h3>
                <svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Our RAG implementation process typically follows these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Discovery:</span> We assess your collection data, existing digital assets, and specific institutional needs</li>
                  <li><span className="font-medium text-[#254E70]">Data Processing:</span> We process your content into a format suitable for the retrieval system, including appropriate metadata</li>
                  <li><span className="font-medium text-[#254E70]">Knowledge Base Creation:</span> We create a specialized database that enables semantic search and retrieval</li>
                  <li><span className="font-medium text-[#254E70]">AI Integration:</span> We connect the retrieval system to appropriate large language models with safeguards for accuracy</li>
                  <li><span className="font-medium text-[#254E70]">Interface Development:</span> We create user-friendly interfaces for visitors and administrators</li>
                  <li><span className="font-medium text-[#254E70]">Testing and Refinement:</span> We rigorously test the system with real-world queries and refine as needed</li>
                  <li><span className="font-medium text-[#254E70]">Deployment:</span> We launch the system on your website, kiosks, or other platforms</li>
                  <li><span className="font-medium text-[#254E70]">Training:</span> We train your staff on system administration and content management</li>
                </ol>
                <p className="text-[#254E70]/80">
                  Throughout this process, we work closely with your curatorial, education, and technical teams to 
                  ensure the implementation aligns with your institutional voice and requirements.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How do you ensure accuracy and appropriate institutional voice?</h3>
                <svg className="w-5 h-5 text-[#48A9A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We take several measures to ensure accuracy and maintain your institution's unique voice:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Source Attribution:</span> All responses include citations to the source material from your collections</li>
                  <li><span className="font-medium text-[#254E70]">Curatorial Review:</span> We work with your experts to review and refine the system's responses</li>
                  <li><span className="font-medium text-[#254E70]">Content Filtering:</span> We implement appropriate guardrails to prevent inappropriate content</li>
                  <li><span className="font-medium text-[#254E70]">Tone and Style Training:</span> The system is fine-tuned to match your institution's communication style</li>
                  <li><span className="font-medium text-[#254E70]">Confidence Thresholds:</span> The system indicates when information might be uncertain or incomplete</li>
                  <li><span className="font-medium text-[#254E70]">Human-in-the-Loop Options:</span> For sensitive topics, the system can defer to human experts</li>
                </ul>
                <p className="text-[#254E70]/80">
                  Our approach is to view the RAG system as an extension of your curatorial voice, not a replacement 
                  for it. We work diligently to ensure that the technology accurately represents your institution's 
                  expertise and values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Headless WordPress FAQs */}
      <section id="wordpress" className="py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-[#946B4A]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h4 className="font-mono text-[#946B4A] text-sm tracking-wider mb-2">WEBSITE SOLUTIONS</h4>
            <h2 className="font-serif text-3xl text-[#254E70] mb-4">Headless WordPress</h2>
            <div className="w-24 h-1 bg-[#946B4A]/20"></div>
          </div>
          
          <div className="max-w-3xl space-y-6">
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What is headless WordPress?</h3>
                <svg className="w-5 h-5 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Headless WordPress is an approach that separates the content management system (the "back end") 
                  from the visitor-facing website (the "front end"). In this architecture, WordPress serves as the 
                  content repository and administrative interface, while a modern frontend framework (like React or 
                  Next.js) handles the presentation to visitors.
                </p>
                <p className="text-[#254E70]/80 mb-4">
                  This separation offers significant advantages: your content team can continue using the familiar 
                  WordPress interface they already know, while your visitors enjoy a faster, more engaging website 
                  built with modern web technologies.
                </p>
                <p className="text-[#254E70]/80">
                  The WordPress backend and modern frontend communicate through APIs (Application Programming 
                  Interfaces), creating a flexible system that can evolve and adapt to changing needs.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What are the benefits of headless WordPress for cultural institutions?</h3>
                <svg className="w-5 h-5 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Headless WordPress offers several key advantages for museums and cultural institutions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Superior Performance:</span> 2-5x faster page loads through static site generation and optimized code</li>
                  <li><span className="font-medium text-[#254E70]">Enhanced Security:</span> Reduced attack surface by separating the public frontend from the database</li>
                  <li><span className="font-medium text-[#254E70]">Improved SEO:</span> Better search engine rankings due to performance and modern coding practices</li>
                  <li><span className="font-medium text-[#254E70]">Content Freedom:</span> Greater flexibility in how collections and content are presented to visitors</li>
                  <li><span className="font-medium text-[#254E70]">Mobile Excellence:</span> Better experiences on all devices, especially on slower mobile connections</li>
                  <li><span className="font-medium text-[#254E70]">Future-Ready:</span> Easier integration with emerging technologies like AI and immersive experiences</li>
                  <li><span className="font-medium text-[#254E70]">Familiar Management:</span> Staff continue using the WordPress admin they already know</li>
                </ul>
                <p className="text-[#254E70]/80">
                  For museums and cultural institutions with rich content and collections, headless WordPress 
                  creates a foundation for delivering better digital experiences while maintaining operational 
                  continuity for content teams.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">Will our staff need to learn new skills to manage content?</h3>
                <svg className="w-5 h-5 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  No. One of the primary advantages of our headless WordPress implementation is that your content 
                  team will continue using the familiar WordPress admin interface they already know. The day-to-day 
                  experience of creating and editing content remains largely unchanged.
                </p>
                <p className="text-[#254E70]/80 mb-4">
                  We may introduce some additional content structuring tools or fields to enable better presentation 
                  on the frontend, but these are generally intuitive extensions of existing WordPress functionality. 
                  We provide comprehensive training for any new features.
                </p>
                <p className="text-[#254E70]/80">
                  The technical complexity of the headless architecture is handled entirely by our developers, allowing 
                  your team to focus on what they do best: creating and managing great content that showcases your collections.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">Can our existing WordPress site be migrated to a headless architecture?</h3>
                <svg className="w-5 h-5 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Yes, in most cases. We specialize in migrating existing WordPress sites to headless architecture 
                  while preserving all your content, media, and data. The migration process typically involves:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Content Audit:</span> Analyzing your existing content structure and requirements</li>
                  <li><span className="font-medium text-[#254E70]">Data Migration:</span> Moving all content, media, and metadata to the new system</li>
                  <li><span className="font-medium text-[#254E70]">API Configuration:</span> Setting up the WordPress REST API or GraphQL for content delivery</li>
                  <li><span className="font-medium text-[#254E70]">Frontend Development:</span> Building a new frontend using React and Next.js</li>
                  <li><span className="font-medium text-[#254E70]">URL Structure Preservation:</span> Maintaining your existing URLs for SEO continuity</li>
                  <li><span className="font-medium text-[#254E70]">Testing:</span> Comprehensive testing across devices and use cases</li>
                  <li><span className="font-medium text-[#254E70]">Deployment:</span> Controlled launch with monitoring and support</li>
                </ol>
                <p className="text-[#254E70]/80">
                  The migration is handled with minimal disruption to your operations, and we ensure that all 
                  your valuable content is preserved and enhanced in the new architecture.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How does headless WordPress integrate with our collection management system?</h3>
                <svg className="w-5 h-5 text-[#946B4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Headless WordPress can integrate with most collection management systems (CMS) used by cultural 
                  institutions, including TMS, PastPerfect, CollectionSpace, Mimsy, and others. The integration 
                  approach depends on your specific CMS and requirements, but typically includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">API Connections:</span> Direct integration if your CMS offers modern APIs</li>
                  <li><span className="font-medium text-[#254E70]">Data Synchronization:</span> Scheduled imports from your CMS to WordPress</li>
                  <li><span className="font-medium text-[#254E70]">Custom Fields:</span> Enhanced metadata fields in WordPress that mirror your CMS structure</li>
                  <li><span className="font-medium text-[#254E70]">Media Management:</span> Synchronized image and media assets across systems</li>
                  <li><span className="font-medium text-[#254E70]">Search Integration:</span> Unified search across website content and collection items</li>
                </ul>
                <p className="text-[#254E70]/80">
                  The headless architecture is particularly well-suited for these integrations because it allows 
                  us to aggregate data from multiple sources (WordPress, your CMS, and potentially other systems) 
                  and present it cohesively through the modern frontend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation FAQs */}
      <section id="implementation" className="py-16 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
               backgroundSize: '20px 20px'
             }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h4 className="font-mono text-[#254E70] text-sm tracking-wider mb-2">PROJECT PROCESS</h4>
            <h2 className="font-serif text-3xl text-[#254E70] mb-4">Implementation Questions</h2>
            <div className="w-24 h-1 bg-[#254E70]/20"></div>
          </div>
          
          <div className="max-w-3xl space-y-6">
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How long does implementation typically take?</h3>
                <svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Implementation timelines vary based on the complexity of your collections, specific requirements, 
                  and the scope of the project. However, here are typical timeframes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">RAG Implementation:</span> 8-12 weeks from initial consultation to full deployment</li>
                  <li><span className="font-medium text-[#254E70]">Headless WordPress Migration:</span> 6-10 weeks for a standard site</li>
                  <li><span className="font-medium text-[#254E70]">Combined Solutions:</span> 12-16 weeks for integrated implementations</li>
                  <li><span className="font-medium text-[#254E70]">Enterprise Solutions:</span> 16-20 weeks for large institutions with complex requirements</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  These timelines include all phases: discovery, planning, development, testing, and deployment. 
                  We work with your team to establish a realistic timeline based on your specific needs and can 
                  often accelerate certain aspects of the implementation if required.
                </p>
                <p className="text-[#254E70]/80">
                  We're also experienced in working with institutional timelines, such as aligning project completion 
                  with exhibition openings, fiscal year transitions, or grant deadlines.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What does the implementation process look like?</h3>
                <svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Our implementation process follows a structured methodology designed specifically for cultural institutions:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Discovery:</span> We learn about your institution, collections, audiences, and specific needs</li>
                  <li><span className="font-medium text-[#254E70]">Planning:</span> We develop a detailed project plan with milestones, deliverables, and responsibilities</li>
                  <li><span className="font-medium text-[#254E70]">Architecture:</span> We design the technical architecture based on your requirements</li>
                  <li><span className="font-medium text-[#254E70]">Content Strategy:</span> We work with your team to optimize content structure and workflow</li>
                  <li><span className="font-medium text-[#254E70]">Development:</span> Our team builds the solution in sprints with regular check-ins</li>
                  <li><span className="font-medium text-[#254E70]">Testing:</span> We conduct thorough testing across devices, browsers, and use cases</li>
                  <li><span className="font-medium text-[#254E70]">Training:</span> We provide comprehensive training for your team</li>
                  <li><span className="font-medium text-[#254E70]">Deployment:</span> We launch the solution with careful monitoring</li>
                  <li><span className="font-medium text-[#254E70]">Post-Launch Support:</span> We provide ongoing support and optimization</li>
                </ol>
                <p className="text-[#254E70]/80">
                  Throughout this process, we maintain close communication with your team, ensuring that the 
                  implementation meets your expectations and institutional requirements.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What resources will we need to provide during implementation?</h3>
                <svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We've designed our implementation process to minimize the burden on your team while ensuring 
                  their expertise shapes the final solution. Here's what we typically need from your institution:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Project Liaison:</span> A primary contact who coordinates communication (typically 2-4 hours per week)</li>
                  <li><span className="font-medium text-[#254E70]">Stakeholder Input:</span> Initial interviews and occasional feedback sessions with key staff (curators, educators, etc.)</li>
                  <li><span className="font-medium text-[#254E70]">Content Access:</span> Access to your digital collections, catalogs, and other relevant content</li>
                  <li><span className="font-medium text-[#254E70]">Technical Information:</span> Details about existing systems, hosting, and technical requirements</li>
                  <li><span className="font-medium text-[#254E70]">Review and Testing:</span> Participation in milestone reviews and user acceptance testing</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  We understand that museum staff often have limited availability and multiple responsibilities. 
                  Our process is designed to gather the necessary input efficiently and work around your team's 
                  schedules.
                </p>
                <p className="text-[#254E70]/80">
                  We don't require dedicated technical staff from your side, as our team handles all the technical 
                  aspects of the implementation.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">Can implementation be phased to accommodate budgets or timelines?</h3>
                <svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Yes, we frequently implement solutions in phases to accommodate institutional budgets, grant 
                  cycles, or operational constraints. Common phased approaches include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Collection-by-Collection:</span> Starting with priority collections and expanding over time</li>
                  <li><span className="font-medium text-[#254E70]">Feature-Based:</span> Implementing core functionality first, then adding advanced features</li>
                  <li><span className="font-medium text-[#254E70]">Platform-Specific:</span> Beginning with website implementation, then adding mobile or kiosk interfaces</li>
                  <li><span className="font-medium text-[#254E70]">Department-Focused:</span> Addressing specific departmental needs sequentially</li>
                  <li><span className="font-medium text-[#254E70]">Pilot-to-Full:</span> Starting with a pilot project, then expanding based on results</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  Each phase delivers tangible value while building toward the complete solution. We ensure that 
                  early phases establish the foundation for subsequent development, preventing rework or inefficiencies.
                </p>
                <p className="text-[#254E70]/80">
                  We can also structure payment schedules to align with your fiscal cycles, grant disbursements, 
                  or other financial considerations.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-[#F2EEE4] rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How do you handle hosting and infrastructure?</h3>
                <svg className="w-5 h-5 text-[#254E70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We offer flexible hosting options based on your institution's needs, preferences, and existing infrastructure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Managed Hosting:</span> We can provide complete hosting solutions optimized for your implementation</li>
                  <li><span className="font-medium text-[#254E70]">Existing Infrastructure:</span> We can deploy to your current hosting environment if suitable</li>
                  <li><span className="font-medium text-[#254E70]">Hybrid Solutions:</span> Different components can be hosted in different environments if needed</li>
                  <li><span className="font-medium text-[#254E70]">Cloud Services:</span> We work with major cloud providers (AWS, Azure, Google Cloud)</li>
                  <li><span className="font-medium text-[#254E70]">Specialized Platforms:</span> For headless WordPress, we often recommend Vercel, Netlify, or WP Engine</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  Our hosting solutions prioritize:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Security:</span> Robust protection against threats and vulnerabilities</li>
                  <li><span className="font-medium text-[#254E70]">Performance:</span> Optimized configurations for fast page loads</li>
                  <li><span className="font-medium text-[#254E70]">Reliability:</span> High uptime and redundancy measures</li>
                  <li><span className="font-medium text-[#254E70]">Scalability:</span> Ability to handle traffic spikes during major exhibitions or events</li>
                  <li><span className="font-medium text-[#254E70]">Backup/Recovery:</span> Comprehensive backup systems and disaster recovery procedures</li>
                </ul>
                <p className="text-[#254E70]/80">
                  We can provide detailed hosting recommendations as part of our initial proposal, considering 
                  your specific requirements and constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support FAQs */}
      <section id="support" className="py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tl from-[#D97C4E]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h4 className="font-mono text-[#D97C4E] text-sm tracking-wider mb-2">ONGOING ASSISTANCE</h4>
            <h2 className="font-serif text-3xl text-[#254E70] mb-4">Support & Maintenance</h2>
            <div className="w-24 h-1 bg-[#D97C4E]/20"></div>
          </div>
          
          <div className="max-w-3xl space-y-6">
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What ongoing support do you provide?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We offer comprehensive support packages designed specifically for cultural institutions. 
                  Our standard support includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Technical Maintenance:</span> Regular updates, security patches, and performance optimization</li>
                  <li><span className="font-medium text-[#254E70]">Monitoring:</span> Proactive monitoring of system health and performance</li>
                  <li><span className="font-medium text-[#254E70]">Troubleshooting:</span> Rapid response to issues and technical challenges</li>
                  <li><span className="font-medium text-[#254E70]">User Support:</span> Assistance for your staff with content management or system questions</li>
                  <li><span className="font-medium text-[#254E70]">Knowledge Base:</span> Access to documentation and training materials</li>
                  <li><span className="font-medium text-[#254E70]">Regular Check-ins:</span> Scheduled reviews of system performance and your needs</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  We offer several tiers of support to match your needs and budget:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Essential:</span> Core maintenance and support during business hours</li>
                  <li><span className="font-medium text-[#254E70]">Premium:</span> Enhanced support with faster response times and extended hours</li>
                  <li><span className="font-medium text-[#254E70]">Enterprise:</span> Comprehensive 24/7 support with dedicated account management</li>
                </ul>
                <p className="text-[#254E70]/80">
                  All support packages can be customized to meet your institution's specific requirements and constraints.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How do we add or update content after implementation?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  Adding and updating content is straightforward and designed to be managed by your existing staff:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">WordPress Content:</span> Your team continues to use the familiar WordPress admin interface</li>
                  <li><span className="font-medium text-[#254E70]">RAG Knowledge Base:</span> Simple interfaces for adding new documents or information</li>
                  <li><span className="font-medium text-[#254E70]">Collection Integrations:</span> Automated or semi-automated updates from your collection management system</li>
                  <li><span className="font-medium text-[#254E70]">Media Assets:</span> User-friendly media management tools for images, videos, and audio</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  The specific process depends on your implementation, but generally involves:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li>Logging into the administrative interface</li>
                  <li>Creating or editing content using familiar forms and editors</li>
                  <li>Previewing changes to ensure they appear as expected</li>
                  <li>Publishing updates, which are automatically propagated to the frontend</li>
                </ol>
                <p className="text-[#254E70]/80">
                  We provide comprehensive training for your team and detailed documentation for all content 
                  management processes. Our support team is also available to assist with complex content 
                  updates or answer questions.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How do you handle feature requests and system enhancements?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We embrace the evolving needs of cultural institutions and offer several paths for 
                  system enhancement:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Feature Request System:</span> A formal process for submitting and tracking enhancement requests</li>
                  <li><span className="font-medium text-[#254E70]">Quarterly Reviews:</span> Regular discussions about potential improvements and priorities</li>
                  <li><span className="font-medium text-[#254E70]">Enhancement Bank:</span> Premium support tiers include hours for small enhancements</li>
                  <li><span className="font-medium text-[#254E70]">Roadmap Planning:</span> Collaborative planning for significant feature additions</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  For larger enhancements, we follow a structured process:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Requirements Gathering:</span> Detailed discussion of the desired functionality</li>
                  <li><span className="font-medium text-[#254E70]">Feasibility Assessment:</span> Technical evaluation and approach determination</li>
                  <li><span className="font-medium text-[#254E70]">Proposal:</span> Scope, timeline, and cost estimate for the enhancement</li>
                  <li><span className="font-medium text-[#254E70]">Development:</span> Iterative implementation with regular feedback</li>
                  <li><span className="font-medium text-[#254E70]">Testing:</span> Thorough quality assurance before deployment</li>
                  <li><span className="font-medium text-[#254E70]">Deployment:</span> Controlled release with monitoring</li>
                </ol>
                <p className="text-[#254E70]/80">
                  We prioritize enhancements that align with your institutional goals and visitor needs, 
                  ensuring that your digital presence continues to evolve and improve over time.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">What training do you provide for our staff?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We provide comprehensive training tailored to different roles within your institution:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Content Contributors:</span> Basic content management, media handling, and publishing processes</li>
                  <li><span className="font-medium text-[#254E70]">Content Managers:</span> Advanced content organization, workflow management, and quality control</li>
                  <li><span className="font-medium text-[#254E70]">Administrators:</span> System configuration, user management, and higher-level functions</li>
                  <li><span className="font-medium text-[#254E70]">Special Roles:</span> Specific training for roles like collection managers, educators, or researchers</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  Our training approach includes multiple formats to accommodate different learning styles and needs:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Live Sessions:</span> Interactive training with our experts, either in-person or virtual</li>
                  <li><span className="font-medium text-[#254E70]">Video Tutorials:</span> Recorded step-by-step guides for common tasks</li>
                  <li><span className="font-medium text-[#254E70]">Written Documentation:</span> Comprehensive manuals and quick reference guides</li>
                  <li><span className="font-medium text-[#254E70]">Hands-On Workshops:</span> Practical exercises in a safe training environment</li>
                  <li><span className="font-medium text-[#254E70]">Office Hours:</span> Scheduled Q&A sessions during the initial weeks after launch</li>
                </ul>
                <p className="text-[#254E70]/80">
                  We also offer refresher training and new staff onboarding as part of our ongoing support 
                  packages, ensuring that your team maintains proficiency as roles change and new features 
                  are added.
                </p>
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-white rounded-sm shadow-sm border border-[#254E70]/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#254E70]/10 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-[#254E70]">How do you measure success and provide analytics?</h3>
                <svg className="w-5 h-5 text-[#D97C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#254E70]/80 mb-4">
                  We work with you to establish meaningful Key Performance Indicators (KPIs) that align with 
                  your institutional goals, then provide comprehensive analytics to track progress:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Standard Web Analytics:</span> Visitor traffic, engagement metrics, and conversion tracking</li>
                  <li><span className="font-medium text-[#254E70]">Collection Engagement:</span> Analysis of how users interact with your digital collections</li>
                  <li><span className="font-medium text-[#254E70]">RAG Insights:</span> Usage patterns, common queries, and knowledge gaps in RAG implementations</li>
                  <li><span className="font-medium text-[#254E70]">Performance Metrics:</span> Page load times, server performance, and other technical indicators</li>
                  <li><span className="font-medium text-[#254E70]">Audience Insights:</span> Demographic and behavioral data about your digital visitors</li>
                </ul>
                <p className="text-[#254E70]/80 mb-4">
                  We provide analytics through several channels:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#254E70]/80 mb-4">
                  <li><span className="font-medium text-[#254E70]">Interactive Dashboards:</span> Real-time visualization of key metrics</li>
                  <li><span className="font-medium text-[#254E70]">Monthly Reports:</span> Detailed analysis of performance and trends</li>
                  <li><span className="font-medium text-[#254E70]">Quarterly Reviews:</span> In-depth assessment with recommendations</li>
                  <li><span className="font-medium text-[#254E70]">Custom Reports:</span> Specialized analysis for specific initiatives or grants</li>
                </ul>
                <p className="text-[#254E70]/80">
                  Our analytics approach goes beyond raw numbers to provide actionable insights that can 
                  inform your content strategy, exhibition planning, and digital initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Still have questions */}
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
            <h2 className="font-serif text-3xl text-white mb-6">Still Have Questions?</h2>
            <p className="text-white/80 mb-8">
              Our team is here to help. Contact us for answers to your specific questions 
              or to discuss how we can help your institution embrace digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center justify-center"
              >
                Contact Us
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </Link>
              <Link 
                href="/demo" 
                className="px-8 py-3 border border-white/30 text-white rounded-sm hover:bg-white/5 transition-colors font-medium inline-flex items-center justify-center"
              >
                Schedule a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

