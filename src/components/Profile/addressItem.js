import { useSelector } from "react-redux"

const SavedAddress = ({addressData, addressKey}) =>{
    const {addressType, fullAddress} = addressData
    const addressArray = fullAddress.split(',')
    const {userData} = useSelector(state => state.user)
    const {email} = userData

    // const deleteAddress = () => {
        
    // }

    return(
        <li className="saved-address-item">
            <div className="saved-address-details">
                <p className="name">{addressArray[0]}</p>
                <p className="address-number">{addressArray[1]},</p>
                <p className="address">{addressArray[2]}, {addressArray[3]},</p>
                <p className="address">{addressArray[4]},</p>
                <p className="address">{addressArray[5]}  {addressArray[6]}.</p>
                <div className="address-type">{addressType}</div>
                <div>
                    <button type="button">Remove</button>
                    <button type="button">Edit</button>
                </div>
            </div>
        </li>
    )
}

export default SavedAddress