'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';

import logo from '../../public/EFP3.svg';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const serviceLinks = [
  { href: '/servicios/sesion-fotografico', label: 'Sesión Fotográfica' },
  { href: '/servicios/impresiones', label: 'Impresiones' },
  { href: '/servicios/cuadros', label: 'Cuadros' },
  { href: '/servicios/diseno-grafico', label: 'Diseño Gráfico' },
];

const navLinks = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/promociones', label: 'Promociones' },
  { href: '/contacto', label: 'Contáctanos' },
];

const navLinkClass =
  'font-sans text-[0.8rem] font-medium tracking-[0.12em] uppercase text-foreground/70 transition-colors hover:text-foreground data-active:text-foreground';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isServiceRoute = serviceLinks.some((s) => s.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Estudio Fotográfico Pérez"
            width={38}
            style={{ height: 'auto' }}
            priority
          />
          <span className="hidden font-display text-xl tracking-wide text-foreground sm:block">
            Estudio Fotográfico Pérez
          </span>
        </Link>

        <div className="hidden items-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/" />}
                  data-active={pathname === '/' || undefined}
                  className={cn(navLinkClass, 'bg-transparent hover:bg-transparent focus:bg-transparent')}
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  data-active={isServiceRoute || undefined}
                  className={cn(navLinkClass, 'bg-transparent hover:bg-transparent focus:bg-transparent')}
                >
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-60 gap-1 p-2">
                    {serviceLinks.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink
                          render={<Link href={service.href} />}
                          data-active={pathname === service.href || undefined}
                          className="font-sans text-sm text-foreground/80"
                        >
                          {service.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    render={<Link href={link.href} />}
                    data-active={pathname === link.href || undefined}
                    className={cn(navLinkClass, 'bg-transparent hover:bg-transparent focus:bg-transparent')}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Abrir menú" />}>
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-bone sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-display text-lg">Estudio Fotográfico Pérez</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pb-8">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-2 py-2.5 text-sm uppercase tracking-wider text-foreground/80',
                    pathname === '/' && 'text-foreground'
                  )}
                >
                  Inicio
                </Link>

                <p className="mt-4 mb-1 px-2 text-xs tracking-widest text-muted-foreground uppercase">
                  Servicios
                </p>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md px-2 py-2.5 text-sm uppercase tracking-wider text-foreground/80',
                      pathname === service.href && 'text-foreground'
                    )}
                  >
                    {service.label}
                  </Link>
                ))}

                <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md px-2 py-2.5 text-sm uppercase tracking-wider text-foreground/80',
                        pathname === link.href && 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
