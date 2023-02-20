import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import './teamMember.scss'

const TeamMember = ({memberData}) =>{
    const {imgUrl, name, role, facebookUrl, instaUrl, linkdinUrl} = memberData
    return(
        <div className="team-member-container">
            <div className="img-bg-container">
                {(imgUrl === '' || imgUrl === null || imgUrl === undefined) ? <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="about" className="about-img" /> : <img src={imgUrl} alt="about" className="about-img" />} 
            </div>
            <div className="member-details">
                <h1 className="member-name">{name}</h1>
                <p className="member-role">{role}</p>
                <div className="shocial-accounts">
                    <a href={facebookUrl} target='_blank' rel="noopener noreferrer"><BsFacebook className="about-social-accounts facebook" /></a>
                    <a href={instaUrl} target='_blank' rel="noopener noreferrer"><AiOutlineInstagram className="about-social-accounts insta" /></a>
                    <a href={linkdinUrl} target='_blank' rel="noopener noreferrer"><BsLinkedin className="about-social-accounts linkdin" /></a>
                </div>
            </div>
        </div>
    )
}

export default TeamMember