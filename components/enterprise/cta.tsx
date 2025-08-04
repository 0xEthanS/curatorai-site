import { Button } from '@/components/ui/button'
import Link from 'next/link'




export default function CTA() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Start Building
                    </h2>
                    <p className="mt-4">
                        Get in touch with us to start building your AI solution.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">


                        <Button
                            asChild
                            size="lg">
                            <Link href="/contact">
                                <span>
                                    Contact Us
                                </span>
                            </Link>
                        </Button>


                        {/*
                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <a href="/">
                                <span>
                                    Book Consult
                                </span>
                            </a>
                        </Button>
                        */}


                    </div>
                </div>
            </div>
        </section>
    )
}



