"use client";
import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

type ControllProps = ComponentProps<"input">;

export function Controll(props: ControllProps) {
   const { id, onFilesSelected } = useFileInput();

   function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
      if(!event.target.files?.length) {
         return 
      }

      const files = Array.from(event.target.files)
      onFilesSelected(files)
   }

   return <input type="file" className="sr-only" id={id} onChange={handleFileSelection} {...props} />;
}
