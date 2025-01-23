import { Outlet } from "react-router";

import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/Sidebar";

export const MainLayout = () => {
	return (
		<SidebarProvider>
			<AppSidebar />
			{/* TopBar */}
			<main className="flex w-full flex-col">
				<div className="flex w-full items-center gap-1 bg-white p-3 shadow-sm">
					<SidebarTrigger />
					<span className="text-lg font-semibold">Movies</span>
				</div>

				{/* Pages Content */}
				<div className="flex-grow p-5">
					<Outlet />
				</div>
			</main>
		</SidebarProvider>
	);
};
