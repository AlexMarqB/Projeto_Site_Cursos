import * as pageMenu from "@/Components/sidebar/sidepages";
import { Home, CheckSquare, Folders, LayoutDashboard, MenuSquare, SquareStack, Users } from "lucide-react";
import { useRouter } from 'next/navigation';

export function PageChoices() {
   const router = useRouter()

   const navigate = (link: string) => {
      router.push(link)
   }

   return (
      <div className="flex flex-col gap-3 items-center">
            <pageMenu.Root>
               <Home className="text-zinc-100 h-6 w-8" />
               <pageMenu.Controll onClick={() => navigate('/home')}>
                  Home
               </pageMenu.Controll>
            </pageMenu.Root>
            <pageMenu.Root>
               <Users className="text-zinc-100 h-6 w-8" />
               <pageMenu.Controll onClick={() => navigate('/admin/users')}>
                  Users
               </pageMenu.Controll>
            </pageMenu.Root>
            
            <pageMenu.Root>
               <Folders className="text-zinc-100 h-6 w-8" />
               <pageMenu.Controll onClick={() => navigate('/admin/courses')}>
                  Courses
               </pageMenu.Controll>
            </pageMenu.Root>
            <pageMenu.Root>
               <SquareStack className="text-zinc-100 h-6 w-8" />
               <pageMenu.Controll onClick={() => navigate('/admin/modules')}>
                  Modules
               </pageMenu.Controll>
            </pageMenu.Root>
            <pageMenu.Root>
               <CheckSquare className="text-zinc-100 h-6 w-8" />
               <pageMenu.Controll onClick={() => navigate('/admin/tests')}>
                  Tests
               </pageMenu.Controll>
            </pageMenu.Root>
            <pageMenu.Root>
               <MenuSquare className="text-zinc-100 h-6 w-8" />
               <pageMenu.Controll onClick={() => navigate('/admin/plans')}>
                  Plans
               </pageMenu.Controll>
            </pageMenu.Root>
            <pageMenu.Root>
               <LayoutDashboard className="text-zinc-100 h-6 w-8" />
               <pageMenu.Controll onClick={() => navigate('/admin')}>
                  Admin Dashboard
               </pageMenu.Controll>
            </pageMenu.Root>
         </div>
   )
}