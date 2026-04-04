'use client'

interface mailData{
  title:string,
  desc:string,
  action1:string,
  action2:string,
  action3:string,
  rightAnswer:number,
  difficulty:number
}

const Mail = ({title, desc, action1, action2, action3, rightAnswer, difficulty}:mailData) => {
  return (
    <div className="border flex flex-col gap-2 w-full justify-between">
      <h1></h1>
    </div>
  )
}

export default Mail