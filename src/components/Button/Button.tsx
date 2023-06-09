import React from 'react'
import './Button.css'

function Button(props:any) {
    const {variant='primary',children,onClick,...rest}=props
  return (
    <button className={`button ${variant}`} {...rest} onClick={onClick}>{children}</button>
  )
}

export default Button;