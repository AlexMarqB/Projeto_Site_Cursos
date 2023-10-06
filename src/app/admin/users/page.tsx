"use client";
import * as Input from "@/Components/input";
import * as Bnt from "@/Components/button";
import * as Tbl from "@/Components/table";
import { AlignCenter, Hash, Search } from "lucide-react";
import { useState } from "react";
import { Users } from "@/@example_arrays";
import { useRouter } from "next/navigation";
import { EPriveleges } from "@/@types";
import { Divider, ResponsiveTableOptions } from "@/Components/@useful";

export default function AdminCourses() {
   const router = useRouter();

   const navigate = (link: string) => {
      router.push(link);
   };

   const [search, setSearch] = useState("");

   //Paginação
   const [actualPage, setActualPage] = useState(1);
   const [itemsByPage, setItemsByPage] = useState(5);

   const changePage = (page: number) => {
      setActualPage(page);
   };

   const inicio = (actualPage - 1) * itemsByPage;
   const fim = inicio + itemsByPage;

   const selectedData = Users.filter((item) =>
      item.firstName
         .concat(` ${item.lastName}`)
         .toLowerCase()
         .includes(search.toLocaleLowerCase())
   ).slice(inicio, fim);

   return (
      <>
         <div className="flex justify-between">
            <h1 className="text-zinc-50 text-3xl font-medium">Users</h1>
            <Bnt.PurpleButton onClick={() => navigate("/admin/users/enroll")}>
               Cadastrar
            </Bnt.PurpleButton>
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
                  <AlignCenter className="w-7 h-7 text-zinc-100" />
                  {itemsByPage === 2 ? (
                     <Bnt.PurpleButton disabled>2</Bnt.PurpleButton>
                  ) : (
                     <Bnt.GrayButton
                        onClick={() => {
                           changePage(1);
                           setItemsByPage(2);
                        }}>
                        2
                     </Bnt.GrayButton>
                  )}
                  {itemsByPage === 5 ? (
                     <Bnt.PurpleButton disabled>5</Bnt.PurpleButton>
                  ) : (
                     <Bnt.GrayButton
                        onClick={() => {
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
                     <h1 className="text-3xl font-bold text-zinc-100 self-center">
                        {actualPage}
                     </h1>
                  </div>
               </div>
            </ResponsiveTableOptions>
            <Tbl.Root>
               <Tbl.TRoot>
                  <Tbl.THeader>
                     <Tbl.HeaderValues
                        headers={[
                           "Nome",
                           "Username",
                           "Email",
                           "Ultimo Acesso",
                           "Cargo",
                           "Ações",
                        ]}
                     />
                  </Tbl.THeader>
                  <Tbl.TBody>
                     {selectedData.map((item, index) => (
                        <Tbl.TRow key={index}>
                           <Tbl.TDesc>
                              {item.firstName.concat(` ${item.lastName}`)}
                           </Tbl.TDesc>
                           <Tbl.TDesc>{item.username}</Tbl.TDesc>
                           <Tbl.TDesc>{item.email}</Tbl.TDesc>
                           <Tbl.TDesc>
                              {item.lastAccess.toString().substring(0, 25)}
                           </Tbl.TDesc>
                           <Tbl.TDesc>
                              {item.privilege === 0 ? "Estudante" : "Admin"}
                           </Tbl.TDesc>
                           <Tbl.TDesc>
                              {item.privilege === 0 ? (
                                 <Tbl.ActionButtons
                                    editSelected={() => {}}
                                    deleteSelected={() => {}}
                                 />
                              ) : (
                                 "Sem permissão"
                              )}
                           </Tbl.TDesc>
                        </Tbl.TRow>
                     ))}
                  </Tbl.TBody>
               </Tbl.TRoot>
               <div className="flex flex-1 lg:justify-end justify-start">
                  {search === "" && (
                     <Tbl.PaginateIndicator
                        data={Users}
                        itemsByPage={itemsByPage}
                        showPage={changePage}
                        page={actualPage}
                        setPage={setActualPage}
                     />
                  )}
               </div>
            </Tbl.Root>
         </div>
         <Divider />
      </>
   );
}
