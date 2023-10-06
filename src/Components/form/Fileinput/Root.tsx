'use client'
import { ComponentProps, createContext, useState, useId, useContext } from "react"

type RootProps = ComponentProps<'div'>

type fileContextType = {
   id: string;
   files: File[];
   onFilesSelected: (files: File[]) => void;
} 

const fileContext = createContext({} as fileContextType)

export function Root(props: RootProps){
   const [files, setFiles] = useState<File[]>([])

   const id = useId()

   return (
      <fileContext.Provider value={{id, files, onFilesSelected: setFiles}}>
         <div {...props}/>
      </fileContext.Provider>
   )
}

export const useFileInput = () => useContext(fileContext)