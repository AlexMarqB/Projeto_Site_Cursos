"use client";
import * as Input from "@/Components/input";
import * as Bnt from "@/Components/button"
import * as fileInput from "@/Components/form/Fileinput";
import { SettingTabs } from "@/Components/settingTabs";
import {
   Mail,
   UploadCloud,
} from "lucide-react";
import { RadSelect } from "@/Components/form/Radix-select";
import { useRouter } from "next/navigation";
import { Divider, ResponsiveFormInputContainer } from "@/Components/@useful";

export default function Admin() {

   const router = useRouter();

   const navigate = (route: string) => {
      router.push(route);
   };

   return (
      <>
         <div className="flex justify-between mb-6">
            <h1 className="text-zinc-50 text-3xl font-medium">Users</h1>
            <Bnt.PurpleButton onClick={() => navigate("/admin/modules")}>
               Voltar à tabela
            </Bnt.PurpleButton>
         </div>
         <Divider />

         <div className="mt-6 flex flex-col">
            <div className="flex justify-between items-center border-b border-zinc-50 pb-5">
               <div>
                  <h1 className="text-lg text-zinc-50 font-medium ">
                     Informações pessoais
                  </h1>
                  <h3 className="text-sm text-zinc-300">
                     Atualize a sua foto e as suas informações pessoais aqui.
                  </h3>
               </div>
               <div className="flex gap-2">
                  <Bnt.GrayButton
                     type="button">
                     Cancelar
                  </Bnt.GrayButton>
                  <Bnt.PurpleButton
                     type="submit"
                     form="formUser">
                     Confirmar
                  </Bnt.PurpleButton>
               </div>
            </div>

            <form
               id="formUser"
               className="flex flex-col w-full gap-5 divide-y divide-zinc-50">
               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="firstName"
                     className="text-zinc-50 font-sm font-medium">
                     Nome
                  </label>
                  <div className="flex gap-3 lg:flex-row flex-col">
                     <Input.Root>
                        <Input.Controll id="firstName" defaultValue={""} placeholder="Primeiro nome"/>
                     </Input.Root>
                     <Input.Root>
                        <Input.Controll
                           id="lastName"
                           defaultValue={""} placeholder="Sobrenome"
                        />
                     </Input.Root>
                  </div>
               </ResponsiveFormInputContainer>

               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="email"
                     className="text-zinc-50 font-sm font-medium">
                     E-mail
                  </label>
                  <Input.Root>
                     <Input.Prefix>
                        <Mail className="text-zinc-50" />
                     </Input.Prefix>
                     <Input.Controll
                        id="email"
                        defaultValue={""}
                        placeholder="examplo@email.com"
                     />
                  </Input.Root>
               </ResponsiveFormInputContainer>

               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="email"
                     className="text-zinc-50 font-sm font-medium">
                     Imagem
                     <span className="mt-0.5 block text-sm font-normal text-zinc-300">
                        Sua foto de perfil será mostrada aqui.
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
                     htmlFor="email"
                     className="text-zinc-50 font-sm font-medium">
                     Cargo
                  </label>
                  <RadSelect items={['Admin', 'Student']}/>
               </ResponsiveFormInputContainer>

               <div className="flex gap-2 justify-end py-5">
               <Bnt.GrayButton
                     type="button">
                     Cancelar
                  </Bnt.GrayButton>
                  <Bnt.PurpleButton
                     type="submit"
                     form="formUser">
                     Confirmar
                  </Bnt.PurpleButton>
               </div>
            </form>
         </div>
      </>
   );
}
