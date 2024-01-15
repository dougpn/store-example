import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cartAtom } from "@/hooks/atoms";
import { useAtom } from "jotai";


export function ProductDrawer() {
  const [cart, setCart] = useAtom(cartAtom);

  function handleClick() {
    setCart([])
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Carrinho</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Carrinho</DrawerTitle>
            <DrawerDescription>Verifique seu carrinho</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="mt-3 h-[120px]">
              {cart.map((product) => <p key={product.id}>{product.name}, {product.description}</p>)}
            </div>
          </div>
          <DrawerFooter className="flex text-center items-center">
            <Button onClick={handleClick}>Comprar</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
