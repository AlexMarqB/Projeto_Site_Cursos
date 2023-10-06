'use client'
import { ComponentProps } from "react"
import { useFileInput } from "./Root"


type TriggerProps = ComponentProps<'label'>

export function Trigger(props: TriggerProps) {

   const { id } = useFileInput()

   return (
      <label htmlFor={id} className="group flex flex-1 cursor-pointer flex-col items-center rounded-lg gap-3
       border border-zinc-300 px-6 py-4 text-center text-zinc-100 shadow-sm hover:border-violet-300 
       hover:bg-violet-200 hover:text-violet-500" {...props}/>
   )
}