"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ProductDrawer } from "./product-drawer";
import { Button } from "@/components/ui/button";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center ", className)} {...props}>
      <Link href="/product" className="text-sm font-medium transition-colors">
        <Button>Criar novo produto</Button>
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium text-muted-foreground transition-colors"
      >
        <Button>Lista de produtos</Button>
      </Link>
      <ProductDrawer />
    </nav>
  );
}
