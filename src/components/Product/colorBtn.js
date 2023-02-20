import { useEffect } from "react"
import { useSelector } from "react-redux"

const ColorBtn = ({colorCode, active, setOutOfStock, activeSize, setActiveColor}) => {
    const classProp = (active === colorCode) ? 'color-btn active' : 'color-btn'
    const urlArray = window.location.href.split('/')
    const productId = urlArray[4]
    const {storeData} = useSelector((state) => state.store)
    const {products} = storeData
    const [product] = products.filter(each => each.productId === productId)
    const {stock} = product.variants[activeSize][colorCode]

    useEffect(() => {
        if (stock < 1){
            setOutOfStock(true)
        }
    })
    

    return(
        <button type="button" style={{backgroundColor: colorCode}} className={classProp} onClick={() => setActiveColor(colorCode)}></button>
    )
}

export default ColorBtn