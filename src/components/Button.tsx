
import type  { ReactNode } from 'react'
import "../styles/button.css"


interface ButtonProps{
    children: ReactNode,
    className?: string,
    onClick?: ()=>void,
    type?: 'button'|'submit',
    icon?: ReactNode

}

function Button({children, onClick, className,type="button",icon}:ButtonProps) {
  return (
        <button className={`${className} customButton`} onClick={onClick} type={type} >
          <div className='flex gap-2'>
            <p>  {children}</p> {icon}
          </div>
          
        </button>
  )
}

export default Button
