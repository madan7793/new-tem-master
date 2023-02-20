import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useSelector } from "react-redux";
import './footer.scss'

const Footer = () => {
    const {storeData} = useSelector((state) => state.store)
    const {shopName, settings} = storeData
    const {footer} = settings
    const {about, address, copyrightMessage} = footer

    return(
        <div className="footer-container">
            <div className="footer-top-section">
                <div className="about">
                    <h1 className="about-heading">{`About ${shopName.toUpperCase()}`}</h1>
                    <p className="contact-description">{about.slice(0, 150)}</p>
                </div>
                <div className="address-container">
                    <h1 className="address-heading">Address</h1>
                    <p className="address">{address}</p>
                    <a href="/terms" className="terms-heading">Terms And Conditions</a>
                    <a href="/msme" className="msme-certificate">MSME Certificate</a>
                </div>
            </div>
            <hr className="line"/>
            <div className="footer-bottom-section">
                <p className="copy-right">{copyrightMessage}</p>
                <div className="social-media-icons-container">
                    <AiOutlineInstagram className="insta social-icon" />
                    <AiFillYoutube className="youtube social-icon" />
                    <BsFacebook className="facebook social-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer