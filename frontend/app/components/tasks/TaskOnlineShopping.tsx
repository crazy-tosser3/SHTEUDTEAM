import { Globe } from "lucide-react"
import CheckBox from "../CheckBox"
import ProductCard from "./shopping components/ProductCard"

const TaskOnlineShopping = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="border gradient p-1 rounded">
        <div className="p-1 rounded border w-1/2 m-auto flex items-center gap-2">
          <Globe />
          <h1 className="border px-1 rounded">http://DOVERlE.com</h1>
          <h1>Магазин "доверие"</h1>
        </div>
      </div>
      <h1 className="text-3xl text-center">Магазин "доверие"</h1>
      <div className="grid grid-cols-4">
        <ProductCard src="/placeholder.webp" title="Playstation 5" previousPrice="90 000" currentPrice="10 000" />
      </div>
      <h1 className="text-2xl">Сайт закончился, что было подозрительно?</h1>
      <div className="border p-1 rounded-[100dvh] flex gap-2 items-center">
        <CheckBox onClickFunc={() => {}} />
        <h1>Адрес сайта</h1>
      </div>
      <div className="border p-1 rounded-[100dvh] flex gap-2 items-center">
        <CheckBox onClickFunc={() => {}} />
        <h1>Заголовок</h1>
      </div>
      <div className="border p-1 rounded-[100dvh] flex gap-2 items-center">
        <CheckBox onClickFunc={() => {}} />
        <h1>Количество карточек в строке</h1>
      </div>
      <div className="border p-1 rounded-[100dvh] flex gap-2 items-center">
        <CheckBox onClickFunc={() => {}} />
        <h1>Цены</h1>
      </div>
      <div className="border p-1 rounded-[100dvh] flex gap-2 items-center">
        <CheckBox onClickFunc={() => {}} />
        <h1>Оформление карточек</h1>
      </div>
      <div className="border p-1 rounded-[100dvh] flex gap-2 items-center">
        <CheckBox onClickFunc={() => {}} />
        <h1>Фотографии</h1>
      </div>
      <div className="border p-1 rounded-[100dvh] flex gap-2 items-center">
        <CheckBox onClickFunc={() => {}} />
        <h1>Названия товаров</h1>
      </div>
      <button className="primary w-1/2 m-auto">
        отправить
      </button>
    </div>
  )
}

export default TaskOnlineShopping