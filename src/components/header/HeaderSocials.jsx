import React from 'react'
import { FaGithub } from 'react-icons/fa'
// import { BsLinkedin } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://github.com/' target='_blank' rel="noreferrer"><FaGithub /></a>
        {/* <a href='https://github.com/' target='_blank' rel="noreferrer"><BsLinkedin /></a> */}
    </div>
  )
}

export default HeaderSocials