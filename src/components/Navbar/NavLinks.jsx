import React from 'react'
import { Link } from 'react-scroll';

const NavLinks = () => {
  const Links = [
    {
      name: 'Platform',
      path: 'platform'
    },
    {
      name: 'Developers',
      path: 'developers'
    },
    {
      name: 'Community',
      path: 'community'
    },
    {
      name: 'About',
      path: 'about'
    }
  ]
  return (
    <>
      {
        Links.map((link, index) => (
          <li key={index} className='list_item'>
            <Link to={link.path} smooth={true} duration={500}>
              {link.name}
            </Link>
          </li>
        ))
      }
    </>
  )
}

export default NavLinks