import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderItem from "../OrderItem/orderItem";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginStatus, setUserData } from "../../fetures/user/userSlice";
import { getUserData, removeAddress, updateUserData } from "../../fetchCalls/fetchRoutes";
import emptyCart from '../../images/emptycart.png'
import './profile.scss'
import SavedAddress from "./addressItem";

const contentConst = {
  profile: "PROFILE",
  editForm: "EDIT",
  history: "HISTORY",
  address: "ADDRESS"
}

const Profile = () => {
  const {userData} = useSelector((state) => state.user)
  const [activeTab, setActiveTab] = useState("PROFILE")
  const { name, phoneNumber, email, gender, DOB, location, alternateNumber, address, orders } = userData
  const copyData = userData
  const [formData, setFormData] = useState(copyData)
  const [loadingstatus, setLoadingStatus] = useState(false)
  const [error, setError] = useState("")
  const addressKeys = Object.keys(address)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function loadUserData (){
      const {data} = await getUserData(email)
      data.orders.reverse()
      dispatch(setUserData(data))
  }

  useEffect(() => {
    loadUserData()
  }, [])

  const onClickDelete = (addressKey) => {
    removeAddress({email, addressKey})
  }

  const onClickLogout = () => {
    dispatch(changeLoginStatus())
    dispatch(setUserData({}))
    navigate('/')
  }

  const saveProfileChanges = async (e) => {
    e.preventDefault()
    setError("")
    setLoadingStatus(pre => true)
    if (loadingstatus !== true){
      const userData = {email: email, updatedData: formData}
      try {
        await updateUserData(userData)
        setLoadingStatus(false)
        setActiveTab(contentConst.profile)
        dispatch(setUserData(formData))
      } catch ({data}) {
        setError("Something was wrong")
        setLoadingStatus(false)
      }
    }
  }

  const onClickAddress = () => {
    setActiveTab(contentConst.address)
  }

  const onClickHistory = () => {
    setActiveTab(contentConst.history)
  }

  const onClickEdit = () => {
    setActiveTab(contentConst.editForm)
  }

  const onClickAccount = () => {
    setActiveTab(contentConst.profile)
  }

    const renderAddress = () => {
    return(
      <div className="saved-addresses-bg-container">
        <ul className="saved-addresses-container">
          {addressKeys.map(each => <SavedAddress addressData={address[each]} addressKey={each} key={each} />)}
        </ul>
        <button type="button">ADD ANOTHER ADDRESS</button>
      </div>
    )
  }

    const renderHistory = () => {
    return(
      <div className="orders-container">
        <h1 className="orders-h">MY ORDER HISTORY ({orders.length} Items)</h1>
        {(orders.length !== 0) ? (
        <ul className="orders-container">
            {orders.map((eachOrder, index) => <OrderItem orderData={eachOrder} key={index} />)}
        </ul>) : 
        <div className="empty-orders">
          <img src={emptyCart} alt="empty cart" className="empty-cart" />
          <h1 className="empty-cart-h">You haven't placed an Order.</h1>
          <p className="empty-cart-p">Lets place some orders.</p>
          <Link to="/"><button type="button" className="empty-cart-btn">GO TO SHOP</button></Link>
        </div>}
      </div>
    )
  }

    const renderEditForm = () => {
    return(
      <div className="edit-profile-container">
        <h1 className="edit-profile-h">Edit Profile</h1>
          <form className="edit-form-container" onSubmit={saveProfileChanges}>
            <label htmlFor="phone">Mobile Number</label>
            <input type="number" id="phone" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}  />
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}  />
            <label htmlFor="email">E-Mail Address</label>
            <input type="email" disabled id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}  />
            <div className="gender-container">
              <button className={`gender-btn ${formData.gender === "MALE" && "active"}`} type="button" onClick={() => setFormData({...formData, gender: "MALE"})}>Male</button>
              <button className={`gender-btn ${formData.gender === "FEMALE" && "active"}`}  type="button" onClick={() => setFormData({...formData, gender: "FEMALE"})}>Female</button>
            </div>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" value={formData.DOB} onChange={(e) => setFormData({...formData, DOB: e.target.value})}  />
            <label htmlFor="phone">Location</label>
            <input type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}  />
            <label htmlFor="phone">Alternate Mobile Number</label>
            <input type="number" value={formData.alternateNumber} onChange={(e) => setFormData({...formData, alternateNumber: e.target.value})}  />
            <p className="error-note">{error}</p>
            {loadingstatus ? <button className="form-btn" >UPDATING..</button> : 
            <div className="edit-form-btns">
              <button type="button" className="form-btn cancel-btn" onClick={() =>{ setActiveTab(contentConst.profile); setFormData(userData)}}>Cancel</button>
              <button className="form-btn save-btn"  type="submit">Save</button>
            </div>}
          </form>
      </div>
    )
  }

  const renderProfile = () => {
    return(
      <div className="profile-container">
        <h1 className="profile-h">MY PROFILE</h1>
        <div className="profile-details">
          <div className="keys">
            <p className="key">Full Name</p>
            <p className="key">Mobile Number</p>
            <p className="key">Email ID</p>
            <p className="key">Gender</p>
            <p className="key">Date of Birth</p>
            <p className="key">Location</p>
            <p className="key">Alternate Mobile</p>
          </div>
          <div className="values">
            <p className="value">{name ? name : "- not added -"}</p>
            <p className="value">{phoneNumber ? phoneNumber : "- not added -"}</p>
            <p className="value">{email ? email : "- not added -"}</p>
            <p className="value">{gender ? gender : "- not added -"}</p>
            <p className="value">{DOB ? DOB : "- not added -"}</p>
            <p className="value">{location ? location : "- not added -"}</p>
            <p className="value">{alternateNumber ? alternateNumber : "- not added -"}</p>
          </div>
        </div>
        <div className="edit-btn-container">
          <button type="button" className="edit-btn" onClick={onClickEdit}>Edit</button>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case contentConst.profile:
        return renderProfile();
      case contentConst.editForm:
        return renderEditForm()
      case contentConst.history:
        return renderHistory();
      case contentConst.address:
        return renderAddress();
      default:
        break;
    }
  }

  return (
    <div className="profile-bg-container">
      <div className="tabs-bg-container">
        <div className="tabs-container">
          <button type="button" onClick={onClickAccount} className={( activeTab === contentConst.profile || activeTab === contentConst.editForm ) ? "tab active-tab" : "tab"}>PROFILE</button>
          {/* <button type="button" onClick={onClickAddress} className={(activeTab === contentConst.address) ? "tab active-tab" : "tab"}>ADDRESS</button> */}
          <button type="button" onClick={onClickHistory} className={(activeTab === contentConst.history) ? "tab active-tab" : "tab"}>HISTORY</button>
        </div>
        <button type="button" className="logout-btn" onClick={onClickLogout}>Logout !</button>
      </div>
      <hr className="p-vertical-line" />
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  )
}

export default Profile