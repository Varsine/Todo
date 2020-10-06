export const productData = [
  {
    name: "Regular",
    price: 14.9,
  },
  {
    name: "Regular Plus",
    price: 19.9,
  },
  {
    name: "Premium",
    price: 24.9,
  },
  {
    name: "Premium Plus",
    price: 29.9,
  },
]

productData.map((val) => {
  // const str = val.price.toString()
  // let x = str + `00`
  return Number(val.price+ "00").toFixed(3)

  // return Number(val.price.toFixed(3))
})
