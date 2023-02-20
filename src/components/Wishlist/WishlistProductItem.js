import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {RxCross2} from "react-icons/rx";
import { removeFromWishlist } from "../../fetures/cart/cartSlice"
import imageNotAvailable from '../../images/picture-not-available.jpg'
import './WishlistProduct.scss'


const ProductItem = (props) => {
    const { productData } = props
    const { productId, productImages, productName, productCategory, productPrice, productdiscountPrice } = productData
    const path = `/product/${productId}`
    const dispatch = useDispatch()

   
    return (
        <li className='w-product-container'>
            <div className="wishlistbuttons">
                <RxCross2  className='cross-icon' onClick={() => dispatch(removeFromWishlist(productId))} /> 
            </div>
            <Link to={path}>
                <div className="w-img-container">
                    {productImages.length !== 0 ? <img src={productImages[0]} alt="Product" className='w-product-img' /> : <img src={imageNotAvailable} alt="Product" className='product-img' />}
                </div>
            </Link>
            <div className='w-product-details-container'>
                <div className='w-product-name-description-container'>
                    <div className='w-name-description-container'>
                        <h1 className='w-product-name'>{productName}<br></br><span className="w-product-category">{productCategory}</span></h1>
                    </div>

                </div>
                <div>
                    {(productPrice && productdiscountPrice) && (
                        <div className='w-price-container'>
                            <p className='w-product-normal-price'>₹ {productPrice}</p>
                            <h1 className='w-product-price'>₹ {productdiscountPrice}</h1>
                        </div>
                    )}
                    {(productPrice && !productdiscountPrice) && <h1 className='w-product-price' style={{fontSize:"1.3vw"}}>₹ {productPrice}</h1>}
                    {(!productPrice && productdiscountPrice) && <h1 className='w-product-price' style={{fontSize:"1.3vw"}}>₹ {productdiscountPrice}</h1>}
                    <button  type="button"  className="w-cart" >ADD TO BAG</button>
                </div>
            </div>
        </li>
    )
}

export default ProductItem