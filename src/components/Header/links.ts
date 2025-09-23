// import {
//   BookCopy,
//   IdCard,
//   LucideIcon
// } from "lucide-react";

// import { ComponentType, SVGProps } from "react";

type NavLink = {
  name: string;
  href: string;
  // icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
};

// const links: NavLink[] = [
//   {
//     name: "ПРЕПОДАВАТЕЛИ",
//     href: "/teachers",
//     icon: IdCard,
//   },
//   {
//     name: "РАБОТЫ СТУДЕНТОВ",
//     href: "/works",
//     icon: BookCopy,
//   },
//   {
//     name: "РАСПИСАНИЕ",
//     href: "/shedule",
//     icon: CalendarDays,
//   },
//   {
//     name: "ЗАЩИТА",
//     href: "/thesis",
//     icon: GraduationCap,
//   },
// ];

const links: NavLink[] = [
  // {
  //   name: "ПРОЕКТЫ",
  //   href: "/projects",

  // },
  {
    name: "О КОМПАНИИ",
    href: "/#about",
  
  },
  {
    name: "КОНТАКТЫ",
    href: "/contacts",
  
  },
];

export default links;
