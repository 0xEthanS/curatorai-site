'use client';

import { getSmallFormData } from "@/lib/actions";




export default function SmallForm() {
    return(
        <div>
            <form className="space-y-6"
                action={getSmallFormData}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>

                        <label className="block text-[#254E70] text-sm font-medium mb-2" htmlFor="name">
                            Your Name
                        </label>

                        <input className="w-full px-4 py-3 bg-white border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                            
                            type="text"
                            id="name"
                            name="name"
                            required

                            placeholder="Jane Smith"
                        />

                    </div>

                    <div>

                        <label className="block text-[#254E70] text-sm font-medium mb-2" htmlFor="email">
                            Email Address
                        </label>

                        <input className="w-full px-4 py-3 bg-white border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                            type="email"
                            id="email"
                            name="email"
                            required

                            placeholder="jane@example.com"
                        />

                    </div>
                </div>


                <div>
                    
                    <label className="block text-[#254E70] text-sm font-medium mb-2" htmlFor="institution">
                        Institution
                    </label>
                    
                    <input className="w-full px-4 py-3 bg-white border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                        type="text"
                        id="institution"
                        name="institution"

                        placeholder="Museum or Organization Name"
                    />

                </div>


                <div>

                    <label className="block text-[#254E70] text-sm font-medium mb-2" htmlFor="message">
                        Your Message
                    </label>

                    <textarea className="w-full px-4 py-3 bg-white border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                        id="message"
                        rows={4}
                        name="message"

                        placeholder="Tell us about your institution and project needs..."
                    ></textarea>

                </div>


                <div className="pt-2">
                    <button className="w-full px-6 py-3 bg-[#D97C4E] text-white rounded-sm hover:bg-[#D97C4E]/90 transition-colors font-medium"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>


            </form>
        </div>
    );
}





