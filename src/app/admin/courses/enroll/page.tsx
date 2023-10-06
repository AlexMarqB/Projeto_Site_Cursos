"use client";
import * as fileInput from "@/Components/form/Fileinput";
import * as Input from "@/Components/input";
import * as Bnt from "@/Components/button";
import { UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";

import './scrollbar.css'
import { Divider, ResponsiveFormInputContainer } from "@/Components/@useful";


export default function Cadastrar() {
   const router = useRouter()

   const navigate = (route: string) => {
      router.push(route)
   }
   
   return (
      <>
         <div className="flex justify-between mb-5">
         <h1 className="text-zinc-50 text-3xl font-medium">Courses</h1>
         <Bnt.PurpleButton onClick={() => navigate('/admin/courses')}>Voltar à tabela</Bnt.PurpleButton>
         </div>
         <Divider />

         
         <div className="mt-6 flex flex-col">
            <div className="flex justify-between items-center border-b border-zinc-50 pb-5">
               <div className="flex flex-col">
                  <h1 className="text-lg text-zinc-50 font-medium ">
                     Cadastro de curso
                  </h1>
                  <h3 className="text-sm text-zinc-300">
                     Insira as informações do curso que vai criar aqui.
                  </h3>
               </div>
               <div className="flex gap-2 lg:flex-row flex-col">
                  <Bnt.GrayButton type="button">Cancelar</Bnt.GrayButton>
                  <Bnt.PurpleButton type="submit" form="formUser">
                     Confirmar
                  </Bnt.PurpleButton>
               </div>
            </div>

            <form
               id="formUser"
               className="flex flex-col w-full gap-5 divide-y divide-zinc-50">
               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="name"
                     className="text-zinc-50 font-sm font-medium">
                     Nome do curso
                  </label>
                  <div className="flex gap-3">
                     <Input.Root>
                        <Input.Controll id="name" placeholder={"Nome"} />
                     </Input.Root>
                  </div>
               </ResponsiveFormInputContainer>

               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="description"
                     className="text-zinc-50 font-sm font-medium">
                     Descrição
                  </label>
                  <Input.Root>
                     <textarea
                        id="description"
                        cols={30}
                        rows={5}
                        className="flex-1 border-0 bg-transparent p-0 text-zinc-100
                        placeholder-zinc-400 outline-none border-none text-left pb-3 pr-3 resize-none"
                        placeholder={`Descrição`}/>
                  </Input.Root>
               </ResponsiveFormInputContainer>

               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="email"
                     className="text-zinc-50 font-sm font-medium">
                     Imagem
                     <span className="mt-0.5 block text-sm font-normal text-zinc-300">
                        A image do curso será mostrada aqui.
                     </span>
                  </label>
                  <fileInput.Root className="flex items-start gap-5">
                     <fileInput.ImagePreview />
                     <fileInput.Trigger>
                        <div className="rounded-full bg-zinc-100 p-2 group-hover:bg-violet-700">
                           <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:bg-violet-700 group-hover:text-violet-100" />
                        </div>

                        <div className="flex flex-col items-center gap-1">
                           <div className="text-sm">
                              <span className="font-semibold text-violet-700">
                                 Click here to upload
                              </span>{" "}
                              or drag and drop
                              <span> SVG, PNG, JPG ou GIF(max 800x400px)</span>
                           </div>
                        </div>
                     </fileInput.Trigger>
                     <fileInput.Controll />
                  </fileInput.Root>
               </ResponsiveFormInputContainer>

               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="price"
                     className="text-zinc-50 font-sm font-medium">
                     Valor
                  </label>
                  <div className="flex gap-3">
                     <Input.Root>
                        <Input.Controll id="price" placeholder={"R$0.000,00"} />
                     </Input.Root>
                  </div>
               </ResponsiveFormInputContainer>

               <div className="flex gap-2 justify-end py-5">
                  <Bnt.GrayButton type="button">Cancelar</Bnt.GrayButton>
                  <Bnt.PurpleButton type="submit" form="formUser">
                     Confirmar
                  </Bnt.PurpleButton>
               </div>
            </form>
         </div>
      </>
   );
}
