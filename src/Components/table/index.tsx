import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react";
import { ComponentProps } from "react";

type RootProps = ComponentProps<"div">;

export function Root(props: RootProps) {
   return <div className="w-full overflow-x-auto mt-10" {...props} />;
}

type TableProps = ComponentProps<"table">;

export function TRoot(props: TableProps) {
   return <table className="w-full bg-zinc-700 border" {...props} />;
}

type HeaderProps = ComponentProps<"thead">;

export function THeader(props: HeaderProps) {
   return (
      <thead
         className="gap-2 py-4 items-center text-center border-b bg-violet-900"
         {...props}
      />
   );
}

interface HeaderValuesProps {
   headers: string[];
}

export function HeaderValues({ headers }: HeaderValuesProps) {
   return (
      <tr className=" text-violet-500 text-lg">
         {headers.map((item: string, index: number) => (
            <th className="border" key={index}>
               {item}
            </th>
         ))}
      </tr>
   );
}

type BodyProps = ComponentProps<"tbody">;

export function TBody(props: BodyProps) {
   return <tbody className="items-center" {...props} />;
}

type TRowProps = ComponentProps<"tr">;

export function TRow(props: TRowProps) {
   return <tr className="items-center text-center text-zinc-100" {...props} />;
}

type TDescProps = ComponentProps<"td">;

export function TDesc(props: TDescProps) {
   return <td className="px-6 py-3 border" {...props} />;
}

type ActionProps = {
   editSelected: (target: object) => void;
   deleteSelected: (target: object) => void;
};

export function ActionButtons({ editSelected, deleteSelected }: ActionProps) {
   return (
      <div className="flex flex-row gap-4 justify-center">
         <button onClick={editSelected}>
            <Pencil className="w-5 h-5 text-amber-400 hover:opacity-50" />
         </button>
         <button onClick={deleteSelected}>
            <Trash2 className="w-5 h-5 text-red-600 hover:opacity-50" />
         </button>
      </div>
   );
}

interface IndicatorProps {
   data: any[];
   itemsByPage: number;
   showPage: (page: number) => void;
   page: number;
   setPage: (n: number) => void;
}

export function PaginateIndicator({
   data,
   itemsByPage,
   showPage,
   page,
   setPage,
}: IndicatorProps) {
   const totalTables = Math.ceil(data.length / itemsByPage);

   let pp: number[] = [];

   if (page === 1) {
      pp = [page, page + 1];
   } else if (page > 1 && page < totalTables) {
      pp = [page - 1, page, page + 1];
   } else if (page === totalTables) {
      pp = [page - 1, page];
   }

   return (
      <div className="flex self-end gap-2 items-center mt-8 mb-5">
         <button
            onClick={() => showPage(page - 1)}
            disabled={page == 1}
            type="button">
            <ChevronLeft
               className={` ${
                  page == 1 ? "text-zinc-700" : "text-zinc-100"
               } w-5 h-5`}
            />
         </button>

         {totalTables > 5 ? (
            <>
               {page >= 3 && (
                  <div>
                     <button
                        className={`px-3 py-1 rounded-lg shadow-sm border ${
                           1 == page
                              ? "border-zinc-500"
                              : "text-zinc-100 bg-zinc-700"
                        } `}
                        key={1}
                        disabled={page == 1}
                        onClick={() => {
                           showPage(1);
                           setPage(1);
                        }}>
                        {1}
                     </button>{" "}
                     <span className="strong text-2xl text-zinc-100">
                        . . .
                     </span>{" "}
                  </div>
               )}
               {pp.map((item, index) => (
                  <button
                     className={`px-3 py-1 rounded-lg shadow-sm border ${
                        item === page
                           ? "border-zinc-500"
                           : "text-zinc-100 bg-zinc-700"
                     } `}
                     key={index}
                     disabled={item === page}
                     onClick={() => {
                        if (item < page) {
                           showPage(page - 1);
                           setPage(page - 1);
                        }
                        if (item > page) {
                           showPage(page + 1);
                           setPage(page + 1);
                        }
                        if (item === totalTables) {
                           showPage(totalTables);
                           setPage(totalTables);
                        }
                     }}>
                     {item}
                  </button>
               ))}
               {!(page === totalTables - 1 || page === totalTables) && (
                  <div>
                     {" "}
                     <span className="strong text-2xl text-zinc-100">
                        . . .
                     </span>{" "}
                     <button
                        className={`px-3 py-1 rounded-lg shadow-sm border ${
                           totalTables == page
                              ? "border-zinc-500"
                              : "text-zinc-100 bg-zinc-700"
                        } `}
                        key={totalTables}
                        disabled={page == totalTables}
                        onClick={() => {
                           showPage(totalTables);
                           setPage(totalTables);
                        }}>
                        {totalTables}
                     </button>
                  </div>
               )}
            </>
         ) : (
            Array.from({ length: totalTables }).map((_, index) => (
               <button
                  className={`px-3 py-1 rounded-lg shadow-sm border ${
                     index + 1 == page
                        ? "border-zinc-500"
                        : "text-zinc-100 bg-zinc-700"
                  } `}
                  key={index}
                  disabled={page == index + 1}
                  onClick={() => {
                     showPage(index + 1);
                  }}>
                  {index + 1}
               </button>
            ))
         )}
         <button
            type="button"
            onClick={() => showPage(page + 1)}
            disabled={page == totalTables}>
            <ChevronRight
               className={` ${
                  page === totalTables ? "text-zinc-700" : "text-zinc-100"
               } w-5 h-5`}
            />
         </button>
      </div>
   );
}
