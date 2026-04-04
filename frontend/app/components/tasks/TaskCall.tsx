import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react"

const dialoque = [
  ["Здраствуйте,","вас беспокоит","служба","банка..."]
]

const TaskCall = () => {

  const [part, setPart] = useState(0);
  const [phrase, setPhrase] = useState(0);

  const handleRepeat = () => {
    for (let i = 0;i<dialoque[part].length;i++){
      setTimeout(() => setPhrase(i), i*1000)
    }
  }

  return (
    <div className="flex gap-2 items-center h-full">
      <div className="flex-1 grid grid-rows-4 items-center justify-center h-full w-1/3 rounded m-auto bg-(--background) p-1">
        <h1 className="w-full text-center">Служба банка</h1>
        <div className="accent-gradient aspect-square highlight btn w-1/2 m-auto" onClick={handleRepeat} />
        <h1 className="ghost">Нажмите для повтора</h1>
        <div className="flex gap-2 p-1 items-center justify-between">
          <button>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="w-full border p-1 rounded flex-1 h-full flex flex-col items-center justify-between">
        <h1 className="w-full text-center p-1 bg-(--background) rounded">{dialoque[part][phrase]}</h1>
        <div className="flex gap-2 items-center">
          <button>подозрительно</button>
          <button>не подозрительно</button>
        </div>
        
      </div>
    </div>
  )
}

export default TaskCall