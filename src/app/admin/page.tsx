"use client";
import { Divider } from "@/Components/@useful";
import * as Bnt from "@/Components/button";
import CoursesGraph from "@/Components/graphics/coursesGraph";
import EnrollGraph from "@/Components/graphics/enrollsGraph";
import { useRouter } from "next/navigation";

export default function AdminUsers() {
   const router = useRouter()

   const navigate = (link: string) => {
      router.push(link)
   }

   return (
      <>
         <h1 className="text-zinc-50 text-3xl font-medium">Dashboard</h1>

         <Divider />

         <div className=" shadow-sm py-5" id="Courses">
            <CoursesGraph />
         </div>
         <Divider />
         <div className=" shadow-sm py-5" id="Avaliations">
            <EnrollGraph />
         </div>
         <Divider />
         <Bnt.PurpleButton onClick={() => navigate('/admin/courses')}>Ver cursos</Bnt.PurpleButton>
      </>
   );
}
