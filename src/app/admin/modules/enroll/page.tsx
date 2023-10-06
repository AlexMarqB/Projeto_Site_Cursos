"use client";
import * as Input from "@/Components/input";
import * as Bnt from "@/Components/button";
import * as TSelect from "@/Components/tableSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Cursos } from "@/@example_arrays";
import { CoursesType, ModulesType } from "@/@types";
import "./scrollbar.css";
import { Divider, ResponsiveFormInputContainer } from "@/Components/@useful";


export default function Cadastrar() {
   const router = useRouter();

   const navigate = (route: string) => {
      router.push(route);
   };

   const [course, setCourse] = useState<CoursesType | ModulesType>();
   const [openCourseTable, setOpenCourseTable] = useState(false);

   return (
      <>
         <div className="flex justify-between mb-6">
            <h1 className="text-zinc-50 text-3xl font-medium">Modules</h1>
            <Bnt.PurpleButton onClick={() => navigate("/admin/TSelectules")}>
               Voltar à tabela
            </Bnt.PurpleButton>
         </div>
         <Divider />

         <div className="mt-6 flex flex-col">
            <div className="flex justify-between items-center border-b border-zinc-50 pb-5">
               <div>
                  <h1 className="text-lg text-zinc-50 font-medium ">
                     Cadastro de modulo
                  </h1>
                  <h3 className="text-sm text-zinc-300">
                     Insira as informações do modulo que vai criar aqui.
                  </h3>
               </div>
               <div className="flex gap-2 flex-col lg:flex-row">
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
                     Nome do modulo
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
                        placeholder={`Descrição`}
                     />
                  </Input.Root>
               </ResponsiveFormInputContainer>

               <ResponsiveFormInputContainer>
                  <label
                     htmlFor="course"
                     className="text-zinc-50 font-sm font-medium">
                     Selecione o curso
                     <span className="mt-0.5 block text-sm font-normal text-zinc-300">
                        Essa opção abre uma tebela de cursos.
                     </span>
                  </label>
                     {openCourseTable ? (
                           <TSelect.Content
                              data={Cursos}
                              selectTarget={setCourse}
                              onClose={setOpenCourseTable}
                           />
                     ) : (
                        <div className="flex justify-evenly p-0 gap-2">
                           <Bnt.PurpleButton
                              onClick={() =>
                                 setOpenCourseTable(!openCourseTable)
                              }>
                              Selecionar
                           </Bnt.PurpleButton>
                        <Input.Root>
                           <Input.Controll
                              id="course"
                              placeholder="Curso"
                              readOnly
                              value={course?.name || ""}
                              />
                        </Input.Root>
                              </div>
                     )}
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
