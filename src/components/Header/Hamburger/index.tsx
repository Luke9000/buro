import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from "./styles.module.css";

import clsx from "clsx";
import { Menu } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import links from "../links";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  className: string;
};

const DropdownMenuDemo = ({ className }: Props) => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <button className={styles.IconButton} aria-label="Customise options">
            <Menu />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={cn(styles.Content, "bg-contrast-lower2 mr-5")}
            sideOffset={5}
          >
            {links.map((link) => {
              // const LinkIcon = link.icon;
              return (
                <DropdownMenu.Item key={link.name} className={styles.Item}>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={link.href}
                    className={clsx(styles.navMenu, {
                      [styles.activeLink]: path === link.href,
                    })}
                  >
                    {/* <LinkIcon /> */}
                    <span className={styles.navMenu__text}>
                      {link.name}
                    </span>{" "}
                  </Link>
                </DropdownMenu.Item>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;
