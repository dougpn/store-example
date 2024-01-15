"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholderImage from "../../../public/placeholderImage.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cartAtom } from "@/hooks/atoms";
import { useAtom } from "jotai";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}
export default function ProductsPage() {
  const [data, setData] = useState<Product[]>();
  const [cart, setCart] = useAtom(cartAtom);
  const session = useSession()
  function isAddedToCart(product: Product) {
    return !!cart.find((cartProduct) => cartProduct.id === product.id);
  }
  function handleClick(product: Product) {
    if (isAddedToCart(product)) return;
    setCart([...cart, product]);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3001/data")
      .then((response) => setData(response.data));
  }, []);
  if (session.status !== "authenticated") {
    redirect("/")
  }
  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.map((product) => (
        <Card className="lg:max-w-md w-full" key={product.id}>
          <CardHeader>
            <CardTitle className="text-[32px]">{product?.name}</CardTitle>
            <CardDescription className="text-[16px]">
              {product?.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={placeholderImage} alt="Card Image" className="w-full" />
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <p className="text-[24px]">R$ {product?.price},00</p>
            <Button
              className={`mt-4 ${
                isAddedToCart(product) ? "cursor-default" : "cursor-pointer"
              }`}
              variant={isAddedToCart(product) ? "ghost" : "default"}
              onClick={() => handleClick(product)}
            >
              {isAddedToCart(product) ? "Adicionado!" : "Adicionar ao carrinho"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
