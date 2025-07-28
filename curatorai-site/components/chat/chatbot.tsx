import { 
    ArrowRightIcon, 
    MinusIcon,
	ArrowPathIcon
} from "@heroicons/react/24/outline";
import ReactMarkdown from 'react-markdown';
import { 
	CrumpledPaperIcon
} from '@radix-ui/react-icons'
//import clsx from 'clsx';




const initalMessageArray = [
    { 
        id: 1,
        content: "Hi! 👋 I'm your AI assistant demo. I can help answer questions about pricing, features, and how our chatbots can reduce your support costs by up to 80%. What would you like to know?" 
    }
] 


const promptData = [
    {
        name: "What payment methods do you accept?", 
    },
    {
        name: "What are your business hours?", 
    },
    { 
        name: "Can I schedule a consultation?", 
    },
    { 
        name: "Can I schedule a consultation?", 
    }
]


const messages = [
    {
        role: "user",
        content: "How quickly can you respond to customers?"
    },
    {
        role: "assistant",
        content: "I respond instantly, 24/7! No more customers waiting 5+ minutes for support. Our chatbots handle 80% of common questions immediately, and seamlessly transfer complex issues to your team with full context. Want to see how this could reduce your response times?"
    },
    {
        role: "user",
        content: "What about setup time?"
    },
    {
        role: "assistant",
        content: "Most businesses are live within 48 hours! Our team handles the technical setup while you focus on customizing responses for your specific business. No coding required on your end. Would you like to see our implementation timeline?"
    }
]


const colors = {
    header: { 
        bg: "bg-white", 
        text: "text-slate-900", 
        border: "border-slate-900" 
    },
    chatMessages: { 
        userBg: "bg-white", 
        userText: "text-slate-900", 
        userBorder: "border-slate-900", 

        aiBg: "bg-slate-200", 
        aiText: "text-slate-900", 
        aiBorder: "border-slate-900" 
    },
    carousel: { 
        text: "text-slate-600", 
        border: "border-slate-600" 
    },
}






export function Chatbot() {
    return (
        <div className="font-sans antialiased">


			{/* Chat Toggle & Window Placement */}
            <div className="shadow-lg border rounded-lg w-full max-w-[calc(100%-2rem)] sm:max-w-[400px] border-slate-950">


                <div className="rounded-lg flex flex-col max-h-[calc(100vh-36px)] bg-white">




                    {/* Header */}
                    <div className={`h-12 content-center border-b ${colors?.header?.border || "border-slate-900"} ${colors?.header?.bg || "bg-white"} rounded-tl-lg rounded-tr-lg mb-1 flex items-center justify-between px-4`}>
                        
                        {/* Logo */}
                        <div className="h-6 w-6 flex items-center justify-center ml-auto">
                            <CrumpledPaperIcon className="h-6 w-6"/>
                        </div>
                        


                        <div className={`flex-grow text-left ml-4 font-semibold ${colors?.header?.text || "text-slate-900"}`}>
                            Let's Chat
                        </div>
                        <button type="button" className="h-6 w-6 mr-4 flex items-center justify-center ml-auto">
                            <ArrowPathIcon className="h-6 w-6 text-slate-900"/>
                        </button>
                        <button type="button" className="h-6 w-6 flex items-center justify-center ml-auto">
                            <MinusIcon className="text-slate-900 h-6 w-6"/>
                        </button>
                    </div>
                    {/* Message Chat UI */}
                    <div className="px-4 flex-1overflow-y-auto">
                        <div className={`h-96 overflow-y-auto max-h-[calc(100vh-120px)]`}>




                            {/* Initial Message */}
                            {initalMessageArray.map((item, index) => (
                                item.content.length > 0 && (
                                    <div key={item.id} className={`flex flex-col text-[14px] items-start ${initalMessageArray.length === 1 ? "mb-4" : initalMessageArray.length === 2 && index === 0 ? "mb-[1px]" : initalMessageArray.length === 2 && index === 1 ? "mb-4" : initalMessageArray.length > 2 && index === 0 ? "mb-[1px]" : index < initalMessageArray.length - 1 ? "mb-[1px]" : index === initalMessageArray.length - 1 ? "mb-4" : "" }`}>
                                        <div className={`pl-[15px] pr-[15px] max-w-[75%] border rounded-tl-lg rounded-tr-lg rounded-br-lg pt-2.5 pb-2.5 mb-1 ${colors.chatMessages.aiBg} ${colors.chatMessages.aiText} ${colors.chatMessages.aiBorder}`}>
                                            {item.content}
                                        </div>
                                    </div>
                                )
                            ))}




                            {/* Chat */}
                            {messages.map((i, index) => (
                                i.content.length > 0 && (
                                    <div key={index} className={`flex flex-col mb-4 text-[14px] ${i.role === 'user' ? 'items-end' : i.role === 'assistant' ? 'items-start' : ''}`}>
                                        <div className={`pl-[15px] pr-[15px] pt-2.5 pb-2.5 max-w-[75%] border mb-1 rounded-tl-lg rounded-tr-lg ${i.role === 'user' ? `${colors?.chatMessages?.userBg || "bg-white"} ${colors?.chatMessages?.userText || "text-slate-900"} ${colors?.chatMessages?.userBorder || "border-slate-900"} items-end rounded-bl-lg` : `${colors?.chatMessages?.aiBg || "bg-slate-200"} ${colors?.chatMessages?.aiText || "text-slate-900"} ${colors?.chatMessages?.aiBorder || "border-slate-900"} rounded-br-lg`}`}>
                                            <ReactMarkdown>
                                                {i.content}
                                            </ReactMarkdown>	
                                        </div>


                                        {/*
                                        <p className="text-slate-400 text-[10px]">
                                            {i.createdAt.toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit'})}
                                        </p>
                                        */}


                                    </div>
                                )
                            ))}




                        </div>

                    </div>
                    {/* Carousel */}
                    <div className={`w-full inline-flex flex-nowrap pt-2 pb-1 px-4 overflow-x-auto scrollbar-hide space-x-2 bg-white`}>
                        {promptData.map((i, index) => (
                            <div key={index} className="h-[30px] max-h-[30px] flex-shrink-0">
                                <form>
                                    <input name="prompt" type="hidden" />
                                    <button type="submit" className={`flex justify-center items-center border rounded-lg text-xs bg-white ${colors?.carousel?.text || "text-slate-600"} ${colors?.carousel?.border || "border-slate-600"} hover:bg-slate-100 pl-2.5 pr-2.5 pt-1 pb-1 whitespace-nowrap text-ellipsis line-height-[18px]`}>
                                        {i.name}
                                    </button>
                                </form>
                            </div>
                        ))}
                    </div>
                    {/* Submission Form */}
                    <div className="pb-4 pr-4 pl-4 border-t rounded-br-lg rounded-bl-lg bg-white border-slate-900">
                        <form className="mt-4 flex gap-2">
                            <input type="text" placeholder="Type your message..." className="flex flex-1 h-10 w-full border-b px-3 py-2 mr-2 ml-2 text-sm bg-white text-slate-950 border-slate-900 placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"/>
                            <button type="submit" className="rounded-lg inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background">
                                <ArrowRightIcon className="h-6 w-6 text-slate-900"/>
                            </button>
                        </form>
                    </div>




                </div>
            </div>
        </div>
    );





}



