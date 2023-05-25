import React from "react"
import CommonAccessMain from "../CommonAccessMain/CommonAccessMain"
import {Navigate, Route,Routes} from "react-router-dom"
import AuthorizationAccess from "../AuthorizationAccess/AuthorizationAccess"
import SearchPageMain from "../SearchPageMain/SearchPageMain"
import ResultPageMain from "../ResultPageMain/ResultPageMain"
import { useSelector } from "react-redux"

const Main = () => {
  let companyInfo = useSelector(state => state.profile.companyInfo)
  return companyInfo ? (
        <Routes> 
          <Route path="/" element={<CommonAccessMain />}/>
          <Route path="/search" element={<SearchPageMain/>}/>
          <Route path="/result" element={<ResultPageMain/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
  ) : (
    <Routes>
        <Route path="/" element={<CommonAccessMain />}/>
        <Route path="/login" element={<AuthorizationAccess/>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Main