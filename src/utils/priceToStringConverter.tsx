export default (price: number, count: number): string => {
  const priceString = (price * count).toString()

  switch (priceString.length) {
    case 0:
      return ""

    case 4:
      return (
        priceString.slice(0, 1) + "," + priceString.slice(1, priceString.length)
      )

    case 5:
      return (
        priceString.slice(0, 2) + "," + priceString.slice(2, priceString.length)
      )

    case 6:
      return (
        priceString.slice(0, 3) + "," + priceString.slice(3, priceString.length)
      )

    case 7:
      return (
        priceString.slice(0, 1) +
        "," +
        priceString.slice(1, 4) +
        "," +
        priceString.slice(4, priceString.length)
      )

    default:
      return priceString
  }
};