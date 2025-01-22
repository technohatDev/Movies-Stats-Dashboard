import { Outlet } from "react-router";

import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/Sidebar";

export const MainLayout = () => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full">
				<div className="flex w-full items-center gap-1 bg-white p-3 shadow-sm">
					<SidebarTrigger />
					<span className="text-lg font-semibold">Movies</span>
				</div>
				<Outlet />
			</main>
		</SidebarProvider>
	);
};
