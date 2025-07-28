"use client"

import * as React from "react"
import Link from "next/link"
import {
	IconChartBar,
	IconDashboard,
	IconDatabase,
	IconFileWord,
	IconFolder,
	IconInnerShadowTop,
	IconListDetails,
	IconReport,
	IconChevronDown
} from "@tabler/icons-react"

import { NavSettings } from "@/components/dashboard/nav-settings"
import { NavMain } from "@/components/dashboard/nav-main"
import { NavUser } from "@/components/dashboard/nav-user"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarGroup,
	SidebarGroupLabel, 
	SidebarGroupContent
} from "@/components/ui/sidebar"




const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Files",
			url: "/dashboard/agents/files",
			icon: IconDashboard,
		},
		{
			title: "Text",
			url: "/dashboard/agents/text",
			icon: IconListDetails,
		},
		{
			title: "Website",
			url: "/dashboard/agents/website",
			icon: IconChartBar,
		},
		{
			title: "Q&A",
			url: "/dashboard/agents/q-and-a",
			icon: IconFolder,
		},
	],
	settings: [
		{
			name: "General",
			url: "/dashboard/settings/general",
			icon: IconDatabase,
		},
		{
			name: "Plans",
			url: "/dashboard/settings/plans",
			icon: IconReport,
		},
		{
			name: "Billing",
			url: "/dashboard/settings/billing",
			icon: IconFileWord,
		},
	],
}




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>




			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>


							<Link href="/">
								<IconInnerShadowTop className="!size-5" />
								<span className="text-base font-semibold">
									Curator AI
								</span>
							</Link>


						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>




			<SidebarContent>


				<NavMain items={data.navMain} />


				<NavSettings items={data.settings} />


			</SidebarContent>




			<SidebarFooter>


				<NavUser user={data.user} />

				
			</SidebarFooter>




		</Sidebar>
	)
}



