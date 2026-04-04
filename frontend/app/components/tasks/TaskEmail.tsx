import Mail from "./email components/Mail"

const TaskEmail = () => {
  const data = [
    {
      title: "Вы выиграли 500 000 рублей!",
      desc: "123",
      action1: "Открыть письмо",
      action2: "Нажать на ссылку",
      action3: "В спам",
      rightAnswer: 3,
      difficulty: 1
    }
  ]
  
  return (
    <div>
      <h1 className="text-xl">ПОЧТА</h1>
      {
        data.map((item, index) => (
          <Mail key={index} title={item.title} desc={item.desc} action1={item.action1} action2={item.action2} action3={item.action3} rightAnswer={item.rightAnswer} difficulty={item.difficulty} />
        ))
      }
    </div>
  )
}

export default TaskEmail