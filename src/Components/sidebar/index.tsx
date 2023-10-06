"use client";
import { useState } from "react";
import * as Input from "../input";
import {
   Search,
   LogOut,
   UserCircle2
} from "lucide-react";
import { PageChoices } from "./sidepages/FullButtons";
import { Divider } from "../@useful";


export function Sidebar() {
   const [search, setSearch] = useState("");

   return (
      <div className="flex flex-col gap-6 border-r border-r-zinc-100 px-5 py-7 min-h-full bg-zinc-800">
         <div className="flex gap-4 items-center">
            <img
               src="/remove-bg-logo.png"
               alt="Logo Learnhub"
               className="w-14 rounded-full"
            />
            <strong className="text-zinc-100 text-4xl"> Learnhub </strong>
         </div>
         <Input.Root>
            <Input.Prefix>
               <Search className="text-zinc-100 w-5 h-5" />
            </Input.Prefix>
            <Input.Controll
               type="text"
               placeholder="Type here..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
         </Input.Root>
         <PageChoices />
         <Divider />
         <div className="flex flex-row self-end text-left w-full items-center gap-3">
            <UserCircle2 className="text-zinc-100 h-10 w-10" />
            <div className="flex flex-col">
               <span className="text-base text-zinc-100">Alex Marques</span>
               <span className="text-sm text-zinc-400 truncate">alexmarques@hotmail.com</span>
            </div>
            <LogOut className="text-zinc-100 h-6 w-8" />
         </div>
      </div>
   );
}
