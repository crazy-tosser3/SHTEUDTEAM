'use client'

import Card from "@/app/components/Card";
import TaskEmail from "@/app/components/tasks/TaskEmail";
import { Link } from "lucide-react";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const taskData = [
  {
    component: <TaskEmail />,
    desc: "",
  }
]

const page = ({ params }: PageProps) => {

  const resolvedParams = use(params);
  const id = Number(resolvedParams.id);
  
  return (
    <main className="p-1 h-[85dvh]">
      <div className="grid grid-cols-4 grid-rows-4 h-full gap-2">
        <Card classes="row-span-4" contentClasses="flex flex-col gap-1">
        </Card>
        <Card classes="col-span-3" contentClasses="flex flex-col gap-1">
          <h1 className="text-(--accent) text-2xl">Предыстория</h1>
          <p>Вы проснулись и обнаружили новые письма на своей почте. Пора рассортировать ящик! Начните с любого письма.</p>
        </Card>
        <Card classes="row-span-3 col-span-3" contentClasses="flex flex-col gap-1">
          {taskData[id-1].component}
        </Card>
        
      </div>
    </main>
    
  )
}

export default page