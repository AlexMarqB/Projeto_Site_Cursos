import { ComponentProps } from "react"

type ResponsiveDivProps = ComponentProps<'div'>

export function ResponsiveFormInputContainer(props: ResponsiveDivProps) {
   return (
      <div className="lg:grid lg:grid-cols-form lg:gap-3 flex flex-col justify-start gap-2 py-5" {...props}/>
   )
}

export function ResponsiveTableOptions(props: ResponsiveDivProps) {
   return (
      <div className="flex lg:flex-row flex-col lg:w-full min-w-fit self-start mt-6 gap-8  px-2 " {...props}/>
   )
}

export function Divider() {
   return (
      <div className="h-px bg-zinc-100 mt-auto"/>
   )
}