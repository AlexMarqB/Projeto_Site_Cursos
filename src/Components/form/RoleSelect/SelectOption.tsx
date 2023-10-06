import { ComponentProps } from "react"

type OptionProps = ComponentProps<'option'>

export function Option(props: OptionProps){
   return (
      <option className="text-zinc-100 bg-zinc-700" {...props}/>
   )
}