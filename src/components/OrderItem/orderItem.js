import add from "date-fns/add"
import "./orderItem.scss"

const OrderItem = ({orderData}) => {
    const {orderId, productImage, productName, shopId, totalCartValue, productCount, orderStatus, address, date} = orderData
    const expectedDeleiverDates = add(new Date(date), {days: 7}).toDateString().split(" ")
    const backgroundColor = orderId.slice(30, )

    return(
        <li className="order-item" style={{backgroundColor: `#${backgroundColor}10`}}>
            <div className="product-details">
                <p className="product-name">{productName}</p>
                <p className="shop">Sold by : {shopId}</p>
            </div>
            <div className="order-status-container">
                <p className="order-placed-at" style={{color: `${orderStatus !== "CANCELED" ? "#00AB41" : "#A81601"}` }}>{`Deliver on ${expectedDeleiverDates[2]} ${expectedDeleiverDates[1]} ${expectedDeleiverDates[3]}`}</p>
            </div>
            <img src={productImage} alt="order-item" className="product-img" />
        </li>
    )
}

export default OrderItem