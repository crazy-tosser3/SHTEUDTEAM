interface productData{
  src:string,
  title:string,
  previousPrice:string,
  currentPrice:string
}

const ProductCard = ({src, title, previousPrice, currentPrice}:productData) => {
  return (
    <div className="p-1 gradient border rounded flex flex-col gap-1">
      <img src={src} className="w-full aspect-square object-cover rounded" />
      <h1 className="text-xl">{title}</h1>
      <h3 className="ghost text-right">Старая цена {previousPrice}р</h3>
      <h2 className="text-3xl text-right text-(--accent)">{currentPrice}р</h2>
    </div>
  )
}

export default ProductCard