import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
  <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 md:grid-cols-3 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Users</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            12,345
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +3.4%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Pengguna aktif bulan ini <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Total pengguna terdaftar</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Kode Aktivasi</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            8,765
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -8%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Kode terkirim hari ini <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Perlu verifikasi manual</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Pendapatan / Tahun</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
            Rp 18.234.567
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +9.1%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Pendapatan naik tahunan <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Ringkasan pendapatan tahun berjalan</div>
        </CardFooter>
      </Card>
    </div>
  )
}
