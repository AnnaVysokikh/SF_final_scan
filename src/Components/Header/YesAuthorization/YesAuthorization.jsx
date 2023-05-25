import React from 'react'
import css from "./YesAuthorization.module.css"
import { useSelector } from 'react-redux'
import CompanyInfo from './CompanyInfo/CompanyInfo'
import Avatar from './Avatar/Avatar'
import LoaderInfo from './LoaderInfo/LoaderInfo'

const YesAuthorization = () => {

const companyInfo = useSelector(state => state.profile.companyInfo)
return (
  <div className={css.accountPanel}>
      {companyInfo ? <CompanyInfo /> : <LoaderInfo />}
    <div className={css.avatar}>
      <Avatar />
    </div>
  </div>
  )
}

export default YesAuthorization