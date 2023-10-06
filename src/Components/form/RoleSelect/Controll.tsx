import { ComponentProps } from 'react'

type ControllProps = ComponentProps<'select'>

export function Controll(props: ControllProps) {


   return (
      <select id="role" className="after rounded-full border border-zinc-100 px-3 shadow-sm flex-1 bg-transparent p-0 text-zinc-100 placeholder-zinc-400 outline-none border-none hover:appearance-none" {...props}/>
   )
}