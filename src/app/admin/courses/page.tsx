"use client";
import * as Input from "@/Components/input";
import * as Bnt from "@/Components/button";
import * as Tbl from "@/Components/table";
import { AlignCenter, Hash, Search } from "lucide-react";
import { useState } from "react";
import { Cursos } from "@/@example_arrays";
import { useRouter } from 'next/navigation';
import { Divider, ResponsiveTableOptions } from "@/Components/@useful";

export default function AdminCourses() {
   const router = useRouter()

   const navigate = (link: string) => {
      router.push(link)
   }

   const [search, setSearch] = useState("");

   //Paginação
   const [actualPage, setActualPage] = useState(1);
   const [itemsByPage, setItemsByPage] = useState(5);

   const changePage = (page: number) => {
      setActualPage(page);
   };

   const inicio = (actualPage - 1) * itemsByPage;
   const fim = inicio + itemsByPage;

   const selectedData = Cursos.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase())).slice(inicio, fim);

   return (
      <>
         <div className="flex justify-between">
            <h1 className="text-zinc-50 text-3xl font-medium">Courses</h1>
            <Bnt.PurpleButton onClick={() => navigate('/admin/courses/enroll')}>Cadastrar</Bnt.PurpleButton>
         </div>

         <div className="mt-6 flex flex-col">
         <Divider />
            <ResponsiveTableOptions>
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
               <div className="flex flex-1 w-full flex-row gap-4 items-center">
                  <AlignCenter className="w-7 h-7 text-zinc-100"/>
               {itemsByPage === 2 ? (
                  <Bnt.PurpleButton disabled>2</Bnt.PurpleButton>
               ) : (
                  <Bnt.GrayButton onClick={() => {
                     changePage(1);
                     setItemsByPage(2);
                  }} >
                     2
                  </Bnt.GrayButton>
               )}
               {itemsByPage === 5 ? (
                  <Bnt.PurpleButton disabled>5</Bnt.PurpleButton>
               ) : (
                  <Bnt.GrayButton onClick={() => {
                     changePage(1);
                     setItemsByPage(5);
                  }}>
                     5
                  </Bnt.GrayButton>
               )}
               {itemsByPage === 10 ? (
                  <Bnt.PurpleButton disabled>10</Bnt.PurpleButton>
               ) : (
                  <Bnt.GrayButton
                     onClick={() => {
                        changePage(1);
                        setItemsByPage(10);
                     }}>
                     10
                  </Bnt.GrayButton>
               )}
               <div className="flex  self-center gap-1 items-center">
               <Hash className="w-7 h-7 text-violet-600" />
               <h1 className="text-2xl font-bold text-zinc-100 self-center">{actualPage}</h1>
               </div>
               </div>
            </ResponsiveTableOptions>
            <Tbl.Root>
               <Tbl.TRoot>
                  <Tbl.THeader>
                     <Tbl.HeaderValues
                        headers={[
                           "Nome",
                           "Preço",
                           "Matriculas",
                           "Avaliação",
                           "Ações",
                        ]}
                     />
                  </Tbl.THeader>
                  <Tbl.TBody>
                     {selectedData.map((item, index) => (
                        <Tbl.TRow key={index}>
                           <Tbl.TDesc>{item.name}</Tbl.TDesc>
                           <Tbl.TDesc>R$ {item.price},00</Tbl.TDesc>
                           <Tbl.TDesc>{item.enrollmentsNumber}</Tbl.TDesc>
                           <Tbl.TDesc>{item.rating}</Tbl.TDesc>
                           <Tbl.TDesc>
                             <Tbl.ActionButtons editSelected={() => {}} deleteSelected={() => {}}/>
                           </Tbl.TDesc>
                        </Tbl.TRow>
                     ))}
                  </Tbl.TBody>
               </Tbl.TRoot>
               <div className="flex flex-1 lg:justify-end justify-start">
                  {search === '' &&
                     <Tbl.PaginateIndicator
                        data={Cursos}
                        itemsByPage={itemsByPage}
                        showPage={changePage}
                        page={actualPage}
                        setPage={setActualPage}
                     />
                  }
               </div>
            </Tbl.Root>
         </div>
      </>
   );
}
