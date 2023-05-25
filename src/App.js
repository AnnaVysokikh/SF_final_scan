import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {getCompanyInfo} from './store/profile'
import React, {useEffect} from 'react'
import { setScreenWidth } from './store/sizeScreen'

function App() {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch()

  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })

  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken && !companyQuantityInfo){
      dispatch(getCompanyInfo())
    }
  },[dispatch, companyQuantityInfo])

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )}

export default App;
