'use client'

import Card from "@/app/components/Card";
import TaskCall from "@/app/components/tasks/TaskCall";
import TaskEmail from "@/app/components/tasks/TaskEmail";
import TaskOnlineShopping from "@/app/components/tasks/TaskOnlineShopping";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const taskData = [
  {
    component: <TaskEmail />,
    desc: "Вы проснулись и обнаружили новые письма на своей почте. Пора рассортировать ящик! Начните с любого письма.",
  },
  {
    component: <TaskOnlineShopping />,
    desc: "После того, как Вы разобрались с почтой, было принято решение зайти на малоизвестный маркетплейс по первой ссылке в браузере. Укажите все подозрительные элементы",
  },
  {
    component: <TaskCall />,
    desc: "Пока Вы анализировали сайт Вам поступил звонок из банка. Узнайте причину",
  },
]

const page = ({ params }: PageProps) => {

  const resolvedParams = use(params);
  const id = Number(resolvedParams.id);
  
  return (
    <main className="p-1 h-[85dvh]">
      <div className="relative rounded border h-[1dvh] m-1">
        <motion.div className="accent-gradient absolute left-0 top-0 h-full rounded highlight" animate={{width: `${Math.floor(id/taskData.length*100)}%`}} transition={{delay: 0.5, duration: 2, type: "spring", stiffness: 10}} />
      </div>
      <div className="grid grid-cols-4 grid-rows-4 h-full gap-2">
        <Card classes="row-span-4" contentClasses="flex flex-col gap-1">
        </Card>
        <Card classes="col-span-3" contentClasses="flex gap-1 items-center justify-between">
          {id > 1 && <Link href={"/tasks/"+(id-1)}>
            <button className="flex gap-1 items-center primary text-(--background)">
              <ChevronLeft size={48} />
            </button>
          </Link>}
          <div className="flex flex-col ga-1">
            <h1 className="text-(--accent) text-2xl">Предыстория</h1>
            <p>{taskData[id-1].desc}</p>
          </div>
          {id < taskData.length && <Link href={"/tasks/"+(id+1)}>
            <button className="flex gap-1 items-center primary text-(--background)">
              <ChevronRight size={48} />
            </button>
          </Link>}
        </Card>
        <Card classes="row-span-3 col-span-3" contentClasses="flex flex-col gap-1 overflow-y-scroll overflow-x-clip">
          {taskData[id-1].component}
        </Card>
        
      </div>
    </main>
    
  )
}

export default page