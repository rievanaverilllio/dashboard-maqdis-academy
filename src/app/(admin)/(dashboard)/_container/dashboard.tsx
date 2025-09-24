import { AppSidebar } from "@/components/layout/admin/app-sidebar"
import { ChartAreaInteractive } from "@/components/layout/admin/chart-area-interactive"
import { DataTable } from "@/components/layout/admin/data-table"
import { SectionCards } from "@/components/layout/admin/section-cards"
import { Card, CardHeader, CardDescription, CardTitle, CardAction, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconTrendingUp, IconClock } from "@tabler/icons-react"
import { SiteHeader } from "@/components/layout/admin/site-header"
import {
	SidebarInset,
	SidebarProvider,
} from "@/components/ui/sidebar"

import data from "../data.json"

export default function Dashboard() {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}
		>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<SectionCards />
							<div className="px-4 lg:px-6">
								<div className="grid md:grid-cols-3 gap-4 md:gap-6 items-stretch">
									<div className="md:col-span-2 flex flex-col">
										<ChartAreaInteractive />
									</div>
									<div className="flex flex-col gap-4 md:gap-6 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs h-full">
										<Card className="@container/card flex-1 flex" data-slot="card">
											<CardHeader className="flex-1">
												<CardDescription>User Hamim baru dalam 7 hari terakhir</CardDescription>
												<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">128</CardTitle>
												<CardAction>
													<Badge variant="outline" className="gap-1">
														<IconTrendingUp className="size-4" />
														+12%
													</Badge>
												</CardAction>
											</CardHeader>
											<CardFooter className="flex-col items-start gap-1.5 text-sm">
												<div className="line-clamp-1 font-medium flex gap-2">
													Pertambahan vs minggu lalu <IconTrendingUp className="size-4" />
												</div>
											</CardFooter>
										</Card>
										<Card className="@container/card flex-1 flex" data-slot="card">
											<CardHeader className="flex-1">
												<CardDescription>User Hamim sedang aktif</CardDescription>
												<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">42</CardTitle>
												<CardAction>
													<Badge variant="outline" className="gap-1">
														<IconClock className="size-4" />
														Aktif
													</Badge>
												</CardAction>
											</CardHeader>
											<CardFooter className="flex-col items-start gap-1.5 text-sm">
												<div className="line-clamp-1 font-medium flex gap-2">
													Aktivitas terkini <IconClock className="size-4" />
												</div>
											</CardFooter>
										</Card>
									</div>
								</div>
							</div>
							<DataTable data={data} />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
