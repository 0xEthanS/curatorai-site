"use client"

import Link from "next/link"
import {
	type Icon,
} from "@tabler/icons-react"

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar"




export function NavSettings({
	items,
}: {
	items: {
		name: string
		url: string
		icon: Icon
	}[]
}) {




	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">


			<SidebarGroupLabel>
				Settings
			</SidebarGroupLabel>


			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.name}>
					

							<SidebarMenuButton asChild>
								<a href={item.url}>
									<item.icon />
									<span>
										{item.name}
									</span>
								</a>
							</SidebarMenuButton>


						
					</SidebarMenuItem>
				))}
			</SidebarMenu>


		</SidebarGroup>
	)
}



