import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function GrayButton(props: ButtonProps) {
   return (
      <button
         className="rounded-lg px-4 py-2 
                         text-sm font-semibold shadow-sm 
                         border border-zinc-300  hover:bg-zinc-700 
                         text-white"
         type="button"
         {...props}
      />
   );
}

export function PurpleButton(props: ButtonProps) {
   return (
      <button
         className="rounded-lg px-4 py-2 
      text-sm font-semibold shadow-sm 
      bg-violet-600 text-white hover:bg-violet-700"
         type="button"
         {...props}
      />
   );
}
