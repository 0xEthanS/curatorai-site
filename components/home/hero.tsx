import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button';
import { Chatbot } from '@/components/chat/chatwindow';




const features = [
	{
		name: 'Push to deploy.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates.',
		description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon,
	},
	{
		name: 'Database backups.',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: ServerIcon,
	},
]




export default function Hero() {
	return (
		<div className="overflow-hidden py-24 sm:py-10 
				bg-white
			"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8 

				"
			>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 
			
					"
				>
					
					
					

					<div className="lg:pt-4 lg:pr-8 lg:content-center">
						<div className="lg:max-w-lg">
							<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-zinf-900 sm:text-5xl">
								AI Customer Service for Great Customer Experiences!
							</p>
							<p className="mt-6 text-lg/8 text-zinc-600">
								Curator AI is the complete platform for creating and building AI Customer Support Agents for your business.
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-zinc-600 lg:max-w-none">
								<div className='max-w-fit max-h-fit rounded-md 
										bg-linear-to-br/increasing 
										from-purple-400 
										to-amber-300 
									'
								>
									<Button className='mb-2
											text-lg
										'
									>
										Build Your Agent
									</Button>
								</div>
							</dl>
						</div>
					</div>


					<div className='max-w-fit max-h-fit rounded-xl 

							bg-linear-to-br/increasing 
							from-purple-400 
							to-amber-300 

							p-6
						'
					>
						<Chatbot />
					</div>



					{/*
					<img
						alt="Product screenshot"
						src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
						width={2432}
						height={1442}
						className="
							w-3xl 
							max-w-none 
							rounded-3xl 
							shadow-xl 
							ring-1 
							ring-gray-400/10 
							sm:w-228 
							md:-ml-4 
							lg:-ml-0

							bg-cyan-300
						"
					/>
					*/}




				</div>
			</div>
		</div>
	)
}
