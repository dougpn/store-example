"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {session.status === "authenticated"
          ? "Você está autenticado, use as opções no topo esquerdo para navegar entre as páginas!"
          : "Você não está autenticado, use o botão do topo direito para se logar!"}
      </div>
    </main>
  );
}
