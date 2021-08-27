// import icons
import {
  BookmarkAltIcon,
  CalendarIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  ChartBarIcon,
  CogIcon,
  FilterIcon,
  FolderIcon,
  MailIcon,
  MenuIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/outline";
// Data Array
export const dataMap = [
  { country: "us", value: 3 },
  { country: "ca", value: 2.9 },
  { country: "au", value: 2.8 },
  { country: "gb", value: 2.7 },
  { country: "ie", value: 2.27 },
  { country: "in", value: 2.6 },
  { country: "nz", value: 2.28 },
];

export const itemProducts = [
  {
    id: 1,
    title: "Anyara",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio similique, blanditiis modi explicabo incidunt ducimus eos totam! Porro in, autem repellat quidem magnam unde. Placeat iusto modi id voluptas",
    page: "/sign",
  },
  {
    id: 2,
    title: "Mariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio similique, blanditiis modi explicabo incidunt ducimus eos totam! Porro in, autem repellat quidem magnam unde. Placeat iusto modi id voluptas",
    page: "/",
  },
  {
    id: 3,
    title: "Laniakea",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio similique, blanditiis modi explicabo incidunt ducimus eos totam! Porro in, autem repellat quidem magnam unde. Placeat iusto modi id voluptas",
    page: "/",
  },
  {
    id: 4,
    title: "ADA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio similique, blanditiis modi explicabo incidunt ducimus eos totam! Porro in, autem repellat quidem magnam unde. Placeat iusto modi id voluptas",
    page: "/",
  },
];
export const navProducts = [
  {
    name: "Anyara",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa",
    href: "/anyara",
    icon: ViewGridIcon,
  },
  {
    name: "Mariana",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in!",
    href: "/",
    icon: ViewGridIcon,
  },
  {
    name: "Laniakea",
    description: "Lorem ipsum dolor sit amet consectetur ",
    href: "/",
    icon: ViewGridIcon,
  },
  {
    name: "ADA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in!",
    href: "/",
    icon: ViewGridIcon,
  },
];
export const navResources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "/",
    icon: ShieldCheckIcon,
  },
];
export const recentPosts = [
  { id: 1, name: "Lorem ipsum dolor sit amet", href: "/" },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/",
  },
  { id: 3, name: "Lorem ipsum dolor sit amet consectetur ", href: "/" },
];
export const sidebarItems = [
  { id: 1, name: "Dashboard", icon: MenuIcon },
  { id: 2, name: "Accoount", icon: UsersIcon },
  { id: 3, name: "Shopping Cart", icon: ShoppingCartIcon },
  { id: 4, name: "Statistics", icon: ChartBarIcon },
  { id: 5, name: "Folders", icon: FolderIcon },
  { id: 6, name: "Messages", icon: MailIcon },
  { id: 7, name: "Filter", icon: FilterIcon },
  { id: 8, name: "Support", icon: SupportIcon },
  { id: 9, name: "Settings", icon: CogIcon },
];
