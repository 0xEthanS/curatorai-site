import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from '@/components/ui/accordion'
import Link from 'next/link'




const faqItems = [
    {
        id: 'item-1',
        question: 'How do you collect my information for my chatbot?',
        answer: 'We have a few methods available. Pur robots can read your website, read documents you give us, or you can write custom instructions for interacting with your customers',
    },
    {
        id: 'item-2',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.',
    },
    {
        id: 'item-3',
        question: 'Can I change or cancel my plan?',
        answer: 'You can modify or cancel your plan at any time. Changes will take effect for the next billing period. Before this window, please contact our customer support team who will assist you with any changes.',
    },
    {
        id: 'item-4',
        question: 'How does CuratorAI Work?',
        answer: "We are an all inclusive platform that allows you to build customer support agents with your website visitors to increase conversions and generate leads.",
    },
    {
        id: 'item-5',
        question: 'Can someone assist me with setup?',
        answer: 'Yes, simply send us an email at hello@curatorai.dev requesting help with setup, and we will get back to you promptly with assistance',
    },
]




export default function FAQ() {




    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">


                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>


                    <p className="text-muted-foreground mt-4 text-balance">
                        Discover quick and comprehensive answers to common questions about our platform, 
                        services, and features.
                    </p>


                </div>

                <div className="mx-auto mt-12 max-w-xl">




                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
                    >
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed"
                            >
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>




                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline"
                        >
                            customer support team
                        </Link>
                    </p>




                </div>
            </div>
        </section>
    )
}
