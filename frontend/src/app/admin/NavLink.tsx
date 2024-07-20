import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon: ReactNode;
}

const NavLink = ({ href, children, icon }: NavLinkProps) => {
  const pathname = usePathname();
  
  const isActive = 
    href === '/admin' 
      ? pathname === '/admin' 
      : pathname.startsWith(href) && href !== '/admin';
  
  const baseClasses = "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary";
  const activeClasses = "bg-muted text-primary";
  const inactiveClasses = "text-muted-foreground";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      {children}
    </Link>
  );
};

export default NavLink;