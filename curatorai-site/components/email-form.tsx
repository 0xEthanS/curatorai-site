'use client'

import { getEmailFormData } from "@/lib/actions";




export function EmailForm() {
    return(
        <div>
            <form 
                className="flex flex-col gap-3"
                action={getEmailFormData}
            >
                <input 
                    className="w-full px-4 py-2 bg-[#F2EEE4] border border-[#254E70]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#48A9A6] focus:border-transparent"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                />
                <button 
                    className="px-4 py-2 bg-[#48A9A6] text-white rounded-sm hover:bg-[#48A9A6]/90 transition-colors"
                    type="submit"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}



