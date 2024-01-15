"use client"
import { MainNav } from "@/app/products/components/main-nav";
import { SessionProvider } from "next-auth/react";
import React from "react";
import UserButton from "./user-button";

const CommonPage = ({ children }: any) => {
  return (
    <SessionProvider>
      <div>
        <div className="flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserButton />
          </div>
        </div>
      </div>
      {children}
    </SessionProvider>
  );
};

export default CommonPage;
