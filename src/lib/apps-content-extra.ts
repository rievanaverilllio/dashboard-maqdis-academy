import {
  IconBook2,
  IconChalkboard,
  IconUser,
  IconKey,
  IconHelpCircle,
  IconDeviceMobileCog,
  IconSettings,
  IconCoin,
  IconCrown,
  IconFlagCheck
} from "@tabler/icons-react"

export interface ExtraAppsContentItem {
  name: string
  url: string
  icon: React.ComponentType<any>
}

export const extraAppsContentItems: ExtraAppsContentItem[] = [
  { name: "Juz", url: "#", icon: IconBook2 },
  { name: "E-Course", url: "#", icon: IconChalkboard },
  { name: "User", url: "#", icon: IconUser },
  { name: "Kode Aktivasi", url: "#", icon: IconKey },
  { name: "Troubleshoot", url: "#", icon: IconHelpCircle },
  { name: "Version App", url: "#", icon: IconDeviceMobileCog },
  { name: "Kelola Akun", url: "#", icon: IconSettings },
  { name: "Unked", url: "#", icon: IconCoin },
  { name: "Royalty", url: "#", icon: IconCrown },
  { name: "Chalenge", url: "#", icon: IconFlagCheck },
]
