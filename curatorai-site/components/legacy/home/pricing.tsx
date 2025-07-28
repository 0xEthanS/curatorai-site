import Link from 'next/link';




export default function Pricing() {
  return (
    <section className="bg-[#F2EEE4] py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.025]" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-[#254E70]/20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full border border-[#D97C4E]/20 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">TAILORED SOLUTIONS</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-[#254E70] mb-4">Choose your knowledge pathway</h2>
          <p className="text-[#946B4A] text-lg">
            Flexible plans designed for cultural institutions and beyond,
            with a focus on preserving heritage while enabling innovation.
          </p>
        </div>
        
        {/* Pricing toggle - can be enhanced with client-side interactivity */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-white/50 p-1 rounded-sm border border-[#254E70]/10">
            <button className="px-4 py-2 text-sm bg-[#254E70] text-white rounded-sm">Monthly</button>
            <button className="px-4 py-2 text-sm text-[#254E70]">Annual</button>
          </div>
          <span className="ml-2 text-xs inline-flex items-center text-[#D97C4E]">
            Save 20%
            <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cultural tier */}
          <div className="relative bg-white border border-[#254E70]/10 rounded-sm overflow-hidden transition-transform hover:shadow-sm hover:-translate-y-1">
            {/* Card decorative pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.03]" 
                 style={{
                   backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23254E70\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                   backgroundSize: '10px 10px'
                 }}>
            </div>
            
            <div className="p-8">
              <div className="h-12 flex items-center">
                <h3 className="font-serif text-xl text-[#254E70]">Cultural</h3>
              </div>
              
              <div className="mt-4 flex items-baseline">
                <span className="font-serif text-4xl font-light text-[#254E70]">$399</span>
                <span className="font-mono text-sm text-[#254E70]/60 ml-1">/month</span>
              </div>
              
              <p className="mt-2 text-[#946B4A] text-sm">
                Perfect for museums, galleries, historical centers, and cultural institutions.
              </p>
              
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">RAG implementation for collections</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Headless WordPress setup</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Up to 5,000 collection items</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Basic AI integrations</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#254E70]/30 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/40">Advanced analytics</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/contact?plan=cultural" 
                  className="w-full block text-center px-6 py-3 bg-[#254E70]/10 text-[#254E70] rounded-sm hover:bg-[#254E70]/20 transition-colors font-medium"
                >
                  Choose Cultural
                </Link>
              </div>
            </div>
          </div>
          
          {/* Professional tier */}
          <div className="relative bg-white border-2 border-[#D97C4E] rounded-sm overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
            {/* Recommended badge */}
            <div className="absolute top-0 right-0 bg-[#D97C4E] text-white text-xs font-medium py-1 px-3 font-mono tracking-wide">
              RECOMMENDED
            </div>
            
            {/* Card decorative pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.03]" 
                 style={{
                   backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%23D97C4E\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                   backgroundSize: '10px 10px'
                 }}>
            </div>
            
            <div className="p-8">
              <div className="h-12 flex items-center">
                <h3 className="font-serif text-xl text-[#254E70]">Professional</h3>
              </div>
              
              <div className="mt-4 flex items-baseline">
                <span className="font-serif text-4xl font-light text-[#254E70]">$899</span>
                <span className="font-mono text-sm text-[#254E70]/60 ml-1">/month</span>
              </div>
              
              <p className="mt-2 text-[#946B4A] text-sm">
                Ideal for professional services like law firms, medical practices, and consultancies.
              </p>
              
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="h-5 w-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">RAG implementation for knowledge base</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Headless WordPress setup</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Up to 25,000 documents</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Advanced AI integrations</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#D97C4E] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Comprehensive analytics</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/contact?plan=professional" 
                  className="w-full block text-center px-6 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium"
                >
                  Choose Professional
                </Link>
              </div>
            </div>
          </div>
          
          {/* Enterprise tier */}
          <div className="relative bg-white border border-[#254E70]/10 rounded-sm overflow-hidden transition-transform hover:shadow-sm hover:-translate-y-1">
            {/* Card decorative pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.03]" 
                 style={{
                   backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v20H1V0zm0 0v2h20V0H1z\' fill=\'%2348A9A6\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                   backgroundSize: '10px 10px'
                 }}>
            </div>
            
            <div className="p-8">
              <div className="h-12 flex items-center">
                <h3 className="font-serif text-xl text-[#254E70]">Enterprise</h3>
              </div>
              
              <div className="mt-4 flex items-baseline">
                <span className="font-serif text-4xl font-light text-[#254E70]">Custom</span>
              </div>
              
              <p className="mt-2 text-[#946B4A] text-sm">
                Tailored solutions for large organizations with complex knowledge management needs.
              </p>
              
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Custom RAG implementation</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Custom headless CMS</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Unlimited documents</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Custom AI development</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-[#48A9A6] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254E70]/80">Dedicated support & training</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/contact?plan=enterprise" 
                  className="w-full block text-center px-6 py-3 bg-[#48A9A6] text-white rounded-sm hover:bg-[#48A9A6]/90 transition-colors font-medium"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-[#254E70]/70 mb-4">Have questions about our pricing or services?</p>
          <Link 
            href="/faq" 
            className="inline-flex items-center text-[#D97C4E] hover:text-[#D97C4E]/80 transition-colors font-medium"
          >
            View our FAQ
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}



