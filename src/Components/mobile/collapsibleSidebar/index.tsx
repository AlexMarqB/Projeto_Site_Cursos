import * as Collapse from "@radix-ui/react-collapsible";
import * as ButL from "@/Components/sidebar/sidepages";
import "./style.css";
import {
   AlignRight,
   CheckSquare,
   Folders,
   Home,
   LayoutDashboard,
   MenuSquare,
   SquareStack,
   Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ColapseMenu() {
   const router = useRouter();

   const navigate = (link: string) => {
      router.push(link);
   };
   return (
      <Collapse.Root className="absolute top-2 right-0">
         <Collapse.Trigger className="flex top-0 right-0 absolute z-10">
            <AlignRight className="text-zinc-100 w-10 h-10 top-0 right-0 z-10" />
         </Collapse.Trigger>
         <Collapse.Content className="CollapsibleContent bg-zinc-700 border-l-2 border-b-2 rounded-bl-2xl shadow-md mt-12 z-10">
            <ButL.Root>
               <Collapse.Trigger className="flex flex-row gap-2">
                  <Home className="text-zinc-100 h-6 w-8" />
                  <ButL.Controll onClick={() => navigate("/home")}>
                     Home
                  </ButL.Controll>
               </Collapse.Trigger>
            </ButL.Root>
            <ButL.Root>
               <Collapse.Trigger className="flex flex-row gap-2">
                  <Users className="text-zinc-100 h-6 w-8" />
                  <ButL.Controll onClick={() => navigate("/admin/users")}>
                     Users
                  </ButL.Controll>
               </Collapse.Trigger>
            </ButL.Root>
            <ButL.Root>
               <Collapse.Trigger className="flex flex-row gap-2">
                  <Folders className="text-zinc-100 h-6 w-8" />
                  <ButL.Controll onClick={() => navigate("/admin/courses")}>
                     Courses
                  </ButL.Controll>
               </Collapse.Trigger>
            </ButL.Root>
            <ButL.Root>
               <Collapse.Trigger className="flex flex-row gap-2">
                  <SquareStack className="text-zinc-100 h-6 w-8" />
                  <ButL.Controll onClick={() => navigate("/admin/modules")}>
                     Modules
                  </ButL.Controll>
               </Collapse.Trigger>
            </ButL.Root>
            <ButL.Root>
               <Collapse.Trigger className="flex flex-row gap-2">
                  <CheckSquare className="text-zinc-100 h-6 w-8" />
                  <ButL.Controll onClick={() => navigate("/admin/tests")}>
                     Tests
                  </ButL.Controll>
               </Collapse.Trigger>
            </ButL.Root>
            <ButL.Root>
               <Collapse.Trigger className="flex flex-row gap-2">
                  <MenuSquare className="text-zinc-100 h-6 w-8" />
                  <ButL.Controll onClick={() => navigate("/admin/plans")}>
                     Plans
                  </ButL.Controll>
               </Collapse.Trigger>
            </ButL.Root>
            <ButL.Root>
               <Collapse.Trigger className="flex flex-row gap-2">
                  <LayoutDashboard className="text-zinc-100 h-6 w-8" />
                  <ButL.Controll onClick={() => navigate("/admin")}>
                     Dashboard
                  </ButL.Controll>
               </Collapse.Trigger>
            </ButL.Root>
         </Collapse.Content>
      </Collapse.Root>
   );
}
