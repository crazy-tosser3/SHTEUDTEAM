import clsx from "clsx"

const Hint = ({ text="Успешно", status="success" }:any) => {
  return (
    <div className="z-9999 flex gap-1 items-center pr-1 rounded-[999px] overflow-clip fixed top-1 left-1 glass border">
      <div className={clsx("h-[15px] p-1 layer aspect-square rounded-full animate-pulse", status === "error" ? "error" : status === "info" ? "info" : "success")} />
      {text}
    </div>
  )
}

export default Hint