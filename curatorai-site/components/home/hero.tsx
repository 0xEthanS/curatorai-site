import Image from "next/image";
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
                <h4 className="font-mono text-[#48A9A6] text-sm tracking-wider mb-3">INTRODUCING</h4>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-[#254E70]">
                  <span className="font-semibold">curator</span>
                  <span className="font-light">AI</span>
                </h1>
                <p className="mt-3 text-lg md:text-xl font-light text-[#946B4A]">Where artifacts meet algorithms</p>
              </div>
              
              <p className="text-lg max-w-lg leading-relaxed">
                Bringing museum collections to life with intelligent retrieval and beautiful, 
                fast interfaces that respect the past while embracing the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/services" 
                  className="px-8 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium inline-flex items-center"
                >
                  Explore Services
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  href="/case-studies" 
                  className="px-8 py-3 border border-[#254E70] text-[#254E70] rounded-sm hover:bg-[#254E70]/5 transition-colors font-medium"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="relative">
              {/* Main visual */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#254E70]/5 border border-[#254E70]/10">
                {/* Left side: Museum artifacts with subtle glow */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 p-6 flex items-center justify-center">
                  <div className="relative w-full h-4/5">
                    <div className="absolute inset-0 bg-[#48A9A6]/10 rounded-sm flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        {/* This would be replaced with your actual image */}
                        <div className="absolute inset-0 bg-[#F2EEE4] rounded-sm border border-[#254E70]/20 shadow-inner"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-[#254E70]/30 font-serif text-xs">
                          Artifact
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side: Digital representation */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 p-6 flex items-center justify-center">
                  <div className="relative w-full h-4/5 font-mono text-sm">
                    <div className="absolute inset-0 bg-[#254E70] rounded-sm flex flex-col p-4 text-[#F2EEE4]/80">
                      <div className="flex items-center space-x-1 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#FE5F55]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D97C4E]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#48A9A6]"></div>
                      </div>
                      <span className="text-[#48A9A6]">const</span> <span className="text-[#F2EEE4]">museum</span> <span className="text-[#D97C4E]">=</span> <span className="text-[#F2EEE4]">&#123;</span>
                      <div className="pl-4">
                        <span className="text-[#F2EEE4]">collection:</span> <span className="text-[#8B9D83]">'artifacts',</span>
                        <br />
                        <span className="text-[#F2EEE4]">type:</span> <span className="text-[#8B9D83]">'historical',</span>
                        <br />
                        <span className="text-[#F2EEE4]">access:</span> <span className="text-[#8B9D83]">'enhanced'</span>
                      </div>
                      <span className="text-[#F2EEE4]">&#125;</span>
                    </div>
                  </div>
                </div>
                
                {/* Connection line between two sides */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-[#48A9A6] to-[#D97C4E]"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F2EEE4] border border-[#D97C4E] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L12 14L16 10" stroke="#D97C4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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
              <h3 className="font-serif text-xl mb-2">RAG Implementation</h3>
              <p className="text-[#254E70]/80">Advanced retrieval for museum collections, making knowledge searchable, discoverable, and accessible.</p>
            </div>
            
            <div className="p-6 border border-[#254E70]/10 rounded-sm bg-white/30 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-sm bg-[#D97C4E]/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#D97C4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">Headless WordPress</h3>
              <p className="text-[#254E70]/80">Lightning-fast websites with improved UX, all while maintaining familiar content management.</p>
            </div>
            
            <div className="p-6 border border-[#254E70]/10 rounded-sm bg-white/30 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-sm bg-[#254E70]/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9M9 3L3 9M8 17H16M12 13V21" stroke="#254E70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">AI Integration</h3>
              <p className="text-[#254E70]/80">Seamless incorporation of AI tools that enhance visitor engagement without compromising authenticity.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }



  