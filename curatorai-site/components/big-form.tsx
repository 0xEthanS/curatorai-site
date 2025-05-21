'use client'

import { getBigFormData } from "@/lib/actions";


 

export function BigForm() {
    return(
        <div>
            <form 
                className="p-8"
                action={getBigFormData}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="firstName" className="block text-[#254E70] text-sm font-medium mb-2">
                            First Name
                            <span className="text-[#D97C4E]"
                            > *</span>
                        </label>


                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                            placeholder="Jane"
                            required
                        />


                    </div>
                    
                    <div>
                        <label htmlFor="lastName" className="block text-[#254E70] text-sm font-medium mb-2">
                            Last Name
                        </label>


                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                            placeholder="Smith"
                            
                        />


                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="email" className="block text-[#254E70] text-sm font-medium mb-2">
                            Email Address 
                            <span className="text-[#D97C4E]"
                            > *</span>
                        </label>


                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            name="phone"
                            className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                            placeholder="(555) 123-4567"
                        />


                    </div>
                </div>
                
                <div className="mb-6">
                    <label htmlFor="institution" className="block text-[#254E70] text-sm font-medium mb-2">
                        Institution Name
                    </label>


                    <input
                        type="text"
                        id="institution"
                        name="institution"
                        className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                        placeholder="Museum or Organization Name"
                    />


                </div>
                
                <div className="mb-6">
                    <label htmlFor="jobTitle" className="block text-[#254E70] text-sm font-medium mb-2">
                        Your Role
                    </label>


                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                        placeholder="Director, Curator, Digital Manager, etc."
                    />


                </div>
                
                <div className="mb-6">
                    <label htmlFor="interest" className="block text-[#254E70] text-sm font-medium mb-2">
                        I'm Interested In
                    </label>




                    <select
                        id="interest"
                        name="interest"
                        className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                    
                        defaultValue=""
                    >


                        <option 
                            value=""  
                            disabled
                            defaultValue={"true"}
                        >
                            Please select...
                        </option>


                        <option 
                            value="rag"
                        >
                            RAG Implementation
                        </option>

                        <option 
                            value="headless"
                        >
                            Headless WordPress
                        </option>

                        <option 
                            value="both"
                        >
                            Both Services
                        </option>

                        <option 
                            value="consultation"
                        >
                            General Consultation
                        </option>

                        <option 
                            value="other"
                        >
                            Other
                        </option>

                        
                    </select>




                </div>
                
                <div className="mb-6">
                    <label 
                        htmlFor="message" 
                        className="block text-[#254E70] text-sm font-medium mb-2">
                        Message
                      
                    </label>


                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-4 py-3 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                        placeholder="Tell us about your project needs, goals, or questions..."
                        rows={6}
                   
                    ></textarea>


                </div>
                

                {/*
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
                                I agree to the
                                <a 
                                    href="/privacy" 
                                    className="text-[#48A9A6] hover:underline"
                                > Privacy Policy </a>
                                and consent to being contacted regarding my inquiry.
                            </label>
                        </div>
                    </div>
                </div>
                */}
                


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
    );
}






