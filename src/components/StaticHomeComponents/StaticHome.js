import { useState } from 'react'
import Logo from '../../images/navLogo.png'
import first from '../../images/1.png'
import second from '../../images/2.png'
import three from '../../images/3.png'
import four from '../../images/4.png'
import footerLogo from '../../images/HRILogoFooter.png'
import { HiChevronDoubleRight } from "react-icons/hi";
import { FaStar, FaUserTie, FaQuoteLeft, FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsShieldLockFill, BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import { ImLinkedin2 } from "react-icons/im";
import './static.scss'

const StaticHome = () => {
  const [menu, setMenu] = useState(false)

  const onClickBurgerMenu = () => {
    setMenu(!menu)
  }

  return(
      <div className='static-page-bg-container'>
        <nav className='navbar'>
          <img src={Logo} alt="logo" className='logo' />
          <div className='tabs-container'>
            <a href='#home' className='link'>Home</a>
            <a href='#features' className='link'>Features</a>
            <a href='#app' className='link'>The app</a>
            <a href='#about' className='link'>Blogs</a>
          </div>
          <GiHamburgerMenu className='burger-menu' onClick={onClickBurgerMenu} />
        </nav>
        {menu && (
          <div className='tab-items'>
            <a href='#home' className='link tab'>Home</a>
            <a href='#features' className='link tab'>Features</a>
            <a href='#app' className='link tab'>The app</a>
            <a href='#about' className='link tab'>Blogs</a>
          </div>
        )}
        
        <div className='blog-1' id="home">
          <div className='blog-1-description'>
            <h1 className='blog-h-1'>naina.me Your gateway<br /><span className='blog-h-b-1'>to E-Commerce</span></h1>
            <p className='blog-p-1'>Where establishing an online store becomes smooth</p>
            <a href="https://play.google.com/store/apps/details?id=com.HRI.hri" className='launch-btn link'>DOWNLOAD NOW <HiChevronDoubleRight className='arrow-icon' /></a>
          </div>
          <img src={first} alt="home" className='blog-1-img' />
        </div>
        <div className='blog-2'>
          <h1 className='blog-2-h'><FaQuoteLeft className='blog-h-icon' /><br />Reinventing<br />your Store<br />Building<br />Journey</h1>
          <div className='blog-2-description-container'>
            <h1 className='sub-h'>Want to know how easily you can build an online store?</h1>
            <p className='blog-2-description'>By using our app today, you can:<br/>
                Build your own store within minutes..<br />
                A few clicks, and you are visible to the eyes of the masses.<br />
                Add items to your store, and we will do the rest for you.
            </p>
            <button type='button' className='join-now-btn'>Join Now <HiChevronDoubleRight className='arrow-icon' /></button>
          </div>
        </div>
        <div className='blog-3'>
          <h1 className='blog-3-h' id="features">Features</h1>
          <div className='blog-3-container'>
            <div className='blog-3-cont'>
                <FaStar className='blog-3-icon' />
                <h1 className='blog-3-s-h'>High Speed<br />Performance</h1>
              <p className='blog-3-p'>We assure you a hassle free web app building experience, with minimal wait time and maximum productivity.</p>
            </div>
            <div className='blog-3-cont'>
                <FaUserTie className='blog-3-icon' />
                <h1 className='blog-3-s-h'>24/7 Online<br />Support</h1>
                <p className='blog-3-p'>Our team will be present 24/7 to help you build your store, resolve your queries related to our plugins and a lot more.<br />We make sure you are just a click away from us!</p>
            </div>
            <div className='blog-3-cont'>
                <BsShieldLockFill className='blog-3-icon' />
                <h1 className='blog-3-s-h'>Easy to Use<br />Services</h1>
              <p className='blog-3-p'>You just have to click your way out and our editor will help you build your own store in minutes. <br />From a wide variety of templates you can select and create your dream store.</p>
            <div/>
          </div>
        </div>
      </div>
      <div className='blog-4'>
        <div className='blog-4-div colored' id="app">
          <div className='blog-4-description-container'>
            <h1 className='blog-4-h'>How the app works</h1>
            <h1 className='blog-4-s-h'>Robust Web Editor</h1>
            <p className='blog-4-s-p'><GoPrimitiveDot className='dot' /> Our web editor enables users to swiftly create their own custom websites and customize various elements, such as the header and banner, to fit their needs.<br /><GoPrimitiveDot />  We also provide order tracking and payment integration, making it easy to manage orders and payments.</p>
          </div>
          <img src={second} alt="screen" className='screen' />
        </div>
        <div className='blog-4-div'>
          <img src={three} alt="screen" className='screen' />
          <div className='blog-4-description-container'>
            <h1 className='blog-4-s-h'>All in one dashboard</h1>
            <p className='blog-4-s-p'><GoPrimitiveDot className='dot' /> Our all-in-one dashboard offers an efficient tool for users to view and manage their site's settings and traffic from a single, user-friendly interface.<br /><GoPrimitiveDot /> It provides all the necessary tools in one place, making it easy for users to handle everything they need for their website.</p>
          </div>
        </div>
        <div className='blog-4-div colored'>
          <div className='blog-4-description-container'>
            <h1 className='blog-4-s-h'>Get payments done by QR code</h1>
            <p className='blog-4-s-p'><GoPrimitiveDot className='dot' /> We also provide default order tracking features and a custom digital identity to enhance your experience with us.
            <br /><GoPrimitiveDot className='dot' /> Our app makes it easy and hassle-free to get your online store up and running in no time.</p>
          </div>
          <img src={four} alt="screen" className='screen' />
        </div>
      </div>
      <div className='blog-5'>
        <div className='blog-5-h-container'>
          <FaQuoteLeft className='blog-5-icon' /><h1 className='blog-5-h'>Our Story</h1>
        </div>
        <div className='blog-5-content' id="about">
          <h1 className='blog-5-s-h'>Who are we?</h1>
          <p className='blog-5-p'><GoPrimitiveDot className='dot'  /> We, at Humans Of Rural India, aim to build SaaS-based products for rural artisans, self-help groups, and farmer producer organisations to reach directly to their customers without any middlemen.<br />
            <GoPrimitiveDot  className='dot' /> This endeavour is a tribute to Mahatma Gandhi’s vision of Gram Swaraj, which encourages the conversion of every village into a self-sufficient autonomous entity.<br />
            </p>
        </div>
      </div>
      <footer className='footer-container'>
        <div className='footer-left-container'>
          <img src={footerLogo} alt="logo" className='footer-logo' />
          <p className='footer-company-data'>Siyag Rural Market Private Limited<br />CIN : U52100RJ2021PTC077111</p>
        </div>
        <div className='footer-right-container'>
          <p className='footer-email'>humansofruralindia@gmail.com</p>
          <p className='footer-address'>7 , Siyag House Gotan Tehsil<br />Merta 342902</p>
          <div className='footer-social-accounts'>
            <BsInstagram className='social-icon' />
            <ImLinkedin2 className='social-icon' />
            <FaFacebookF className='social-icon' />
            <FaTwitter className='social-icon' />
          </div>
          <div className='footer-docs'>
            <a href='/policy' className='policy'>Privacy Policy</a>
            <a href='/contactus'  className='policy'>Contact us</a>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default StaticHome