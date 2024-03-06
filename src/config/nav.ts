import { SidebarLink } from "@/components/SidebarItems";
import { ArrowUpCircle, LayoutDashboard, Library, MessageSquare, Settings } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Dashboard", icon: LayoutDashboard },
  { href: "/playground", title: "Playground", icon: MessageSquare},
  { href: "/library", title: "Library", icon: Library },
  { href: "/account", title: "Profile", icon: ArrowUpCircle },
  { href: "/settings", title: "Settings", icon: Settings },
  
];

export const additionalLinks: AdditionalLinks[] = [];
