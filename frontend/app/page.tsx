import { ChevronRight } from "lucide-react";
import Card from "./components/Card";
import TaskCard from "./components/TaskCard";
import Carousel from "./components/Carousel";

export default function Home() {
  const data = [
    {
      src: "/placeholder.webp",
      title: "Тема 1",
      desc: "Это тест"
    },
    {
      src: "/placeholder.webp",
      title: "Тема 1",
      desc: "Это тест"
    },
    {
      src: "/placeholder.webp",
      title: "Тема 1",
      desc: "Это тест"
    },
    {
      src: "/placeholder.webp",
      title: "Тема 1",
      desc: "Это тест"
    },
    {
      src: "/placeholder.webp",
      title: "Тема 1",
      desc: "Это тест"
    },
    {
      src: "/placeholder.webp",
      title: "Тема 1",
      desc: "Это тест"
    },
  ];

  const srcs = [
    {
      url: "/placeholder.webp",
      title: "Инновационный метод предупреждения",
      text: "Интегрировали самые современные техники для интерактивного обучения цифровой грамотности"
    },
    {
      url: "/placeholder.webp",
      title: "Инновационный метод предупреждения",
      text: "Интегрировали самые современные техники для интерактивного обучения цифровой грамотности"
    }
  ];

  return (
    <main className="flex gap-2 p-1 h-[85dvh] min-h-full">
      <Card classes="flex-1 h-full" contentClasses="flex flex-col gap-1 overflow-y-scroll overflow-x-hidden">
        <h1 className="text-3xl p-1 mr-1 border rounded">ИНВЕСТИРУЕМ В ВАШУ БЕЗОПАСНОСТЬ</h1>
        <h2 className="text-xl mr-1 text-center">Что мы разберем?</h2>
        <div className="grid grid-cols-3 gap-3 pr-1">
          {data.map((item, index) => (
            <TaskCard key={"taskCard-"+index} src={item.src} title={item.title} index={index+1} desc={item.desc} />
          ))}
        </div>
      </Card>
      <div className="grid grid-rows-3 flex-1 gap-1">
        <Carousel srcs={srcs} classes="row-span-2" />
        <Card contentClasses=" flex flex-col gap-2 items-center justify-center" wave="true">
          <h1 className="text-2xl">Готовы проверить свои знания в кибербезопасности?</h1>
          <div className="flex gap-2 items-center">
            <h2>Тогда отправляйтесь в увлекательное путешествие</h2>
            <button className="flex gap-1 items-center primary text-(--background)">
              <ChevronRight size={48} />
            </button>
          </div>
        </Card>
      </div>
      
    </main>
  );
}
