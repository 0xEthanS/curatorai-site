'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/magicui/border-beam'

import AnimatedBeamMultipleOutputs from '@/components/animated-beams-multipe-outputs'




const images = {
	'item-1': {
		image: '/charts.webp',
		alt: 'Database visualization',
	},
	'item-2': {
		image: '/music.webp',
		alt: 'Security authentication',
	},
	'item-3': {
		image: '/mail2.webp',
		alt: 'Identity management',
	},
	'item-4': {
		image: '/payments.webp',
		alt: 'Analytics dashboard',
	},
}




export default function Features() {


	type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'


	const [activeItem, setActiveItem] = useState<ImageKey>('item-1')




	return (
		<section className="py-12 md:py-20 lg:py-32">
			<div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
				<div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-6xl">
						The complete platform for AI Customer Support Agents
					</h2>
					<p>
						Curator AI is designed for building AI Support Agents that solve your customers 
						hardest problems while improving business outcomes.
					</p>
				</div>

				<div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">




					<Accordion
						type="single"
						value={activeItem}
						onValueChange={(value) => setActiveItem(value as ImageKey)}
						className="w-full"
					>


						<AccordionItem value="item-1">
							<AccordionTrigger>
								<div className="flex items-center gap-2 text-base">
									<Database className="size-4" />
									Purpose-built for LLMs
								</div>
							</AccordionTrigger>
							<AccordionContent>
								Language models with reasoning capabilities for effective responses to 
								complex queries.
							</AccordionContent>
						</AccordionItem>


						<AccordionItem value="item-4">
							<AccordionTrigger>
								<div className="flex items-center gap-2 text-base">
									<ChartBarIncreasingIcon className="size-4" />
									Connect with Customers
								</div>
							</AccordionTrigger>
							<AccordionContent>
								Talk to potential customers, help them resolve problems and understand your 
								product to increase your conversions.
							</AccordionContent>
						</AccordionItem>


						<AccordionItem value="item-3">
							<AccordionTrigger>
								<div className="flex items-center gap-2 text-base">
									<IdCard className="size-4" />
									Simplicity
								</div>
							</AccordionTrigger>
							<AccordionContent>
								We designed the the platform for simplicity allowing you to easily 
								upload your documents and customize with your own branding.
							</AccordionContent>
						</AccordionItem>


						<AccordionItem value="item-2">
							<AccordionTrigger>
								<div className="flex items-center gap-2 text-base">
									<Fingerprint className="size-4" />
									Security
								</div>
							</AccordionTrigger>
							<AccordionContent>
								We do not share any of your data with 3rd parties and store it securely
							</AccordionContent>
						</AccordionItem>


					</Accordion>




					<div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">

						
						
						
						<div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>




						<div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">



							<AnimatedBeamMultipleOutputs />

			

						</div>



						{/* Border Beams
						<BorderBeam
							duration={6}
							size={200}
							className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
						/>
						*/}




					</div>




				</div>
			</div>
		</section>
	)
}
