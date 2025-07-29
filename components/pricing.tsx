import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"





const tiers = [
	{
		name: "hobby",
		monthlyPrice: "39",
		monthlyPriceAnnual: "32.50",
		annualPrice: "390",
		monthlyHref: '#',
		annualHref: '#',
		features: [
			'2,000 message credits/month',
			'30 MB per agent',
			'access fast models',
			'embed on unlimited websites',
			'train on your website',
			'unlimited links to train on',
			'train on your documents'
		],
	},
	{
		name: "standard",
		monthlyPrice: "99",
		monthlyPriceAnnual: "82.50",
		annualPrice: "990",
		monthlyHref: '#',
		annualHref: '#',
		features: [
			'8,000 message credits/month',
			'80 MB per agent',
			'access fast models',
			'embed on unlimited websites',
			'train on your website',
			'unlimited links to train on',
			'train on your documents'
		],
	},
	{
		name: "pro",
		monthlyPrice: "199",
		monthlyPriceAnnual: "165.83",
		annualPrice: "1,990",
		monthlyHref: '#',
		annualHref: '#',
		features: [
			'18,000 message credits/month', 
			'160 MB per agent',
			'access fast models',
			'embed on unlimited websites',
			'train on your website',
			'unlimited links to train on',
			'train on your documents'
		],
	}
]




export default function Pricing() {
	return (
		<section className="pt-16 md:pt-20 pb-16 md:pb-32 ">
			<div className="mx-auto max-w-6xl px-6">




				<div className="mx-auto max-w-2xl space-y-6 text-center">
					<h1 className="text-center text-4xl font-semibold lg:text-5xl">
						Predictable Pricing
					</h1>
					<p>
						Designed for your business
					</p>
				</div>




				<Tabs className='mt-8 md:mt-20' defaultValue="yearly">




					<TabsList className="mx-auto max-w-sm bg-slate-100 dark:bg-slate-800 p-1 h-11 rounded-full mb-6">
					
						<TabsTrigger 
							value="monthly" 
							className="flex-1 rounded-full px-6 py-2 text-sm font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white"
						>
							Monthly
						</TabsTrigger>
	
						<TabsTrigger 
							value="yearly" 
							className="flex-1 rounded-full px-6 py-2 text-sm font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white"
						>
							Yearly
						</TabsTrigger>
	
					</TabsList>




					<div className='grid gap-6 md:grid-cols-3'>
						{tiers.map((tiers, index) => (
							<div key={index} className='relative'>


								{tiers.name == "standard" && (
									<span className="absolute inset-x-0 -top-3 z-50 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5
											bg-linear-to-br/increasing 
											from-purple-400 
											to-amber-300 	
										"
									>
										Popular
									</span>
								)}


								<Card className="flex flex-col">


									<CardHeader>
										<CardTitle className="font-medium">
											{tiers.name}
										</CardTitle>
										<span className="my-3 block text-2xl font-semibold">
											<TabsContent value="monthly">
												${tiers.monthlyPrice}
											</TabsContent>
											<TabsContent value="yearly">
												${tiers.monthlyPriceAnnual}
											</TabsContent>
										</span>
										<CardDescription className="text-sm">
											Per month<TabsContent value="yearly" className='inline'>, ${tiers.annualPrice} billed annually</TabsContent>
										</CardDescription>
									</CardHeader>


									<CardContent className="space-y-4">
										<hr className="border-dashed" />

										<ul className="list-outside space-y-3 text-sm">
											{
												tiers.features.map((item, index) => (
													<li
														key={index}
														className="flex items-center gap-2"
													>
														<Check className="size-3" />
														{item}
													</li>
												))
											}
										</ul>
									</CardContent>


									<CardFooter className="mt-auto">

										<TabsContent className='w-full' value="monthly">
											<Link className='' href={tiers.monthlyHref}>
												<Button variant="outline" className={clsx("w-full", {"bg-zinc-900 hover:bg-zinc-900/80 text-white hover:text-white": tiers.name == 'standard'})}>
													Get Started
												</Button>
											</Link>
										</TabsContent>

										<TabsContent className='w-full' value="yearly">
											<Link className='' href={tiers.annualHref}>
												<Button variant="outline" className={clsx("w-full", {"bg-zinc-900 hover:bg-zinc-900/80 text-white hover:text-white": tiers.name == 'standard'})}>	
													Get Started
												</Button>
											</Link>
										</TabsContent>

									</CardFooter>


								</Card>
							</div>
							

						))}
					</div>


				</Tabs>



		
			</div>
		</section>
	)
}
