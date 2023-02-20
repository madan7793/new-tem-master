import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {getSubdomains} from './fetchCalls/fetchRoutes';
import './App.css';
import LoginSheredLayout from './components/Login/LoginLayout';
import LoginBtns from './components/Login/loginBtns';
import EmailLogin from './components/Login/EmailContainer';
import SignupSheredLayout from './components/SignUp/signupSheredLayout';
import SignupBtns from './components/SignUp/signupBtns';
import EmailSignup from './components/SignUp/signupContainer';
import Wishlist from './components/Wishlist/Wishlist';
import Loader from './components/Loading';
import Cart from './components/Cart/cart'
const  SharedLayout = React.lazy(() => import('./components/SharedLayout/sharedLayout')) ;
const Product = React.lazy(() => import('./components/Product/product'));
const Profile = React.lazy(() => import('./components/Profile/profile'));
const StaticHome = React.lazy(() => import('./components/StaticHomeComponents/StaticHome'));
const Home = React.lazy(() => import('./components/Home/home'));
const PrivacyPolicy = React.lazy(() => import('./components/StaticHomeComponents/PrivacyPolicy'));
const ContactUs = React.lazy(() => import('./components/StaticHomeComponents/Home/ContactUs'));



const loadingConst = {
    loading: 'LOADING',
    success: 'SUCCESS',
    failed: 'FAILED'
}

function App() {
	const [subdomain, setSubdomain] = useState(null);
  const [loadingStatus, setStatus] = useState('LOADING')
  const [subdomains, setSubdomains] = useState([])

  const getSubdomainData = async () => {
    setStatus('LOADING')
    try{
      const subdomainsresponse = await getSubdomains()
      const subdomainsArray =  subdomainsresponse.data.response.map(each => each.subdomain)
      setSubdomains(subdomainsArray)
      setStatus('SUCCESS')
    }catch(e){
      setStatus('FAILED')
    }
    
  }

  const getDomainDetails = async () => {
    setStatus(true)
    await getSubdomainData()
		const host = window.location.host; // gets the full domain of the app
		const arr = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);
		if (arr.length > 0) setSubdomain(arr[0]);
  }

  useEffect(() => {
    getDomainDetails()
	}, []);

  const renderFailureView = () => (
        <div>
            <h1>Something Was Wrong Please Tryagain</h1>
            <button type="button" onClick={() => getSubdomainData} >Try Again</button>
        </div>
    )

    const renderSubdomains = () => {
      if(subdomains.includes(subdomain)){
        return (
          <>
            <Route path='/' element={<SharedLayout/>} >
              <Route index element={<Home />} />
              <Route path='product/:id' element={<Product/>} />
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSheredLayout/>}>
              <Route index element={<LoginBtns />} />
              <Route path='email' element={<EmailLogin />} />
            </Route>
            <Route path='/signup' element={<SignupSheredLayout />}>
              <Route index element={<SignupBtns />} />
              <Route path='email' element={<EmailSignup />} />
            </Route>
          </>
        )
      }else{
        return <Route path='/' element={<h1>404 : Not Found</h1>} />
      }
    }

  const renderSuccessView = () => {
    return(
      <React.Suspense fallback={<div className='loading-container'><Loader /></div>} >
        <Routes>
          {subdomain ? renderSubdomains() : (
            <Route path='/'>
              <Route index element={<StaticHome />} />
              <Route path='policy' element={<PrivacyPolicy />} />
              <Route path='contactus' element={<ContactUs />} />
            </Route>)}
        </Routes>
      </React.Suspense>
      
    )
  }

  const renderLoadingView = () => (
        <div className='loading-container'>
            <Loader />
        </div>
    )

  const renderProduct = () => {
        switch (loadingStatus) {
            case loadingConst.loading:
                return renderLoadingView()
            case loadingConst.success:
                return renderSuccessView()
            case loadingConst.failed:
                return renderFailureView()
            default:
                break;
        }
    }

  return (
    <>
      {renderProduct()}
    </>
  )
}

export default App;
