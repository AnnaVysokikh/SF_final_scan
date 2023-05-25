import React from 'react'
import { useSelector } from 'react-redux'
import css from "./CompanyInfo.module.css"

const CompanyInfo = () => {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  return (
    <div className={css.company}>
      <div >
        <span className={css.company__name}>Использовано компаний </span>
        <span className={css.black}>{companyQuantityInfo.eventFiltersInfo.usedCompanyCount}</span>
      </div>
      <div>
        <span className={css.company__name}>Лимит по компаниям </span>
        <span className={css.green}>{companyQuantityInfo.eventFiltersInfo.companyLimit}</span>
      </div>
    </div>
  )
}

export default CompanyInfo