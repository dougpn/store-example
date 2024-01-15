"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function CreateProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const session = useSession();
  const router = useRouter()

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    if (e.target.id === "price")
      setFormData({ ...formData, [e.target.id]: parseInt(e.target.value) });
    else setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit() {
    axios.post("http://localhost:3001/data", formData).then(() => {
      router.push("/products");
    });
  }
  if (session.status !== "authenticated") {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center">
      <Card className="w-1/2">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Crie um novo produto</CardTitle>
          <CardDescription>
            Adicione as informações do produto abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Insira o nome do seu produto"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Adicione uma descrição ao seu produto"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Preço</Label>
            <Input
              id="price"
              type="number"
              placeholder="Adicione o preço do seu produto"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Criar produto
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
