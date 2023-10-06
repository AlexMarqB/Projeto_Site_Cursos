import { ComponentProps } from "react";

type RootProps = ComponentProps<'div'>

export function Root(props : RootProps){
   return (
      <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 shadow-sm bg-zinc-700 hover:border-zinc-100 hover:bg-violet-500" {...props}/>
   )
}

type ControllProps = ComponentProps<'button'>

export function Controll(props: ControllProps) {
   return (
      <button className="flex flex-row w-full text-left justify-between font-semibold text-zinc-100 text-lg" {...props}/>
   )
}