import { useEffect } from "react"
import { useSelector } from "react-redux"

const SizeBtn = ({BtnTxt, setActiveSize, setOutOfStock, active}) => {
    const classProp = (active !== BtnTxt) ? 'size-btn' : 'size-btn active'
    const urlArray = window.location.href.split('/')
    const productId = urlArray[4]
    const {storeData} = useSelector((state) => state.store)
    const {products} = storeData
    const [product] = products.filter(each => each.productId === productId)
    const variants = product.variants[BtnTxt]
    const keys = Object.keys(variants)
    let total = 0
    keys.forEach(each => {
        total += variants[each].stock
    })

    useEffect(() => {
        if (total < 1){
            setOutOfStock(true)
        }
    })
    

    return(
        <button type="button" className={classProp} onClick={() =>  setActiveSize(BtnTxt)}>{BtnTxt}</button>
    )
}

export default SizeBtn