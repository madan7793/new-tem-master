import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getStoreData } from "../../fetures/store/storeSlice"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Loader from "../Loading"
import { Outlet } from "react-router-dom"
import './sharedLayout.scss'



const loadingConst = {
    success: 'SUCCESS',
    loading: 'LOADING',
    failed: 'FAILED'
}

const SharedLayout = () => {
    const {loadingStatus} = useSelector((state) => state.store)
    const dispatch = useDispatch()
    const host = window.location.host;
	const [shopId] = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);

    const fetchShopData = async () =>{
        try{
            dispatch(getStoreData(shopId))
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchShopData()
    }, [])

    const renderFailureView = () => (
        <div>
            <h1>Something Was Wrong Please Tryagain</h1>
            <button type="button" onClick={() => fetchShopData} >Try Again</button>
        </div>
    )

    const renderSuccessView = () => (
                <>
                    <Header />
                    <Outlet />
                    <Footer />
                </>
    )

    const renderLoadingView = () => (
        <div className="loading-container">
            <Loader />
        </div>
    )

    const renderContent = () => {
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

    return(
        <div className="home-container">
            {renderContent()}
        </div>
    )
}

export default SharedLayout