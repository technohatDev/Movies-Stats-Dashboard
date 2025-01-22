import { ChartNoAxesCombined, Clapperboard } from "lucide-react";
import { NavLink } from "react-router";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/components/ui/Sidebar";

export const AppSidebar = () => {
	const items = [
		{
			title: "Movies",
			url: "/",
			icon: Clapperboard
		},
		{
			title: "Statistics",
			url: "/statistics",
			icon: ChartNoAxesCombined
		}
	];

	return (
		<div className="dark">
			<Sidebar collapsible="icon">
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											tooltip={item.title}>
											<NavLink to={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</NavLink>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</div>
	);
};
