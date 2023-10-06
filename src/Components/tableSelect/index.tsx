"use client";
import * as Input from "@/Components/input";
import * as Tbl from "@/Components/table";
import * as Bnt from "@/Components/button";
import { useState } from "react";
import { CoursesType, ModulesType } from "@/@types";
import { Search } from "lucide-react";

interface ContentProps {
   data: CoursesType[] | ModulesType[];
   selectTarget: (target: CoursesType | ModulesType) => void;
   onClose: (b: boolean) => void;
}

export function Content({ data, selectTarget, onClose }: ContentProps) {
   const [chosen, setChosen] = useState<CoursesType | ModulesType>();

   const [search, setSearch] = useState("");

   //Paginação
   const [actualPage, setActualPage] = useState(1);
   const itemsByPage = 5;

   const changePage = (page: number) => {
      setActualPage(page);
   };

   const inicio = (actualPage - 1) * itemsByPage;
   const fim = inicio + itemsByPage;

   const selectedData = data.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase())).slice(inicio, fim);

   return (
      <>
         <div className="flex flex-col gap-3 justify-center z-20">
            <div className="flex gap-2">
               <Input.Root>
                  <Input.Prefix>
                     <Search className="text-zinc-100 w-5 h-5" />
                  </Input.Prefix>
                  <Input.Controll
                     type="text"
                     placeholder="Type here..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  />
               </Input.Root>
            </div>
            <Tbl.Root className="m-0">
               <Tbl.TRoot>
                  <Tbl.THeader>
                     <Tbl.HeaderValues headers={["Cursos"]} />
                  </Tbl.THeader>
                  <Tbl.TBody>
                     {selectedData.map((item, index) => (
                        <Tbl.TRow key={index}>
                           <Tbl.TDesc>
                              <button
                                 type="button"
                                 onClick={() => setChosen(item)}
                                 onDoubleClick={() => {
                                    selectTarget(item);
                                    onClose(false);
                                 }}
                                 className={`hover:text-violet-500 ${
                                    chosen === item && "text-violet-500"
                                 }`}>
                                 {item.name}
                              </button>
                           </Tbl.TDesc>
                        </Tbl.TRow>
                     ))}
                  </Tbl.TBody>
               </Tbl.TRoot>
               <div className="flex flex-1 justify-center">
                  {search === '' &&
                     <Tbl.PaginateIndicator
                        data={data}
                        itemsByPage={5}
                        showPage={changePage}
                        page={actualPage}
                        setPage={setActualPage}
                     />
                  }
               </div>
            </Tbl.Root>
            <div className="mt-4 flex w-full justify-evenly">
               <Bnt.GrayButton onClick={() => onClose(false)}>
                  Cancelar
               </Bnt.GrayButton>
               <Bnt.PurpleButton
                  onClick={() => {
                     selectTarget(chosen!);
                     onClose(false);
                  }}
                  disabled={!chosen}>
                  Confirmar
               </Bnt.PurpleButton>
            </div>
         </div>
      </>
   );
}
