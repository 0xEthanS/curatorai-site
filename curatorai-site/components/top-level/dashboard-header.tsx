'use client'

import { useState } from 'react'
import Link from 'next/link';
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from '@headlessui/react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"


import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/ui/button';










const resources = [
	{ 
		name: 'Headless Wordpress', 
		description: 'Learn about our Headless Wordpress Solution', 
		href: '/wordpress', 
		icon: ChartPieIcon 
	},
	{ 
		name: 'About', 
		description: 'Learn about our products', 
		href: '/about', 
		icon: CursorArrowRaysIcon 
	},
	{ 
		name: 'Contact', 
		description: 'Your customers’ data will be safe and secure', 
		href: '/contact', 
		icon: FingerPrintIcon 
	},
]


const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }
}







export default function DashboardHeader() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="
				border-b
				border-zinc-500
			"
		>
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">


				{/* Logo */}
				<div className="flex lg:flex-1">
					<Link href="/" className="flex items-center space-x-2 z-10">
						<div className="w-8 h-8 rounded-sm bg-[#D97C4E] flex items-center justify-center overflow-hidden relative">
							<div className="absolute inset-0 bg-gradient-to-br from-[#D97C4E] to-[#946B4A]"></div>
							<span className="relative text-white font-serif text-lg">c</span>
						</div>
					</Link>
				</div>

				



				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<a href="#" className="text-sm/6 font-semibold text-zinc-900">
						Agents
					</a>
					<a href="#" className="text-sm/6 font-semibold text-zinc-900">
						Usage
					</a>
					<a href="#" className="text-sm/6 font-semibold text-zinc-900">
						Settings
					</a>
				</PopoverGroup>





				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
					>
						<span className="sr-only">
							Open main menu
						</span>
						<Bars3Icon aria-hidden="true" className="size-6" />
					</button>
				</div>








				<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-4">


					<DropdownMenu>


						<DropdownMenuTrigger>
							<Avatar>

								<AvatarImage src="https://github.com/shadcn.png" />

								<AvatarFallback>
									CN
								</AvatarFallback>

							</Avatar>
						</DropdownMenuTrigger>


						<DropdownMenuContent className='mr-8'>

							<DropdownMenuLabel>
								email@example.com
							</DropdownMenuLabel>

							<DropdownMenuSeparator />

							<DropdownMenuItem>
								Dashboard
							</DropdownMenuItem>

							<DropdownMenuItem>
								Account Settings
							</DropdownMenuItem>

							<DropdownMenuSeparator />

							<DropdownMenuItem>
								Sign Out
							</DropdownMenuItem>

						</DropdownMenuContent>


					</DropdownMenu>


				</div>








			</nav>




			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="flex items-center space-x-2 z-10">
							<div className="w-8 h-8 rounded-sm bg-[#D97C4E] flex items-center justify-center overflow-hidden relative">
								<div className="absolute inset-0 bg-gradient-to-br from-[#D97C4E] to-[#946B4A]"></div>
								<span className="relative text-white font-serif text-lg">c</span>
							</div>
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-zinc-700"
						>
							<span className="sr-only">
								Close menu
							</span>
							<XMarkIcon aria-hidden="true" className="size-6" />
						</button>
					</div>


					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-zinc-500/10">


							<div className="space-y-2 py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-gray-50"
								>
									Agents
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-gray-50"
								>
									Usage
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-gray-50"
								>
									Settings
								</a>
							</div>


							<div className="space-y-2 py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-gray-50"
								>
									Dashboard
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-gray-50"
								>
									Acount Settings
								</a>
							</div>


							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50"
								>
									Sign out
								</a>
							</div>


						</div>
					</div>


				</DialogPanel>
			</Dialog>








		</header>
	)
}


