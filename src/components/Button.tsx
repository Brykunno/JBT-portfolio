import React from 'react'
import type  { ReactNode } from 'react'
import "../styles/button.css"

interface ButtonProps{
    children: ReactNode,
    className?: string,
    onClick?: ()=>void,
    type?: 'button'|'submit'

}

function Button({children, onClick, className,type="button"}:ButtonProps) {
  return (
        <button className={`${className} customButton`} onClick={onClick} type={type} >
            {children}
        </button>
  )
}

export default Button
