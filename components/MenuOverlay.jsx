import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links, close }) => {
  return (
    <ul className='flex flex-col py-4 items-center transform transition-all duration-300'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} func={close} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay