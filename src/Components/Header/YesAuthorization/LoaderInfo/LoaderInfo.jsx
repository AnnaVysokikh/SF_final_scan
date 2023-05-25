import React from 'react'
import css from "./LoaderInfo.module.css"
import { RotatingLines } from  'react-loader-spinner'

const LoaderInfo = () => {
  return (
    <div className={css.loader}>
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="60"
            visible={true}
        />
    </div>
  )
}

export default LoaderInfo