"use client"
import ColapseMenu from "../collapsibleSidebar"


export function Header() {

   return (
      <div className="flex flex-row min-h-fit items-center justify-between px-2 py-2 text-zinc-100 border-b text-3xl bg-zinc-800">
         <div className="flex flex-row items-center gap-2">
         <img src='/remove-bg-logo.png' alt="Logo" className="w-10 h-10" />
         <strong className="font-medium">Learnhub</strong>
         </div>
         <ColapseMenu />
      </div>
   )
}